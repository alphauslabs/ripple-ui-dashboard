//@ts-nocheck
const currencyConfig = {
  usd: {
    code: 'usd',
    symbol: '$',
    precision: 2,
    decimalSeparator: '.',
    groupSeparator: ',',
    lang: {
      en: 'USD',
      ja: '米ドル',
    },
    key: ['usd', 'USD', '$'],
  },
  jpy: {
    code: 'jpy',
    symbol: '¥',
    precision: 0,
    decimalSeparator: '.',
    groupSeparator: ',',
    lang: {
      en: 'JPY',
      ja: '日本円',
    },
    key: ['jpy', 'JPY', 'yen'],
  },
  sgd: {
    code: 'sgd',
    symbol: 'S$',
    precision: 2,
    decimalSeparator: '.',
    groupSeparator: ',',
    lang: {
      en: 'SGD',
      ja: 'シンガポール・ドル',
    },
    key: ['sgd', 'SGD'],
  },
  myr: {
    code: 'myr',
    symbol: 'RM',
    precision: 0,
    decimalSeparator: '.',
    groupSeparator: ',',
    lang: {
      en: 'MYR',
      ja: 'リンギット',
    },
    key: ['myr', 'MYR', 'rm', 'RM'],
  },
  idr: {
    code: 'idr',
    symbol: 'Rp.',
    precision: 0,
    decimalSeparator: ',',
    groupSeparator: '.',
    lang: {
      en: 'IDR',
      ja: 'ルピア',
    },
    key: ['idr', 'IDR', 'rp', 'Rp'],
  },
  inr: {
    code: 'inr',
    symbol: '₹',
    precision: 2,
    decimalSeparator: ',',
    groupSeparator: '.',
    lang: {
      en: 'INR',
      ja: 'インドルピア',
    },
    key: ['inr', 'INR', 'rs', 'Rs'],
  },
};

export const convertCurrencyType = (currencyType) => {
  let code = currencyType;

  for (const key in currencyConfig) {
    if (currencyConfig[key].key.some((i) => i === currencyType)) {
      code = currencyConfig[key].code;
    }
  }

  return code;
};

export const currencySymbol = (currencyType) => {
  const convertedType = convertCurrencyType(currencyType);

  return currencyConfig[convertedType]
    ? currencyConfig[convertedType].symbol
    : '';
};

export const currencyPrecision = (currencyType) => {
  const convertedType = convertCurrencyType(currencyType);

  return currencyConfig[convertedType]
    ? currencyConfig[convertedType].precision
    : 2;
};

export const currencySeparator = (currencyType) => {
  const convertedType = convertCurrencyType(currencyType);

  return {
    decimal: currencyConfig[convertedType]
      ? currencyConfig[convertedType].decimalSeparator
      : '.',
    group: currencyConfig[convertedType]
      ? currencyConfig[convertedType].groupSeparator
      : ',',
  };
};

export const currencyLangEn = {
  usd: 'USD',
  jpy: 'JPY',
  sgd: 'SGD',
  myr: 'MYR',
  idr: 'IDR',
  inr: 'INR',
};

export const currencyLangJa = {
  usd: '米ドル',
  jpy: '日本円',
  sgd: 'シンガポール・ドル',
  myr: 'リンギット',
  idr: 'ルピア',
  inr: 'インドルピア',
};
