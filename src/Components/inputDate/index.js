import React, { useRef } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


const InputDate = (props) => {
    const { className, placeholder, handleChange, value, name, minDate, maxDate,disabled,time } = props;
    const refContainer = useRef(null);
    const openDatepicker = () => {
        refContainer.current.setOpen(true)
    };
    if(time==="yes"){
        return (
            <div className="date-picker">
                <div className="input-group mr-3">
                    <div className="input-group-prepend datepicker-trigger" onClick={openDatepicker}>
                        <div className="input-group-text">
                            <i className="fa fa-calendar-alt" />
                        </div>
                    </div>
                    <DatePicker
                         disabled={disabled}
                        className={className}
                        selected={value}
                        onChange={(date) => handleChange(name, date)}
                        placeholder={placeholder}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        ref={refContainer}
                        showTimeSelect
                        dateFormat="Pp"
                        
                    />
                </div>
            </div>
        );
    }else{
        return (
            <div className="date-picker">
                <div className="input-group mr-3">
                    <div className="input-group-prepend datepicker-trigger" onClick={openDatepicker}>
                        <div className="input-group-text">
                            <i className="fa fa-calendar-alt" />
                        </div>
                    </div>
                    <DatePicker
                         disabled={disabled}
                        className={className}
                        selected={value}
                        dateFormat="yyyy-MM-dd"
                        onChange={(date) => handleChange(name, date)}
                        placeholder={placeholder}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        ref={refContainer}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                </div>
            </div>
        );
    }
    
};

export default InputDate;