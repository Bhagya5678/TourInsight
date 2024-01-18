import Datepicker from "react-tailwindcss-datepicker"; 
import React, { useState } from "react"; 
import { useGlobalContext } from "../Context";

const CustomCalendar = () => { 
    const currentDate = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);

    const [value, setValue] = useState({ 
    startDate: new Date(), 
    endDate: new Date().setMonth(11) 
    }); 

    const { setStartDateInfo, setEndDateInfo} = useGlobalContext();

    const handleValueChange = (newValue) => {                                                                                               
        setStartDateInfo(newValue.startDate);
        setEndDateInfo(newValue.endDate);
        setValue(newValue);
    } 
    
    return (
        <div className="border-solid border-2 border-medium-blue rounded-lg mt-5">
            <Datepicker 
            primaryColor={"blue"}
            value={value} 
            onChange={handleValueChange} 
            displayFormat={"DD/MM/YYYY"}
            popoverDirection="down"
            minDate={currentDate} 
            maxDate={maxDate}
    /> 
        </div>
    );
}; 
    
export default CustomCalendar;