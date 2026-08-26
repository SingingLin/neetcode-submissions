class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            let tempProfit = prices[i] - minPrice;
            minPrice = Math.min(prices[i], minPrice);
            profit = Math.max(tempProfit, profit);
        }

        return profit;
    }
}
