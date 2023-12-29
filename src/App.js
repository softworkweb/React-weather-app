// import { WiCloud } from 'react-icons/wi';
// import { WiCloudy } from 'react-icons/wi';
import { WiCloudyWindy } from 'react-icons/wi';
// import { WiDayCloudy } from 'react-icons/wi';
// import { WiDayCloudyHigh } from 'react-icons/wi';
// import { WiDayCloudyWindy } from 'react-icons/wi';
// import { WiDayLightWind } from 'react-icons/wi';
// import { WiDayLightning } from 'react-icons/wi';
// import { WiDayRain } from 'react-icons/wi';
// import { WiDayRainMix } from 'react-icons/wi';
// import { WiDayShowers } from 'react-icons/wi';
// import { WiDaySleetStorm } from 'react-icons/wi';
// import { WiDaySnow } from 'react-icons/wi';
// import { WiDaySunny } from 'react-icons/wi';
// import { WiDaySunnyOvercast } from 'react-icons/wi';
import { useState } from 'react';
import Input from './Components/Input';
import Mobile from './Images/Background-Mobile.jpg';
import Desktop from './Images/Background-Desktop.jpg';
function App() {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [show, setShow] = useState(false);
  const getWeather = () => {
    setShow(true);
  };
  return (
    <div className="w-screen text-[#f4f6ff] text-[18px] md:text-[1.1em] lg:text-[1.2em] xl:text-[1.3em]">
      <img
        src={Mobile}
        alt=""
        className="w-full h-screen object-cover md:hidden"
      />
      <img
        src={Desktop}
        alt=""
        className="hidden md:flex w-full h-screen object-cover"
      />
      <div className="bg-[#0e132a9d] absolute inset-0"></div>
      <div className="flex flex-col p-4 items-center justify-between absolute inset-0 container mx-auto">
        <Input
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
          getWeather={getWeather}
        />
        {show ? (
          <h1 className="text-[2em] font-bold ">
            {country},<span>{city}</span>
          </h1>
        ) : null}

        <WiCloudyWindy size={200} color="#f4f6ff" />
        <div className="flex flex-col items-center w-[100px] gap-4">
          <h3 className="">20</h3>
          <div className="flex w-full justify-between">
            <h3>19</h3>
            <h3>21</h3>
          </div>
          <h3>Haze</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
// http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}
// {
//       <WiCloud />
//       <WiCloudy />
//       <WiCloudyWindy />
//       <WiDayCloudy />
//       <WiDayCloudyHigh />
//       <WiDayCloudyWindy />
//       <WiDayLightWind />
//       <WiDayLightning />
//       <WiDayRain />
//       <WiDayRainMix />
//       <WiDayShowers />
//       <WiDaySleetStorm />
//       <WiDaySnow />
//       <WiDaySunny />
//       <WiDaySunnyOvercast />
// }
// // https://api.open-meteo.com
// const Api_Key = '429736441cf3572838aa10530929f7cd';
// const api_call = fetch(
//   // `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
//   `http://api.openweathermap.org/data/2.5/weather?q=Lagos,Nigeria&appid=${Api_Key}`
// );

// const response = api_call.json();
// console.log(response);

// fetch('https://wttr.in/London?format=3')
// .then((response) => console.log(response.json(messag)))
// .then((data) => console.log(data))
// .catch((error) => console.error('Error:', error));
