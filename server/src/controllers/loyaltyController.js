export const getLoyaltySummary = async (req, res) => {
  res.json({
    userId: req.user.id,
    name: req.user.name,
    points: req.user.points,
    tiers: [
      { points: 200, reward: "Free soft drink" },
      { points: 500, reward: "Classic Brik reward" },
      { points: 800, reward: "11 DT menu voucher" }
    ],
    redeemRate: "100 points = 1 currency unit"
  });
};
