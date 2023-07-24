vec3 randColor(int number) {
  return fract(sin(vec3(number + 1) * vec3(12.8787, 1.97, 20.73739)));
}

#pragma glslify: export(randColor)