uniform float u_time;
uniform vec2 u_resolution;

vec3 randColor(int number) {
  return fract(sin(vec3(number + 1) * vec3(12.8787, 1.97, 20.73739)));
}

void main(void) {
  // vec3 color = vec3(0);
  
  // Normalize coordinates.
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  
  // Generate random points
  int points = 5;
  vec2 array[5] = vec2[5](
    vec2(0.2 * sin(u_time) + 0.01, 0.3 - cos(u_time) * 0.01),
    vec2(cos(u_time) * 0.05 + 0.5, 0.4),
    vec2(sin(u_time) * 0.02 + 0.8, 0.7 - cos(u_time) * 0.01),
    vec2(sin(u_time) * 0.03 + 0.7, 0.3),
    vec2(0.9, cos(u_time) * 0.1 + 0.1)
  );
  
  float dmin = 1000.0;
  int point = 0;
  for (int i = 0; i < points; i++) {
    // Calculate tolerance to mark point.
    // vec2 uv_rounded = floor(uv * 100.0) / 100.0;
    // vec2 point_rounded = floor(array[i] * 100.0) / 100.0;
    // If it's the point mark is as a blank point.
    // if (uv_rounded == point_rounded) {
    //   color = vec3(1);
    // }
    // Check the dinstance to the point.
    if (length(array[i] - uv) < dmin) {
      point = i;
      dmin = length(array[i] - uv);
    }
  }
  // gl_FragColor = vec4(vec3(randColor(point) + color), 1.0);
  // gl_FragColor = vec4(vec3(dmin + randColor(point)), 1.0);
  // gl_FragColor = vec4(vec3(randColor(point) - dmin), 1.0);
  // gl_FragColor = vec4(vec3(randColor(point) - dmin * 1.1), 1.0);
  // gl_FragColor = vec4(vec3(dmin), 1.0);
  gl_FragColor = vec4(vec3(1.0 - dmin), 1.0);
  // gl_FragColor = vec4(vec3(1.0 - dmin - randColor(point)), 1.0);
  // gl_FragColor = vec4(vec3(1.0 - dmin - randColor(int(dmin))), 1.0);
  // gl_FragColor = vec4(vec3(1.0 - dmin - randColor(1-int(dmin))), 1.0);
  // gl_FragColor = vec4(vec3(dmin - randColor(1-int(dmin))), 1.0);
  // gl_FragColor = vec4(vec3(dmin - randColor(int(dmin))), 1.0);
  
  // vec2 st = gl_FragCoord.xy/u_resolution.xy;
  // gl_FragColor=vec4(st.x,st.y,0.0,1.0);
}