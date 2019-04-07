export default function dateFormat(date, format) {
    const newDate = new Date(date);
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const getDate = newDate.getDate();
    const getMonth = newDate.getMonth();
    const month = getMonth + 1;
    const getYear = newDate.getFullYear();
    const getHour = newDate.getHours();
    const getMinute = newDate.getMinutes();
    const getSecond = newDate.getSeconds();
    // d -> date 01 - 31
    const d = getDate < 10 ? "0"+getDate : getDate;
    // j -> date 1 - 31
    const j = getDate;
    // D -> day Mon - Sun
    // l -> day Sunday - Saturday
    // w -> day 0 (Sunday) - 6 (Saturday)
    // N -> day 1 (Monday) - 7 (Sunday)
    // F -> January - December
    const fUppercase = months[getMonth];
    // m -> 01 - 12
    const m = month < 10 ? "0"+month : month;
    // M -> Jan - Dec
    // Y -> full year (2019)
    const yUppercase = getYear;
    // y -> 2 last digit year (19)
    // h -> hour 00-59
    const hour = getHour < 10 ? "0"+getHour : getHour;
    // m -> minute 00-59
    const minute = getMinute < 10 ? "0"+getMinute : getMinute;
    // s -> second 00-59
    const second = getSecond < 10 ? "0"+getSecond : getSecond;
    if (format === "d M Y")
        return `${getDate} ${months[getMonth]} ${getYear}`;
    else if (format === "F j, Y")
        return `${fUppercase} ${j}, ${yUppercase}`;
    else if (format === "Y-m-d")
        return `${yUppercase}-${m}-${d}`;
    else if (format === "d-m-Y")
        return `${d}-${m}-${yUppercase}`;
    else if (format === "H:i, d M Y")
        return `${hour}:${minute}, ${getDate} ${months[getMonth]} ${getYear}`;
    else if (format === "d/m/Y H:i:s")
        return `${d}/${m}/${yUppercase} ${hour}:${minute}:${second}`;
    else if (format == "d/m/Y")
        return `${d} / ${m} / ${yUppercase}`;
}