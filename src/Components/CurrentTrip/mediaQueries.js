export default function getMainTimerSize(width) {
  if (width < 321) {
    return 95;
  } else if (width < 376) {
    return 100;
  } else if (width < 651) {
    return 115;
  } else if (width < 930) {
    return 160;
  } else if (width < 1025)  {
    return 220;
  } else {
    return 180;
  }
}