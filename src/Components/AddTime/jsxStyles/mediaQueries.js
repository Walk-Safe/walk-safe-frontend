export function getAddTimeModalWidth(width) {
  if (width < 376) {
    return '80%';
  } else if (width < 651) {
    return '70%';
  } else if (width < 930) {
    return '60%';
  } else if (width < 1025)  {
    return '50%';
  } else {
    return '50%';
  }
}

export function getExtendedTimerWidth(width) {
  if (width < 376) {
    return 145;
  } else if (width < 651) {
    return 100;
  } else if (width < 930) {
    return 150;
  } else if (width < 1025)  {
    return 200;
  } else {
    return 180;
  }
}