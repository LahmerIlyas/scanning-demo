type PepsicoBarcode = {
  type: 'pepsico';
  barcode: string;
  productId: string;
}

type NonPepsicoBarCodeMapping = {
  type: 'non-pepsico';
  barcode: string;
  pepsicoProductIds: string[];
}

type BarCodeMapping = PepsicoBarcode | NonPepsicoBarCodeMapping;

const mapping: BarCodeMapping[] = [
  {
    type: 'pepsico',
    barcode: 'ABC-1234',
    productId: '10052000047001',
  },
  {
    type: 'pepsico',
    barcode: '9780201379624',
    productId: '10052000039709',
  },
  {
    type: 'pepsico',
    barcode: 'ABC-abc-1234-!@#$',
    productId: '10052000336907',
  },
  {
    type: 'non-pepsico',
    barcode: '0725272730706',
    pepsicoProductIds: ['10052000336914', '10052000336778', '10052000039693'],
  },
];

export const getBarCodeMapping = (barCode: string): BarCodeMapping => {
  const item = mapping.find(element => element.barcode === barCode);
  if (!item) {
    throw new Error(`Can't find mapping for barcode ${barCode}`);
  }

  return item;
};
