import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

const ReserveCalender = ({ handleCalender }) => {
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const date = new Date(value).toJSON().slice(0, 10);
  handleCalender(date);

  const openCalendar = () => {
    setIsCalenderOpen(!isCalenderOpen);
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center justify-between gap-3 rounded-full border-2 border-[#BED86B] bg-[#97BF0F] px-4 py-2 text-xs"
        onClick={openCalendar}
      >
        <input
          type="date"
          className="cursor-pointer appearance-none border-none bg-transparent text-black outline-none"
          style={{
            color: 'white',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
            outline: 'none',
            border: 'none',
          }}
          onChange={(e) => setValue(e.target.value)}
        />
      </button>
    </div>
  );
};

export default ReserveCalender;
