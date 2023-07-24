//Variables shared from the vertexShader to the fragmentShader.
varying vec3 pos;
varying vec2 vUv;

uniform float u_time;

void main() {
  vec2 uv = vUv;

  // gl_FragColor = vec4(1.0, 0, 0, 1.0);
  //gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
  // gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1.0);
  
  // if (pos.y >= 0.0) {
  //   //gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  //   //gl_FragColor = vec4(abs(sin(u_time)), abs(cos(u_time)), 0.0, 1.0);
  //   gl_FragColor = vec4(abs(cos(u_time)), 0.0, 0.0, abs(sin(u_time)));
  // }  else {
  //   //gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
  //   //gl_FragColor = vec4(abs(cos(u_time)), abs(sin(u_time)), 0.0, 1.0);
  //   gl_FragColor = vec4(0.0, abs(sin(u_time)), 0.0, abs(cos(u_time)));
  // }
  
  //gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

  float cb = floor((uv.x + u_time * 0.05) * 6.0) + floor((uv.y + u_time * 0.05) * 6.0);
  gl_FragColor = vec4(1.0, 0.0, 0.0, mod(cb, 2.0));
}