export function calculateHealthScore(years, sip, futureValue) {

  let score = 50;
  const reasons = [];

  if (years >= 10) {
    score += 20;
    reasons.push("Long investment horizon improves compounding.");
  }

  if (sip > 0) {
    score += 15;
    reasons.push("Regular SIP investment planned.");
  }

  if (futureValue > sip * years * 12) {
    score += 10;
    reasons.push("Expected returns exceed total invested amount.");
  }

  if (years < 5) {
    reasons.push("Short investment horizon increases investment risk.");
  }

  const status =
    score > 80
      ? "Excellent"
      : score > 65
      ? "Good"
      : "Needs Improvement";

  return { score, status, reasons };
}