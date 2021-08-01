export default function getAlertWidth(width) {
  if (width < 376) {
    return '80%';
  } else if (width < 651) {
    return '70%';
  } else if (width < 1025)  {
    return '70%';
  } else {
    return '50%';
  }
}