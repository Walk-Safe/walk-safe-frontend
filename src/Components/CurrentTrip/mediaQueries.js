export default function TimerWidthMediaQuery(width) {
  if (width < 360) {
    return 130;
  } else {
    return 180;
  }
}