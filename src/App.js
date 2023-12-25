import { WiCloud } from 'react-icons/wi';
import { WiCloudy } from 'react-icons/wi';
import { WiCloudyWindy } from 'react-icons/wi';
import { WiDayCloudy } from 'react-icons/wi';
import { WiDayCloudyHigh } from 'react-icons/wi';
import { WiDayCloudyWindy } from 'react-icons/wi';
import { WiDayLightWind } from 'react-icons/wi';
import { WiDayLightning } from 'react-icons/wi';
import { WiDayRain } from 'react-icons/wi';
import { WiDayRainMix } from 'react-icons/wi';
import { WiDayShowers } from 'react-icons/wi';
import { WiDaySleetStorm } from 'react-icons/wi';
import { WiDaySnow } from 'react-icons/wi';
import { WiDaySunny } from 'react-icons/wi';
import { WiDaySunnyOvercast } from 'react-icons/wi';
import Input from './Components/Input';
import Mobile from './Images/Background-Mobile.jpg';
import Desktop from './Images/Background-Desktop.jpg';
function App() {
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
        <Input />
        <h1 className="text-[2em] font-bold ">New York,US</h1>
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
