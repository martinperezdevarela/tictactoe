varying vec2 vUv;
uniform float u_time;

float rand(vec2 co){
    // return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * u_time);
    // return fract(sin(dot(co, vec2(12.9898, 78.233)) * u_time));
}

void main(void) {
  vec4 localPosition = vec4(position.x, position.y, position.z, 1.0);
  // vec4 localPosition = vec4(position + (rand(vec2(position.x, position.y)) * normalize(position)), 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * localPosition;
  vUv = uv;
}