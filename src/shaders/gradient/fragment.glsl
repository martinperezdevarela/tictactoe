varying vec2 vUv;

void main(void) {
  //Gradient 1 (genZ1)
  // gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);
  
  //Gradient 2 (marley)
  // gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);
  
  //Gradient 3 (genZ2)
  gl_FragColor = vec4(vUv.x, vUv.y, 0.5, 1.0);
  
  //Gradient 4 (black & white)
  // gl_FragColor = vec4(vec3(vUv.x), 1.0);

}