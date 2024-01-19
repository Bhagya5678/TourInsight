import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const App = () => { 
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

            minDate={new Date(startDate)} 
            maxDate={new Date(endDate)} 
            value={value} 
            startFrom="2023-01-01" 
            onChange={handleValueChange} 

        /> 

    );
}; 
export default App;