import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./TimePicker.module.css";

const TimePicker: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div
      className={classes.changeUserWrapper}
      onClick={(e) => e.stopPropagation()}
    >
      <DatePicker
        selected={date}
        onChange={(date, e) => setDate(date ?? new Date())}
      />
    </div>
  );
};

export default TimePicker;
