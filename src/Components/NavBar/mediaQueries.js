export default function DropdownWidthMediaQuery(width) {
  if (width < 360) {
    return '70%';
  } else {
    return '20%';
  }
}