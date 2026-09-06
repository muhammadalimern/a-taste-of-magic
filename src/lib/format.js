export function money(amount) {
  return `$${Number(amount || 0).toFixed(2)}`;
}

export function orderReference(prefix) {
  const stamp = Date.now().toString(36).toUpperCase().slice(-4);
  const noise = Math.floor(Math.random() * 900 + 100);
  return `${prefix}-${stamp}${noise}`;
}
