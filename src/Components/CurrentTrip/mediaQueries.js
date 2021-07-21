export default function TimerWidthMediaQuery(width) {
  if (width < 360) {
    return 120;
  } else {
    return 180;
  }
}