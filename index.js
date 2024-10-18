
const fs = require('fs');
const path = require('path');

/**
 * Load locale JSON file dynamically
 * @param {string} language - Language code (e.g., 'en', 'fr', 'es')
 * @returns {Object} - Language labels object
 */
function loadLocale(language) {
    try {
        const localePath = path.join(__dirname, 'locales', `${language}.json`);
        return JSON.parse(fs.readFileSync(localePath, 'utf8'));
    } catch (error) {
        // Fallback to English if the language file is not found
        const fallbackPath = path.join(__dirname, 'locales', 'en.json');
        return JSON.parse(fs.readFileSync(fallbackPath, 'utf8'));
    }
}

/**
 * Formats the time difference between two dates with localized, relative time formatting.
 * Automatically selects the right units (seconds, minutes, etc.).
 * 
 * @param {Date|string|number} date1 - The reference date (can be a Date object, string, or timestamp).
 * @param {Date|string|number} date2 - The target date (can be a Date object, string, or timestamp).
 * @param {Object} options - Optional configurations for output format.
 * @param {boolean} [options.abbreviate=false] - Whether to use abbreviations (e.g., "sec", "min").
 * @param {string} [options.language='en'] - The language for output (defaults to English).
 * @returns {string} - Formatted relative time string.
 */
function formatLocalizedTimeDifference(date1, date2, options = {}) {
    const { abbreviate = false, language = 'en' } = options;

    const parsedDate1 = new Date(date1);
    const parsedDate2 = new Date(date2);

    // Check if the parsed dates are valid
    if (isNaN(parsedDate1) || isNaN(parsedDate2)) {
        throw new Error("Invalid date input. Please provide valid date formats.");
    }

    const timeDifference = parsedDate2 - parsedDate1;
    const absoluteDifference = Math.abs(timeDifference); // Absolute difference in milliseconds
    const isFuture = timeDifference > 0;

    const SECOND_MS = 1000;
    const MINUTE_MS = 60000;
    const HOUR_MS = 3600000;
    const DAY_MS = 86400000;
    const MONTH_MS = 2629800000; // Approximate month in ms
    const YEAR_MS = 31557600000; // Approximate year in ms

    const seconds = Math.floor(absoluteDifference / SECOND_MS);
    const minutes = Math.floor(absoluteDifference / MINUTE_MS);
    const hours = Math.floor(absoluteDifference / HOUR_MS);
    const days = Math.floor(absoluteDifference / DAY_MS);
    const months = Math.floor(absoluteDifference / MONTH_MS);
    const years = Math.floor(absoluteDifference / YEAR_MS);

    // Load the appropriate language labels
    const labels = loadLocale(language);

    // Time formatting logic
    if (seconds < 1) {
        return labels.now;
    }
    if (seconds < 60) {
        return formatOutput(seconds, labels.seconds, isFuture, labels);
    }
    if (minutes < 60) {
        return formatOutput(minutes, labels.minutes, isFuture, labels);
    }
    if (hours < 24) {
        return formatOutput(hours, labels.hours, isFuture, labels);
    }
    if (days < 30) {
        return formatOutput(days, labels.days, isFuture, labels);
    }
    if (months < 12) {
        return formatOutput(months, labels.months, isFuture, labels);
    }

    return formatOutput(years, labels.years, isFuture, labels);
}

/**
 * Helper function to format the output based on whether the time is in the past or future.
 * 
 * @param {number} value - The numeric value of the time unit (e.g., 2, 5, etc.)
 * @param {string} unit - The unit label (e.g., "seconds", "minutes")
 * @param {boolean} isFuture - Whether the time difference is in the future or the past
 * @param {Object} labels - The labels for the units (seconds, minutes, etc.)
 * @returns {string} - Formatted string
 */
function formatOutput(value, unit, isFuture, labels) {
    if (value === 1) {
        unit = unit.replace(/s$/, ''); // Singular form
    }
    if (isFuture) {
        return `${labels.in} ${value} ${unit}`;
    }
    return `${value} ${unit} ${labels.ago}`;
}

module.exports = { formatLocalizedTimeDifference };
