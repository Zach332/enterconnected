import React from "react";

export function formatTime( epoch ) {
    const date = new Date(epoch);
    const weekday = new Array(7);
    weekday[0]="Monday";
    weekday[1]="Tuesday";
    weekday[2]="Wednesday";
    weekday[3]="Thursday";
    weekday[4]="Friday";
    weekday[5]="Saturday";
    weekday[6]="Sunday";
    const month = new Array(12);
    month[0]="Jan";
    month[1]="Feb";
    month[2]="Mar";
    month[3]="Apr";
    month[4]="May";
    month[5]="Jun";
    month[6]="Jul";
    month[7]="Aug";
    month[8]="Sep";
    month[9]="Oct";
    month[10]="Nov";
    month[11]="Dec";
    const hours = (date.getHours() > 12) ? (date.getHours() - 12) : ((date.getHours()));
    const timeString = (date.getMinutes() < 10) ? ("0" + date.getMinutes()) : (date.getMinutes());
    const ampm = (date.getHours() > 12) ? "PM" : "AM";
    return weekday[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate() + ", " + hours + ":" + timeString + " " + ampm;
}
