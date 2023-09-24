export type CryptocurrenciesType = {
  symbol: string
  name: string
  symbol_native: string
  decimal_digits: number
  rounding: number
  code: string
  name_plural: string
}

type CryptocurrenciesType = {
  [key: string]: CryptocurrenciesType
}

export const cryptocurrencies: CryptocurrenciesType = {
  USDC: {
    symbol: "USDC",
    name: "USDC coin",
    symbol_native: "$",
    decimal_digits: 6,
    rounding: 0,
    code: "USDC",
    name_plural: "Digital US dollars",
},
export const cryptocurrencies: CryptocurrenciesType = {
  EURC: {
    symbol: "EURC",
    name: "EURC coin",
    symbol_native: "€",
    decimal_digits: 6,
    rounding: 0,
    code: "EURC",
    name_plural: "Digital EURO currency",