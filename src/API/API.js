import axios from "axios"
import { createContext, useState } from "react"


export const DataContext = createContext({})

export const DataProvider = ({ children }) => {


    const URL = "https://api.openweathermap.org/data/2.5/weather"
    const APIKEY = "a7986260461767296fd3ab3dfb14b335"

    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    const [location, setLocation] = useState('')
    const [weatherData, setWeatherData] = useState()

    const [isupdated,setUpdated]=useState()

    const [openModal,setModal]=useState(false)

    const Data = async () => {
        try{
        const res = await axios.get(URL, { params: { q: location, units: "metric", APPID: APIKEY } })
        setWeatherData(res.data)}catch(err){
          setModal(true)
        }

    }

    const DatabyGeoLocation = async () => {
        const res = await axios.get(URL, { params: { lat: latitude, lon: longitude, units: "metric", APPID: APIKEY } })
        setWeatherData(res.data)

    }

    const getGeoLovation = async () => {

        if (isupdated) {
            DatabyGeoLocation()
    
        }

    else{
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(latitude=>latitude=position.coords.latitude)
            setLongitude(longitude=>longitude=position.coords.longitude)
            setUpdated(true)


        }, function (err) {
            console.log(err)
        })
    }
    }



    return (
        <DataContext.Provider value={{ location, setLocation, weatherData, Data, getGeoLovation ,setModal,openModal}}>
            {children}
        </DataContext.Provider>

    );



}
