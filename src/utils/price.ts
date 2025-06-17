export const formatPrice = (priceInCents: number): string => {
  return `$${(priceInCents / 100).toFixed(2)}`;
};

export const calculateTotalPrice = (pricePerItem: number, quantity: number): number => {
  return pricePerItem * quantity;
};

export const formatTotalPrice = (pricePerItem: number, quantity: number): string => {
  return formatPrice(calculateTotalPrice(pricePerItem, quantity));
};