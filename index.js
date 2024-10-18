// Define the language labels inside the file

const locales = {
    en: {
        second: "second",
        seconds: "seconds",
        minute: "minute",
        minutes: "minutes",
        hour: "hour",
        hours: "hours",
        day: "day",
        days: "days",
        month: "month",
        months: "months",
        year: "year",
        years: "years",
        ago: "ago",
        in: "in",
        now: "Just now"
    },
    fr: {
        second: "seconde",
        seconds: "secondes",
        minute: "minute",
        minutes: "minutes",
        hour: "heure",
        hours: "heures",
        day: "jour",
        days: "jours",
        month: "mois",
        months: "mois",
        year: "année",
        years: "années",
        ago: "il y a",
        in: "dans",
        now: "À l'instant"
    },
    es: {
        second: "segundo",
        seconds: "segundos",
        minute: "minuto",
        minutes: "minutos",
        hour: "hora",
        hours: "horas",
        day: "día",
        days: "días",
        month: "mes",
        months: "meses",
        year: "año",
        years: "años",
        ago: "hace",
        in: "en",
        now: "Ahora mismo"
    },
    de: {
        second: "Sekunde",
        seconds: "Sekunden",
        minute: "Minute",
        minutes: "Minuten",
        hour: "Stunde",
        hours: "Stunden",
        day: "Tag",
        days: "Tage",
        month: "Monat",
        months: "Monate",
        year: "Jahr",
        years: "Jahre",
        ago: "vor",
        in: "in",
        now: "Gerade jetzt"
    },
    ru: {
        second: "секунда",
        seconds: "секунды",
        minute: "минута",
        minutes: "минуты",
        hour: "час",
        hours: "часы",
        day: "день",
        days: "дней",
        month: "месяц",
        months: "месяцев",
        year: "год",
        years: "лет",
        ago: "назад",
        in: "через",
        now: "Прямо сейчас"
    },
    it: {
        second: "secondo",
        seconds: "secondi",
        minute: "minuto",
        minutes: "minuti",
        hour: "ora",
        hours: "ore",
        day: "giorno",
        days: "giorni",
        month: "mese",
        months: "mesi",
        year: "anno",
        years: "anni",
        ago: "fa",
        in: "in",
        now: "Adesso"
    },
    nl: {
        second: "seconde",
        seconds: "seconden",
        minute: "minuut",
        minutes: "minuten",
        hour: "uur",
        hours: "uren",
        day: "dag",
        days: "dagen",
        month: "maand",
        months: "maanden",
        year: "jaar",
        years: "jaren",
        ago: "geleden",
        in: "in",
        now: "Nu"
    },
    pt: {
        second: "segundo",
        seconds: "segundos",
        minute: "minuto",
        minutes: "minutos",
        hour: "hora",
        hours: "horas",
        day: "dia",
        days: "dias",
        month: "mês",
        months: "meses",
        year: "ano",
        years: "anos",
        ago: "atrás",
        in: "em",
        now: "Agora"
    },
    zh: {
        second: "秒",
        seconds: "秒",
        minute: "分钟",
        minutes: "分钟",
        hour: "小时",
        hours: "小时",
        day: "天",
        days: "天",
        month: "月",
        months: "月",
        year: "年",
        years: "年",
        ago: "前",
        in: "后",
        now: "刚刚"
    },
    ja: {
        second: "秒",
        seconds: "秒",
        minute: "分",
        minutes: "分",
        hour: "時間",
        hours: "時間",
        day: "日",
        days: "日",
        month: "月",
        months: "月",
        year: "年",
        years: "年",
        ago: "前",
        in: "後",
        now: "たった今"
    },
    ko: {
        second: "초",
        seconds: "초",
        minute: "분",
        minutes: "분",
        hour: "시간",
        hours: "시간",
        day: "일",
        days: "일",
        month: "달",
        months: "달",
        year: "년",
        years: "년",
        ago: "전",
        in: "후",
        now: "방금"
    },
    ar: {
        second: "ثانية",
        seconds: "ثواني",
        minute: "دقيقة",
        minutes: "دقائق",
        hour: "ساعة",
        hours: "ساعات",
        day: "يوم",
        days: "أيام",
        month: "شهر",
        months: "أشهر",
        year: "سنة",
        years: "سنوات",
        ago: "منذ",
        in: "في",
        now: "الآن"
    },
    hi: {
        second: "सेकंड",
        seconds: "सेकंड",
        minute: "मिनट",
        minutes: "मिनट",
        hour: "घंटा",
        hours: "घंटे",
        day: "दिन",
        days: "दिन",
        month: "महीना",
        months: "महीने",
        year: "साल",
        years: "साल",
        ago: "पहले",
        in: "में",
        now: "अभी"
    },
    tr: {
        second: "saniye",
        seconds: "saniye",
        minute: "dakika",
        minutes: "dakika",
        hour: "saat",
        hours: "saat",
        day: "gün",
        days: "gün",
        month: "ay",
        months: "ay",
        year: "yıl",
        years: "yıl",
        ago: "önce",
        in: "içinde",
        now: "şimdi"
    },
    pl: {
        second: "sekunda",
        seconds: "sekundy",
        minute: "minuta",
        minutes: "minuty",
        hour: "godzina",
        hours: "godziny",
        day: "dzień",
        days: "dni",
        month: "miesiąc",
        months: "miesiące",
        year: "rok",
        years: "lata",
        ago: "temu",
        in: "za",
        now: "teraz"
    }
};

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
    const labels = locales[language] || locales['en'];

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
