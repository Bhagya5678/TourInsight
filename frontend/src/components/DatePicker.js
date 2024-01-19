import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import { useGlobalContext } from "../Context";

const DatePicker = () => { 
    const {startDate, endDate} = useGlobalContext();

    const [value, setValue] = useState({ 

        startDate: null ,
        endDate: null 
    }); 

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 

    } 

    return (
        <Datepicker 
            disabledDates={[
                {
                    startDate: "2023-02-02",
                    endDate: "2023-02-02"
                },
                {
                    startDate: "2023-02-11",
                    endDate: "2023-02-12"
                },
            ]}
            minDate={new Date(startDate)} 
            maxDate={new Date(endDate)} 
            value={value} 
            startFrom="2023-01-01" 
            onChange={handleValueChange} 

        /> 

    );
}; 
export default DatePicker;