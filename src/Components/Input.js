import React from 'react';
import Button from './Button';
import { TEInput } from 'tw-elements-react';
function Input({ city, setCity, country, setCountry, getWeather }) {
  return (
    <div className="w-full">
      <form>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <TEInput
            className="text-white"
            type="text"
            label="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></TEInput>
          <TEInput
            className="text-white"
            type="text"
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></TEInput>
          <Button getWeather={getWeather} />
        </div>
      </form>
    </div>
  );
}

export default Input;
