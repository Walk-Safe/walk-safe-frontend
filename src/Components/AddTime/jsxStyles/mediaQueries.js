export function getAddTimeModalWidth(width) {
  if (width < 376) {
    return '80%';
  } else if (width < 651) {
    return '70%';
  } else if (width < 930) {
    return '60%';
  } else if (width < 1025)  {
    return '60%';
  } else {
    return '50%';
  }
}

export function getExtendedTimerWidth(width) {
  if (width < 321) {
    return 90;
  } else if (width < 376) {
    return 110;
  } else if (width < 651) {
    return 120;
  } else if (width < 930) {
    return 150;
  } else if (width < 1025)  {
    return 200;
  } else {
    return 200;
  }
}