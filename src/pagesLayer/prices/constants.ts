export const tableHeaders = ["Аренда склада (бокса)", "Кв.м.", "Цена за кв.м.", "1 мес", "3 мес", "6 мес", "12 мес"];

const dayPriceBelowXS = 2500;
const dayPriceBelowL = 2400;
const dayPriceBelowXXXL = 2100;

function createData(
  sizeName: string,
  size: number,
  priceForSize: number,
  priceForMonth: number,
  priceForThreeMonth: number,
  priceForHalfYear: number,
  priceForYear: number
) {
  return { sizeName, size, priceForSize, priceForMonth, priceForThreeMonth, priceForHalfYear, priceForYear };
}

const sizes = {
  X: {
    size: 4.5,
    priceForMonth: 4.5 * dayPriceBelowXS,
  },
  XS: {
    size: 5,
    priceForMonth: 5 * dayPriceBelowXS,
  },
  S: {
    size: 7,
    priceForMonth: 7 * dayPriceBelowL,
  },
  M: {
    size: 10,
    priceForMonth: 10 * dayPriceBelowL,
  },
  XM: {
    size: 12,
    priceForMonth: 12 * dayPriceBelowL,
  },
  L: {
    size: 20,
    priceForMonth: 20 * dayPriceBelowL,
  },
  XL: {
    size: 30,
    priceForMonth: 30 * dayPriceBelowXXXL,
  },
  XXL: {
    size: 36,
    priceForMonth: 36 * dayPriceBelowXXXL,
  },
  XXXL: {
    size: 72,
    priceForMonth: 72 * dayPriceBelowXXXL,
  },
};

export const rows = [
  createData(
    "X",
    sizes.X.size,
    dayPriceBelowXS,
    sizes.X.priceForMonth,
    sizes.X.priceForMonth * 3,
    sizes.X.priceForMonth * 6,
    sizes.X.priceForMonth * 12
  ),
  createData(
    "XS",
    sizes.XS.size,
    dayPriceBelowXS,
    sizes.XS.priceForMonth,
    sizes.XS.priceForMonth * 3,
    sizes.XS.priceForMonth * 6,
    sizes.XS.priceForMonth * 12
  ),
  createData(
    "S",
    sizes.S.size,
    dayPriceBelowL,
    sizes.S.priceForMonth,
    sizes.S.priceForMonth * 3,
    sizes.S.priceForMonth * 6,
    sizes.S.priceForMonth * 12
  ),
  createData(
    "M",
    sizes.M.size,
    dayPriceBelowL,
    sizes.M.priceForMonth,
    sizes.M.priceForMonth * 3,
    sizes.M.priceForMonth * 6,
    sizes.M.priceForMonth * 12
  ),
  createData(
    "XM",
    sizes.XM.size,
    dayPriceBelowL,
    sizes.XM.priceForMonth,
    sizes.XM.priceForMonth * 3,
    sizes.XM.priceForMonth * 6,
    sizes.XM.priceForMonth * 12
  ),
  createData(
    "L",
    sizes.L.size,
    dayPriceBelowL,
    sizes.L.priceForMonth,
    sizes.L.priceForMonth * 3,
    sizes.L.priceForMonth * 6,
    sizes.L.priceForMonth * 12
  ),
  createData(
    "XL",
    sizes.XL.size,
    dayPriceBelowXXXL,
    sizes.XL.priceForMonth,
    sizes.XL.priceForMonth * 3,
    sizes.XL.priceForMonth * 6,
    sizes.XL.priceForMonth * 12
  ),
  createData(
    "XXL",
    sizes.XXL.size,
    dayPriceBelowXXXL,
    sizes.XXL.priceForMonth,
    sizes.XXL.priceForMonth * 3,
    sizes.XXL.priceForMonth * 6,
    sizes.XXL.priceForMonth * 12
  ),
  createData(
    "XXXL",
    sizes.XXXL.size,
    dayPriceBelowXXXL,
    sizes.XXXL.priceForMonth,
    sizes.XXXL.priceForMonth * 3,
    sizes.XXXL.priceForMonth * 6,
    sizes.XXXL.priceForMonth * 12
  ),
];