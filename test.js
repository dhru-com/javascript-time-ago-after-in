const { formatLocalizedTimeDifference } = require('./index');

const now = new Date();
const futureDate = new Date(now.getTime() + 5 * 60 * 1000);  // 5 minutes from now
const futureDate2 = new Date(now.getTime() + 5);  // 5 minutes from now
const pastDate = new Date(now.getTime() - 3 * 60 * 60 * 1000);  // 3 hours ago

console.log(formatLocalizedTimeDifference(now, futureDate));  // Output: "in 5 minutes"
console.log(formatLocalizedTimeDifference(now, pastDate));  // Output: "3 hours ago"

console.log(formatLocalizedTimeDifference(now, futureDate2));  // Output: "in 5 minutes"
