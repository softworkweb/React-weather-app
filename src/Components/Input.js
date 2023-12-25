import React from 'react';
import Button from './Button';
import { TEInput, TERipple } from 'tw-elements-react';
function Input() {
  return (
    // <div className="block max-w-sm rounded-lg bg-slate-600">
    <div className="w-full">
      <form>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <TEInput type="text" label="Country" className=""></TEInput>
          <TEInput type="text" label="City" className=""></TEInput>
          <Button />
        </div>
      </form>
    </div>
  );
}

export default Input;
