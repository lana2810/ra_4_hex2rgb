function convertor(value) {
  if (value.length < 7) return "";
  if (value.length > 7) return "error!!!";
  const formattedValue = value.slice(1, 7);

  const red = parseInt(formattedValue.slice(0, 2), 16);

  if (isNaN(red)) return "error!!!";

  let green = parseInt(formattedValue.slice(2, 4), 16);
  if (isNaN(green)) return "error!!!";

  let blue = parseInt(formattedValue.slice(4, 6), 16);
  if (isNaN(blue)) return "error!!!";

  return `rgb(${red},${green},${blue})`;
}

export default convertor;
