import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuthor } from "store/authorContext";
import classes from "./TimePicker.module.css";

const TimePicker: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const { dispatch } = useAuthor();

  return (
    <div
      className={classes.changeUserWrapper}
      onClick={(e) => e.stopPropagation()}
    >
      <DatePicker
        selected={date}
        timeFormat="24"
        showTimeInput
        onChange={(date, e) => {
          setDate(date ?? new Date());
          dispatch({
            type: "addTimeStamp",
            payload: date?.valueOf() ?? 0,
          });
        }}
      />
    </div>
  );
};

export default TimePicker;
