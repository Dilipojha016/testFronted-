import React from "react";

const Input = props => {
    const { labelFor, id, label, placeholder, type, onChange, name, value, disabled, required, style,errmsg, errStatus, maxLength } = props;
    let newHolder = placeholder.toLocaleLowerCase()
    newHolder = newHolder.charAt(0).toUpperCase() + newHolder.slice(1)
    newHolder =''
    if(type==="file"){
        return (
            <div className="inputGroup ">
                <label className="inputLabel">
                    {label} <strong>{labelFor}</strong>
                </label>
                <input type={type}
                    placeholder={newHolder}
                    id={id}
                    className={type==="file"?"pl-0":""}
                    accept={type==="file"?name==="video1"?"video/*":name==="asset1"?"":"image/*":""}
                    maxLength={maxLength}
                    onChange={onChange}
                    name={name}
                    required={required}
                    disabled={disabled}
                    
                    style={style}
                />
                {errStatus ?
                    <p style={{ color: 'red' }}>
                        {errmsg}
                    </p>
                    : null}
    
            </div>
        );
    }else{
        return (
            <div className="inputGroup ">
                <label className="inputLabel" >
                    {label}  <strong>{labelFor}</strong>
                </label>
                <input type={type}
                    placeholder={newHolder}
                    id={id}
                    className={type==="file"?"pl-0":""}
                   
                    maxLength={maxLength}
                    onChange={onChange}
                    name={name}
                    value={value===null?"":value}
                    disabled={disabled}
                    required={required}
                    style={style}
                />
                {errStatus ?
                    <p style={{ color: 'red' }}>
                        {errmsg}
                    </p>
                    : null}
    
            </div>
        ); 
    }
    
};

Input.defaultProps = {
    labelFor: "",
    label: "Label",
    placeholder: "",
    type: "text",
    onChange: () => { },
    name: "",
    value: "",
   
    disabled: false,
};

export default Input;