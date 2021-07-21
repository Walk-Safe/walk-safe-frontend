export default function DropdownWidthMediaQuery(width) {
  if (width < 360) {
    return '80%';
  } else {
    return '20%';
  }
}