export const formatAddress = (address: string): string => {
  if (!address.startsWith("0x") || address.length <= 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
