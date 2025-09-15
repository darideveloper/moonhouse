import type { OpeningHour, FormattedSchedule, DayCode } from "../../types/apitypes";

const dayMap: Record<DayCode, string> = {
    MO: "Mon",
    TU: "Tue",
    WE: "Wed",
    TH: "Thu",
    FR: "Fri",
    SA: "Sat",
    SU: "Sun",
};

const dayMapFull: Record<DayCode, string> = {
    MO: "Monday",
    TU: "Tuesday",
    WE: "Wednesday",
    TH: "Thursday",
    FR: "Friday",
    SA: "Saturday",
    SU: "Sunday",
};

const formatTime = (timeString: string): string => {
    const [hour, minute] = timeString.split(':');
    const hourNum = parseInt(hour, 10);
    const ampm = hourNum >= 12 ? 'pm' : 'am';
    const formattedHour = hourNum % 12 === 0 ? 12 : hourNum % 12;
    return `${formattedHour}:${minute}${ampm}`;
};

const formatTimeForSchema = (timeString: string): string => {
    const [hour, minute] = timeString.split(':');
    return `${hour}:${minute}`;
};


export const groupOpeningHours = (hours: OpeningHour[]): FormattedSchedule[] => {
    if (!hours || hours.length === 0) {
        return [];
    }

    const grouped: FormattedSchedule[] = [];
    let i = 0;

    while (i < hours.length) {
        const startDay = hours[i];
        let endDayIndex = i;

        const currentHours = `${formatTime(startDay.start_hour)} - ${formatTime(startDay.end_hour)}`;

        while (
            endDayIndex + 1 < hours.length &&
            hours[endDayIndex + 1].start_hour === startDay.start_hour &&
            hours[endDayIndex + 1].end_hour === startDay.end_hour
        ) {
            endDayIndex++;
        }

        const dayRange =
            i === endDayIndex
                ? dayMap[startDay.day]
                : `${dayMap[startDay.day]} - ${dayMap[hours[endDayIndex].day]}`;

        grouped.push({
            day: dayRange,
            hours: currentHours,
        });

        i = endDayIndex + 1;
    }

    return grouped;
};

export const convertToOpeningHours = (hours: OpeningHour[]): string[] => {
    if (!hours || hours.length === 0) {
        return [];
    }

    const grouped: string[] = [];
    let i = 0;

    while (i < hours.length) {
        const startDay = hours[i];
        let endDayIndex = i;

        const currentHours = `${formatTime(startDay.start_hour)}-${formatTime(startDay.end_hour)}`;

        while (
            endDayIndex + 1 < hours.length &&
            hours[endDayIndex + 1].start_hour === startDay.start_hour &&
            hours[endDayIndex + 1].end_hour === startDay.end_hour
        ) {
            endDayIndex++;
        }

        const dayRange =
            i === endDayIndex
                ? dayMap[startDay.day]
                : `${dayMap[startDay.day]}-${dayMap[hours[endDayIndex].day]}`;

        grouped.push(`${dayRange} ${currentHours}`);

        i = endDayIndex + 1;
    }

    return grouped;
};

export const convertToOpeningHoursSpecification = (hours: OpeningHour[]): {
    '@type': string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
}[] => {
    if (!hours || hours.length === 0) {
        return [];
    }

    const grouped: {
        '@type': string;
        dayOfWeek: string[];
        opens: string;
        closes: string;
    }[] = [];
    let i = 0;

    while (i < hours.length) {
        const startDay = hours[i];
        let endDayIndex = i;

        const opens = formatTimeForSchema(startDay.start_hour);
        const closes = formatTimeForSchema(startDay.end_hour);

        while (
            endDayIndex + 1 < hours.length &&
            hours[endDayIndex + 1].start_hour === startDay.start_hour &&
            hours[endDayIndex + 1].end_hour === startDay.end_hour
        ) {
            endDayIndex++;
        }

        const dayOfWeek: string[] = [];
        for (let j = i; j <= endDayIndex; j++) {
            dayOfWeek.push(dayMapFull[hours[j].day]);
        }

        grouped.push({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek,
            opens,
            closes,
        });

        i = endDayIndex + 1;
    }

    return grouped;
};