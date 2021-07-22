export default function getMainTimerSize(width) {
  if (width < 376) {
    return 115;
  } 
  if (width < 651) {
    return 130;
  } 
  if (width < 930) {
    return 180;
  } 
  if (width < 1025)  {
    return 250;
  } 
  else {
    return 180;
  }
}