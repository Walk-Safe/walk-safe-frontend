export default function getEtaModalWidth(width) {
  if (width < 376) {
    return '70%';
  } if (width < 651) {
    return '60%';
  } if (width < 768) {
    return '60%';
  } if (width < 1025)  {
    return '50%';
  } else {
    return '40%';
  }
}