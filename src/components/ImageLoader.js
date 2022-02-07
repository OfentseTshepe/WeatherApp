
import d01d from "../assets/01d.svg"
import d02d from "../assets/02d.svg"
import d03d from "../assets/03d.svg"
import d04d from "../assets/04d.svg"
import d09d from "../assets/09d.svg"
import d10d from "../assets/10d.svg"
import d11d from "../assets/11d.svg"
import d13d from "../assets/13d.svg"
import d50d from "../assets/50d.svg"

import d01n from "../assets/01n.svg"
import d02n from "../assets/02n.svg"
import d03n from "../assets/03n.svg"
import d04n from "../assets/04n.svg"
import d09n from "../assets/09n.svg"
import d10n from "../assets/10n.svg"
import d11n from "../assets/11n.svg"
import d13n from "../assets/13n.svg"
import d50n from "../assets/50n.svg"

export const Images = { "01d":d01d,"02d":d02d,"03d":d03d,"04d":d04d,"09d":d09d,"10d":d10d,"11d":d11d,"13d":d13d,"50d":d50d,"01n":d01n,"02n":d02n,"03n":d03n,"04n":d04n,"09n":d09n,"10n":d10n,"11n":d11n,"d13n":d13n,"50n":d50n}

export function createDate(dt, type) {
    var day = new Date(dt * 1000);
    day.setHours( day.getHours() + 2 );
     return day.toLocaleString("en-za",  {timeZone: 'UTC'}).split(",")[1].substring(0,6); 
   
}
