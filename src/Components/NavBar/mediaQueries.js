export default function DropdownWidthMediaQuery(width) {
  if (width < 360) {
    return '70%';
  } if (width < 651) {
    return '50%';
  } if (width < 1025)  {
    return '35%';
  } else {
    return '20%';
  }
}