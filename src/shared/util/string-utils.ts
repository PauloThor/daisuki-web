class StringUtils {
  static cpfMask(documentNumber?: string) {
    if (documentNumber == null) {
      return "";
    }
    documentNumber = documentNumber.replace(/\D/g, "");

    return documentNumber.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/g,
      "$1.$2.$3-$4"
    );
  }

  static cnpjMask(documentNumber?: string) {
    if (documentNumber == null) {
      return "";
    }
    documentNumber = documentNumber.replace(/\D/g, "");

    return documentNumber.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      "$1.$2.$3/$4-$5"
    );
  }

  static phoneMask(phone?: string) {
    if (phone == null) {
      return "";
    }
    phone = phone.replace(/\D/g, "");
    return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g, "($1) $2 $3-$4");
  }

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
}

export default StringUtils;
