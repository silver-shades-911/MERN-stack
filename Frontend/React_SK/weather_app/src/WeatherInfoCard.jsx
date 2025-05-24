import "./weatherInfoCard.css"
import poster from "./assets/poster.png"


export default function WeatherInfoCard({weatherInfo}) {

    return(
        <div className="weatherInfoCard">
            <img src={poster} alt="" className="poster" />
            <p className="temp">{weatherInfo.temp}&deg;c</p>
            <p className="name">{weatherInfo.name}</p>
            <p className="description">{weatherInfo.description}</p>
            <div className="rowOne">
                <div className="units">
                    <p>{weatherInfo.feels_like}&deg;c</p>
                    <p>Feels Like</p>
                </div>
                <div className="units">
                    <p>{weatherInfo.temp_max}&deg;c</p>
                    <p>Max Temp</p>
                </div>
                <div className="units">
                    <p>{weatherInfo.temp_min}&deg;c</p>
                    <p>Min Temp</p>
                </div>
            
            </div>
            <div className="rowTwo">

                <div className="units">
                    <p>{weatherInfo.grnd_level}</p>
                    <p>Ground Level</p>
                </div>
                <div className="units">
                    <p>{weatherInfo.sea_level}</p>
                    <p>Sea Level</p>
                </div>
                <div className="units">
                    <p>{weatherInfo.pressure}</p>
                    <p>Pressure</p>
                </div>

            </div>
        
        </div>
    );
};