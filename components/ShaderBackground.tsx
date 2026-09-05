"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// ⬇️ Paste the ENTIRE fragment shader you uploaded here
const FRAGMENT_SHADER = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec4 u_scene;

#define PI 3.14159265358979323846

float getAmplitude(float f, float x, float y){
    return sin(x*f + u_scene.z*0.7)*0.5 +
           cos(y*f*0.7 + u_scene.z*0.45)*0.5;
}

float getElevation(vec2 uv){
    float e = 0.0;
    e += getAmplitude(0.8, uv.x, uv.y);
    e += getAmplitude(1.4, uv.x+1.5, uv.y-1.0)*0.5;
    e += getAmplitude(2.6, uv.x*0.7, uv.y*0.8)*0.25;
    return e;
}

vec3 palette(float t){
    vec3 c1 = vec3(0.00,0.01,0.03);
    vec3 c2 = vec3(0.01,0.06,0.16);
    vec3 c3 = vec3(0.00,0.40,0.78);
    vec3 c4 = vec3(0.45,0.92,1.00);

    if(t < 0.33){
        return mix(c1,c2,t/0.33);
    }else if(t < 0.66){
        return mix(c2,c3,(t-0.33)/0.33);
    }else{
        return mix(c3,c4,(t-0.66)/0.34);
    }
}

void main(){

    vec2 uv = gl_FragCoord.xy / u_scene.xy;
    uv = uv*2.0 - 1.0;
    uv.x *= u_scene.x/u_scene.y;

    float elevation = getElevation(uv*2.1);

    float wave = sin((uv.x*2.4 + elevation*1.4) + u_scene.z*0.55);
    wave = smoothstep(-0.3,0.9,wave);

    vec2 p1 = vec2(-0.35,0.15);
    vec2 p2 = vec2(0.45,-0.05);

    float glow1 = exp(-length(uv-p1)*1.8);
    float glow2 = exp(-length(uv-p2)*2.0);

    float mixValue = clamp(wave*0.55 + glow1*0.28 + glow2*0.22,0.0,1.0);

    vec3 color = palette(mixValue);

    float vignette = smoothstep(1.7,0.25,length(uv));
    color *= vignette;

    gl_FragColor = vec4(color,1.0);
}
`;

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext("webgl");

    if (!gl) return;

    const dpr = Math.min(window.devicePixelRatio, 2);

    const resize = () => {
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX_SHADER));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1,
       3, -1,
      -1,  3,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const scene = gl.getUniformLocation(program, "u_scene");
    const shape = gl.getUniformLocation(program, "u_shape");
    const surface = gl.getUniformLocation(program, "u_surface");
    const finish = gl.getUniformLocation(program, "u_finish");
    const transform = gl.getUniformLocation(program, "u_transform");
    const space = gl.getUniformLocation(program, "u_space");
    const cursor = gl.getUniformLocation(program, "u_cursor");
    const colors = gl.getUniformLocation(program, "u_colors");

    gl.uniform3fv(colors, new Float32Array([
      0.086,0.043,0.043,
      0.761,0.251,0.165,
      0.957,0.616,0.216,
      1.000,0.910,0.761,
      0,0,0, 0,0,0, 0,0,0, 0,0,0
    ]));

    gl.uniform4f(shape, 1.5, 0.48, 0.5, 0.0);
    gl.uniform4f(surface, 2.4, 0.92, -0.5, 1.0);
    gl.uniform4f(finish, 3.04, 0.61, 0.016, 0.35);
    gl.uniform4f(transform, 7.0, 0.0, 0.16, 0.0);
    gl.uniform4f(space, 0, 0, 0, 0);
    gl.uniform4f(cursor, 0, 4, 0.65, 0.3);

    let frame = 0;
    const start = performance.now();

    const render = () => {
      const t = (performance.now() - start) / 1000;

      gl.uniform4f(
        scene,
        canvas.width,
        canvas.height,
        t * 0.86,
        4
      );

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      frame = requestAnimationFrame(render);
    };

    render();

    const visibility = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else render();
    };

    document.addEventListener("visibilitychange", visibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full pointer-events-none"
    />
  );
}