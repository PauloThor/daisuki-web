class StringUtils {
  static removeNonNumbersFromMaskedValue = (value: string) => {
    return value.replace(/[^\d]/g, "");
  };

  static currencyMask = (event?: string) => {
    let value = String(event);

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

    return `R$ ${value}`;
  };

  static urlMask = (value?: string) => {
    if (value == null) {
      return "";
    }
    return value
      .toLowerCase()
      .replaceAll(" ", "-")
      .replace(/[:'?!().,;]/g, "");
  };

  static removeDashFromUrl = (value?: string) => {
    if (value == null) {
      return "";
    }
    return value.toLowerCase().replaceAll("-", " ");
  };
}

export default StringUtils;
