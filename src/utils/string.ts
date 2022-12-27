const formatCurrency = (value: string = "0") => {
  try {
    return (+value).toLocaleString("en-US");
  } catch (error) {
    console.error(error);
    return "0";
  }
};
function formatAddress(value: string, start: number = 4, end: number = 5) {
  return `${value?.substring(0, start)}...${value?.substring(value.length - end)}`;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { formatCurrency, formatAddress, capitalizeFirstLetter };
