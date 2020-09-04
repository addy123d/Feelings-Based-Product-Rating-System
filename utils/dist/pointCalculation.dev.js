"use strict";

function pointAddition(points, totalPoints) {
  if (totalPoints >= 5 && points > 0 || totalPoints <= -5 && points < 0) return totalPoints;else totalPoints = points + totalPoints;
  return totalPoints;
}

module.exports = pointAddition;