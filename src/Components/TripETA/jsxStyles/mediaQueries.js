export default function getEtaModalWidth(width) {
  if (width < 376) {
    return '80%';
  } if (width < 651) {
    return '80%';
  } if (width < 1025)  {
    return '80%';
  } else {
    return '45%';
  }
}