export default function getDropdownWidth(width) {
  if (width < 376) {
    return '60%';
  } if (width < 651) {
    return '50%';
  } if (width < 1025)  {
    return '35%';
  } else {
    return '20%';
  }
}