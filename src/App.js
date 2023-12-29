import { useState } from 'react';
import Input from './Components/Input';
import Mobile from './Images/Background-Mobile.jpg';
import Desktop from './Images/Background-Desktop.jpg';
import { TbTemperatureCelsius } from 'react-icons/tb';
function App() {
  const Api_Key = '83ec3cf470054065b75174902232912';
  const [location, setLocation] = useState('');
  // const [city, setCity] = useState('');
  const [show, setShow] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [condition, setCondition] = useState('');
  // const [condition, setCondition] = useState('');
  const [icon, setIcon] = useState('');
  // const [show, setShow] = useState(false);
  async function getWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${Api_Key}&q=${location}`
    );
    const result = await response.json();
    setCondition(result.current.condition.text);
    setIcon(`https:${result.current.condition.icon}`);
    setTemperature(result.current.temp_c);
    setShow(true);
  }
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
      <div className="flex flex-col p-4 items-center justify-around absolute inset-0 container mx-auto">
        <Input
          location={location}
          setLocation={setLocation}
          // city={city}
          // setCity={setCity}
          getWeather={getWeather}
        />
        {show ? (
          <>
            <h1 className="text-[2em] font-bold ">
              {location}
              {/* <span>{city}</span> */}
            </h1>
            <img src={icon} alt="" className="h-[200px]" />
            <div className="flex flex-col items-center gap-1">
              <div className="flex">
                <h3 className="text-[3em] font-bold">{temperature}</h3>
                <TbTemperatureCelsius size={50} />
              </div>
              <h3>{condition}</h3>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
