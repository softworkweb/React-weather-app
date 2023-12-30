// Import necessary dependencies and components
import { useState } from 'react';
import Input from './Components/Input'; // Import the Input component
import Mobile from './Images/Background-Mobile.jpg';
import Desktop from './Images/Background-Desktop.jpg';
import { TbTemperatureCelsius } from 'react-icons/tb';

function App() {
  // API key for accessing the weather API
  const Api_Key = '83ec3cf470054065b75174902232912';

  // State variables for managing user input and weather data
  const [location, setLocation] = useState('');
  const [show, setShow] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [condition, setCondition] = useState('');
  const [icon, setIcon] = useState('');

  // Function to fetch weather data from the API
  async function getWeather() {
    // Store the location in local storage
    localStorage.setItem('location', location);
    setLocation(''); // Clear the input field

    // Fetch weather data from the WeatherAPI
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${Api_Key}&q=${location}`
    );
    const result = await response.json();

    // Update state with the fetched weather data
    setCondition(result.current.condition.text);
    setIcon(`https:${result.current.condition.icon}`);
    setTemperature(result.current.temp_c);
    console.log(result.current);
    setShow(true); // Set show to true to display weather information
  }

  // JSX structure for the main component
  return (
    <div className="w-screen text-[#f4f6ff] text-[18px] md:text-[1.1em] lg:text-[1.2em] xl:text-[1.3em]">
      {/* Display background images based on screen size */}
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

      {/* Semi-transparent overlay */}
      <div className="bg-[#0e132a9d] absolute inset-0"></div>

      {/* Main content container */}
      <div className="flex flex-col p-4 items-center justify-around absolute inset-0 container mx-auto">
        {/* Input component for location search */}
        <Input
          location={location}
          setLocation={setLocation}
          getWeather={getWeather}
        />

        {/* Display weather information if available */}
        {show ? (
          <>
            {/* Location header */}
            <h1 className="text-[2em] font-bold ">
              {localStorage.getItem('location')}
            </h1>
            {/* Display weather icon */}
            <img src={icon} alt="" className="h-[200px]" />
            {/* Display temperature and condition information */}
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

// Export the App component
export default App;
