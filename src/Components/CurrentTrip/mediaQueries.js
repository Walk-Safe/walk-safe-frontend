export default function getMainTimerSize(width) {
  if (width < 321) {
    return 90;
  } else if (width < 376) {
    return 115;
  } else if (width < 651) {
    return 130;
  } else if (width < 930) {
    return 160;
  } else if (width < 1025)  {
    return 250;
  } else {
    return 180;
  }
}