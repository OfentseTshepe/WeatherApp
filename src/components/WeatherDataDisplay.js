import { Box, Button } from "@mui/material"
import { useContext } from "react";
import { DataContext } from "../API/API";
import { Images, createDate } from "./ImageLoader";
import sunset from "../assets/sunset.svg"
import sunrise from "../assets/sunrise.svg"
import BackgoundImage from "../assets/back2.jpg"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedIn from '@mui/icons-material/LinkedIn'
import Tooltip from '@mui/material/Tooltip';


function WeatherDataDisplay() {
    const { location, setLocation, weatherData, Data, getGeoLovation } = useContext(DataContext)

    const test = async (e) => {
        if (e.key === "Enter") {
            Data()
            setLocation("")
        }
    }
    return (

        <Box sx={{ backgroundImage: `url(${BackgoundImage})` }}>

            <Box container sx={{ backgroundColor: "rgba(0, 0, 0, 0,4)", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", height: weatherData ? "15vh" : "88vh" }}>
                <input type="text" value={location} onKeyPress={(e) => { test(e) }} onChange={(text) => { setLocation(text.target.value) }} placeholder="Enter Location ..." style={{ width: "60%", height: weatherData ? "25%" : "6%", borderRadius: "10px", marginRight: "10px" }}></input>
                <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0,4)" }}>
                    <Tooltip title="Use current Location">
                        <Button onClick={getGeoLovation} sx={{ border: "thin solid darkgrey" }}>
                            <LocationOnIcon sx={{ color: "darkgray" }} />
                        </Button>
                    </Tooltip>
                </Box>
            </Box>
            {weatherData &&
                <div style={{ border: "solid thin", borderRadius: "25px", backgroundColor: "darkgrey" }}>
                    <Box sx={{ display: "flex", height: "10vh" }}>
                        <Box sx={{ mr: "10px" }}>

                            <p style={{ fontSize: "3.5vh" }}>{weatherData.name}</p>
                        </Box>
                        <Box sx={{ width: "50vw", pt: "15px", flexGrow: "1" }}>
                            <img src={`https://flagcdn.com/${weatherData.sys.country.toLowerCase()}.svg`} width="40vw" height={"25vh%"} alt={`${weatherData.sys.country}`} />
                        </Box>
                        <Box sx={{}}>

                            <p style={{ fontSize: "3.5vh" }}> {weatherData.weather[0].description}</p>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", height: "30vh", justifyItems: "center", justifyContent: "center", alignContent: "center" }}>
                        <Box sx={{ display: "flex", width: "50vw", height: "30vh", justifyItems: "center", justifyContent: "center", alignContent: "center" }} >
                            <img src={Images[weatherData.weather[0].icon]} alt={Images[weatherData.weather[0].main]} style={{ width: "90%" }} />

                        </Box>
                        <Box sx={{ display: "flex", width: "50vw", height: "30vh", border: "solid-left thin", justifyItems: "center", justifyContent: "center", alignContent: "center" }} >
                            <p style={{ fontSize: "11vh", }}> {Math.round(weatherData.main.temp)}<sup >&deg;c</sup>

                            </p>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", height: "8vh", justifyContent: "center" }}>
                        <p style={{ fontSize: "2.5vh" }}>Feels like: {Math.round(weatherData.main.feels_like)}<sup >&deg;c</sup> </p>
                    </Box>
                    <Box sx={{ display: "flex", height: "10vh" }}>
                        <Box sx={{ ml: "auto", mr: "2vw" }}>
                            <p style={{ fontSize: "2.5vh" }}>Min:  {Math.round(weatherData.main.temp_min)}<sup >&deg;c</sup> </p>
                        </Box>
                        <Box sx={{ mr: "auto", ml: "2vw" }}>

                            <p style={{ fontSize: "2.5vh" }}>Max: {Math.round(weatherData.main.temp_max)}<sup >&deg;c</sup> </p>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", height: "15vh" }}>
                        <Box flexGrow={1} sx={{ display: "flex", }}>

                            <Box sx={{ ml: "5vw" }}>
                                <p style={{ fontSize: "3vh" }}>  {createDate(weatherData.sys.sunrise)}</p>
                            </Box>
                            <Box>
                                <img src={sunrise} alt="" width={"90vh"} ></img>
                            </Box>

                        </Box>
                        <Box sx={{ display: "flex", mr: "5vw", }}>
                            <Box >
                                <img src={sunset} alt="" width={"90vh"} ></img>
                            </Box>
                            <Box sx={{}}>
                                <p style={{ fontSize: "3vh" }}>  {createDate(weatherData.sys.sunset)}</p>
                            </Box>
                        </Box>
                    </Box>
                </div>}
            < Box sx={{ display: "flex", height: "12vh", backgroundColor: "rgba(0, 0, 0, 0)", justifyContent: "center", alignItems: "center" }}>
                <Button onClick={() => { window.open("https://www.linkedin.com/in/ofentse-tshepe/", "_blank") }}>
                    <LinkedIn sx={{ fontSize: 40 }} />
                </Button>

            </Box>
        </Box>

    );
}

export default WeatherDataDisplay;