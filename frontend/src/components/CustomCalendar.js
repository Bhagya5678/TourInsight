import Datepicker from "react-tailwindcss-datepicker"; 
import React, { useState } from "react"; 

const CustomCalendar = () => { 
    const currentDate = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);

    const [value, setValue] = useState({ 
    startDate: new Date(), 
    endDate: new Date().setMonth(11) 
    }); 
    
    const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 
    
    return (
        <div className="border-solid border-2 border-medium-blue rounded-lg mt-5">
            <Datepicker 
            primaryColor={"blue"}
            value={value} 
            onChange={handleValueChange} 
            showFooter={true}
            displayFormat={"DD/MM/YYYY"}
            popoverDirection="down"
            minDate={currentDate} 
            maxDate={maxDate}
    /> 
        </div>
    );
}; 
    
export default CustomCalendar;