
# javascript-time-ago-after-in

## Description

`javascript-time-ago-after-in` is a JavaScript library that provides localized relative time formatting (for both past and future dates) and automatically selects the appropriate time unit (seconds, minutes, hours, etc.) to format a time interval.

## Installation

```bash
npm install javascript-time-ago-after-in
```

## Usage

```javascript
const { formatLocalizedTimeDifference } = require('javascript-time-ago-after-in');

const now = new Date();
const futureDate = new Date(now.getTime() + 5 * 60 * 1000);  // 5 minutes from now
const pastDate = new Date(now.getTime() - 3 * 60 * 60 * 1000);  // 3 hours ago

console.log(formatLocalizedTimeDifference(now, futureDate));  // Output: "in 5 minutes"
console.log(formatLocalizedTimeDifference(now, pastDate));  // Output: "3 hours ago"
```

## Options

- `abbreviate`: Set to `true` to use abbreviations like "s" for seconds or "m" for minutes.
- `language`: The language for the output (currently supports English).

