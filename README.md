
# javascript-time-ago-after-in

## Description

`javascript-time-ago-after-in` is a JavaScript library that provides localized relative time formatting (for both past and future dates) and automatically selects the appropriate time unit (seconds, minutes, hours, etc.) to format a time interval. The library supports multiple languages and handles various date formats (e.g., ISO strings, timestamps, `Date` objects).

## Installation

```bash
npm install javascript-time-ago-after-in
```

## Usage

```javascript
const { formatLocalizedTimeDifference } = require('javascript-time-ago-after-in');

// Example 1: Using JavaScript Date objects
const now = new Date();
const futureDate = new Date(now.getTime() + 5 * 60 * 1000);  // 5 minutes from now
const pastDate = new Date(now.getTime() - 3 * 60 * 60 * 1000);  // 3 hours ago

console.log(formatLocalizedTimeDifference(now, futureDate));  // Output: "in 5 minutes"
console.log(formatLocalizedTimeDifference(now, pastDate));  // Output: "3 hours ago"

// Example 2: Using ISO date strings
const date1 = "2024-10-16T14:30:00";
const date2 = "2024-10-18T16:35:00";

console.log(formatLocalizedTimeDifference(date1, date2));  // Output: "in 2 days"

// Example 3: Using Unix timestamps
const timestamp1 = 1609459200000;  // January 1, 2021
const timestamp2 = 1612137600000;  // February 1, 2021

console.log(formatLocalizedTimeDifference(timestamp1, timestamp2));  // Output: "in 1 month"

// Example 4: Using different languages
console.log(formatLocalizedTimeDifference(date1, date2, { language: 'fr' }));  // Output: "dans 2 jours"
console.log(formatLocalizedTimeDifference(date1, date2, { language: 'es' }));  // Output: "en 2 días"

// Example 5: Using abbreviations
console.log(formatLocalizedTimeDifference(now, futureDate, { abbreviate: true }));  // Output: "in 5m"
console.log(formatLocalizedTimeDifference(now, pastDate, { abbreviate: true }));  // Output: "3h ago"
```

## Supported Languages

This library currently supports the following languages:
- English (`en`)
- French (`fr`)
- Spanish (`es`)
- German (`de`)
- Russian (`ru`)
- Italian (`it`)
- Dutch (`nl`)
- Portuguese (`pt`)
- Chinese (`zh`)
- Japanese (`ja`)
- Korean (`ko`)
- Arabic (`ar`)
- Hindi (`hi`)
- Turkish (`tr`)
- Polish (`pl`)

## Options

- `abbreviate`: Set to `true` to use abbreviations like "s" for seconds or "m" for minutes.
- `language`: The language for the output. Currently supports multiple languages (see above).
- `date1`, `date2`: Accepts various date formats such as JavaScript `Date` objects, ISO strings, or Unix timestamps.

## Examples of Supported Date Formats

```javascript
// ISO String
const date1 = "2023-10-16T10:30:00";

// JavaScript Date object
const date2 = new Date("2023-10-17T11:30:00");

// Unix timestamp
const date3 = 1609459200000;

// Mixing formats
console.log(formatLocalizedTimeDifference(date1, date2));  // Works with both ISO and Date objects
console.log(formatLocalizedTimeDifference(date1, date3));  // Works with ISO string and Unix timestamp
```

