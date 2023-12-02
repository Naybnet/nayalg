const prices = [7, 1, 5, 3, 6, 4]

function maxProfit(prices: number[]): number {
  let maxProfit = 0
  let newProfit = 0
  let previousProfit = 0
  let buyLevel = 0
  for (let ip = 0; ip < prices.length; ip++) {
    if (buyLevel === 0)
      buyLevel = prices[ip]
    newProfit = prices[ip] - buyLevel
    if (newProfit < previousProfit) {
      // sell
      maxProfit += previousProfit
      buyLevel = 0
      previousProfit = 0
    }
    else {
      // keep
    }
  }
  return -1
}
