export default function formatCurrency(money, opt) {
  return new Intl.NumberFormat('sfb', {currency: 'EUR', style: 'currency', ...opt}).format(money)
}