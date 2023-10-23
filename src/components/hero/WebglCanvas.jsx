`use client`;


import React, { useEffect } from "react";

const WebglCanvas = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2");

    document.title = "🤖";
    // document.body.innerHTML = "";
    document.querySelector('.hero--bg').appendChild(canvas)
    // document.body.style = "margin:0;touch-action:none;overflow:hidden;";
    canvas.style.width = "100%";
    canvas.style.height = "auto";
    canvas.style.userSelect = "none";

    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

    function resize() {
      const { innerWidth: width, innerHeight: height } = window;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      gl.viewport(0, 0, width * dpr, height * dpr);
    }
    window.onresize = resize;

    const vertexSource = `#version 300 es
        #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
        #else
        precision mediump float;
        #endif

        in vec4 position;

        void main(void) {
            gl_Position = position;
        }
        `;

    const fragmentSource = `#version 300 es
        // ... (your fragment shader code here)
        `;

    function compile(shader, source) {
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
      }
    }

    let program;

    function setup() {
      const vs = gl.createShader(gl.VERTEX_SHADER);
      const fs = gl.createShader(gl.FRAGMENT_SHADER);

      compile(vs, vertexSource);
      compile(fs, fragmentSource);

      program = gl.createProgram();

      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
      }
    }

    let vertices, buffer;

    function init() {
      vertices = [
        -1.0, -1.0, 1.0,
        -1.0, -1.0, 1.0,
        -1.0, 1.0, 1.0,
        -1.0, 1.0, 1.0,
      ];

      buffer = gl.createBuffer();

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

      const position = gl.getAttribLocation(program, "position");

      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      program.resolution = gl.getUniformLocation(program, "resolution");
      program.time = gl.getUniformLocation(program, "time");
      program.touch = gl.getUniformLocation(program, "touch");
      program.pointerCount = gl.getUniformLocation(program, "pointerCount");
    }

    const mouse = {
      x: 0,
      y: 0,
      touches: new Set(),
      update: function (x, y, pointerId) {
        this.x = x * dpr;
        this.y = (window.innerHeight - y) * dpr;
        this.touches.add(pointerId);
      },
      remove: function (pointerId) { this.touches.delete(pointerId) },
    };

    function loop(now) {
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.uniform2f(program.resolution, canvas.width, canvas.height);
      gl.uniform1f(program.time, now * 1e-3);
      gl.uniform2f(program.touch, mouse.x, mouse.y);
      gl.uniform1i(program.pointerCount, mouse.touches.size);
      gl.drawArrays(gl.TRIANGLES, 0, vertices.length * 0.5);
      requestAnimationFrame(loop);
    }

    setup();
    init();
    resize();
    loop(0);

    window.addEventListener("pointerdown", (e) => mouse.update(e.clientX, e.clientY, e.pointerId));
    window.addEventListener("pointerup", (e) => mouse.remove(e.pointerId));
    window.addEventListener("pointermove", (e) => {
      if (mouse.touches.has(e.pointerId)) mouse.update(e.clientX, e.clientY, e.pointerId);
    });
  }, []);

  return <></>;
};

export default WebglCanvas;
