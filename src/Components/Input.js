import React from 'react';
import Button from './Button'; // Import the Button component
import { TEInput } from 'tw-elements-react'; // Import TEInput component from tw-elements-react library

// Functional component for handling user input and form submission
function Input({ location, setLocation, getWeather }) {
  return (
    <div className="w-full">
      {/* Form for user input */}
      <form>
        {/* Input field and submit button aligned in a flex container */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          {/* TEInput component for location input */}
          <TEInput
            className="text-white"
            type="text"
            label="Country / City"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></TEInput>

          {/* Button component for triggering weather data retrieval */}
          <Button getWeather={getWeather} />
        </div>
      </form>
    </div>
  );
}

// Export the Input component
export default Input;
