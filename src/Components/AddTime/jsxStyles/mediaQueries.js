export function getAddTimeModalWidth(width) {
  if (width < 376) {
    return '80%';
  } if (width < 651) {
    return '70%';
  } if (width < 1025)  {
    return '70%';
  } else {
    return '45%';
  }
}

export function getExtendedTimerWidth(width) {
  if (width < 376) {
    return 145;
  } 
  if (width < 651) {
    return 100;
  } 
  if (width < 1025)  {
    return 250;
  } 
  else {
    return 300;
  }
}