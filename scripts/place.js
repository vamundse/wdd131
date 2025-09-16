let temp = 14; // temperature
let wind = 7.5; // wind speed m/s

function windchill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        windchill = Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16));
        return windchill;
    } else {
        return "N/A";
    }
};

document.getElementById("windChill").innerHTML = windchill(temp, wind);