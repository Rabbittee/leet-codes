function minCostClimbingStairs(cost: number[]): number {
  let minCost = 0;
  let cost1StepBefore = cost[1];
  let cost2StepBefore = cost[0];
  for (let i = 2; i < cost.length; i++) {
    minCost = Math.min(cost1StepBefore, cost2StepBefore) + cost[i];
    cost2StepBefore = cost1StepBefore;
    cost1StepBefore = minCost;
  }
  return Math.min(cost1StepBefore, cost2StepBefore);
};