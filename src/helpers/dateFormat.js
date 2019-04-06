export default function dateFormat(date, format) {
    const newDate = new Date(date);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const getDate = newDate.getDate();
    const getMonth = newDate.getMonth();
    const month = getMonth + 1;
    const getYear = newDate.getFullYear();
    // d -> date 01 - 31
    const d = getDate < 10 ? "0"+getDate : getDate;
    // j -> date 1 - 31
    const j = getDate;
    // D -> day Mon - Sun
    // l -> day Sunday - Saturday
    // w -> day 0 (Sunday) - 6 (Saturday)
    // N -> day 1 (Monday) - 7 (Sunday)
    // F -> January - December
    const fUppercase = months[getMonth]
    // m -> 01 - 12
    const m = month < 10 ? "0"+month : month
    // M -> Jan - Dec
    // Y -> full year (2019)
    const yUppercase = getYear
    // y -> 2 last digit year (19)
    if (format == "d M Y")
        return `${getDate} ${months[getMonth]} ${getYear}`
    else if (format == "F j, Y")
        return `${fUppercase} ${j}, ${yUppercase}`
    else if (format == "Y-m-d")
        return `${yUppercase}-${m}-${d}`
    else if (format == "d-m-Y")
        return `${d}-${m}-${yUppercase}`
    else if (format == "d/m/Y")
        return `${d} / ${m} / ${yUppercase}`
}