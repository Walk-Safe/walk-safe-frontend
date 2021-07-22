export default function getDropdownWidth(width) {
  if (width < 321) {
    return '70%';
  } else if (width < 376) {
    return '60%';
  } else if (width < 651) {
    return '50%';
  } else if (width < 1025)  {
    return '35%';
  } else {
    return '20%';
  }
}