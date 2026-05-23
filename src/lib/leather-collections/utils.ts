export function calculateSampleTotalCents(count: number): number {
  if (count <= 0) return 0;
  if (count <= 4) return 2500;
  return 2500 + (count - 4) * 500;
}

export function formatSampleTotalUsd(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(cents / 100);
}
