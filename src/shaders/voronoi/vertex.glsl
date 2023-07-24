uniform float u_time;

void main(void) {
  // vec3 transformed = vec3(position);
  // float freq = smoothstep(1.0, 5.0, 10.0);
  // float amp = smoothstep(1.0, 5.0, 10.0);
  
  // float freq = 3.0;
  // float amp = 5.0;
  // float angle = (u_time + position.x) * freq;
  // transformed.z += sin(angle)*amp;

  vec3 transformed = vec3(position);
  float dx = position.x;
  float dy = position.y;
  float freq = sqrt(dx*dx + dy*dy);
  float amp = 2.5;
  // float angle = -u_time*10.0+freq*6.0;
  float angle = u_time+freq;
  transformed.z += sin(angle)*amp;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}