function lerp(a, b, t) {
  t = clamp(t, 0, 1);
  return a + (b - a) * t;
}

function clamp(a, min, max) {
  return Math.min(Math.max(a, min), max);
}