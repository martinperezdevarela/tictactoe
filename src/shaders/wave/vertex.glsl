//Variables shared from the vertexShader to the fragmentShader.
varying vec3 pos; 
varying vec2 vUv;

uniform float u_time;

void main() {
  vec4 result;
  pos = position;

  //projectionMatrix, modelViewMatrix and position --> passed in from Three.js 
  //result = vec4(position.x, position.y, position.z, 1.0);
  //result = vec4(position.x, sin(position.z), position.z, 1.0);
  //result = vec4(position.x, sin(position.z) + position.y, position.z, 1.0);
  //result = vec4(position.x, sin(position.z/4.0) + position.y, position.z, 1.0);
  //                          amplitude * sin(position.z / frecuency ) + desplacement        
  //result = vec4(position.x, 4.0       * sin(position.z / 4.0       ) + position.y  , position.z, 1.0);
  
  //result = vec4(position.x, position.y, position.z, 1.0);
  //result = vec4(position.x, position.y + sin(u_time), position.z, 1.0);
  
  //Convert box into a 3D sine wave plane
  //result = vec4(position.x, sin(position.z + u_time), position.z, 1.0);
  
  //Change 2D sine wave plane into wavy box.
  //result = vec4(position.x, sin(position.z + u_time) + position.y, position.z, 1.0);
  
  //Changin how wavy the box is by updating the frecuency.
  result = vec4(position.x, sin((position.z) / 4.0 + u_time) + position.y, position.z, 1.0);
  
  //Change the amplitude of the box waves.
  //result = vec4(position.x, 2.0 * sin((position.z) / 2.0 + u_time) + position.y, position.z, 1.0);
  //result = vec4(position.x, 2.0 * sin((position.z) / 2.0 + u_time) + position.y, 2.0 * sin((position.x) / 2.0 + u_time) + position.z, 1.0);
  //result = vec4(2.0 * sin((position.z) / 2.0 + u_time) + position.x, 2.0 * cos((position.z) / 2.0 + u_time) + position.y, position.z, 1.0);
  
  result = vec4(position.x, sin(position.z + u_time) + cos(position.x + u_time) + position.y, position.z, 1.0);
  
  gl_Position = projectionMatrix * modelViewMatrix * result;
  vUv = uv;
}