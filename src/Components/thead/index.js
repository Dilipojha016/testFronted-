import React from "react";

const THEAD = props => {
    const { tableColumn,action } = props;
    
    return (
        <thead>
            <tr>
            <th scope="col"></th>
                {tableColumn.map((ele,i)=>{
                    return (
                    <th scope="col" key={"key-"+i}>{ele.name}</th>
                    )
                })}
                {action?
                <th scope="col">ACTION</th> 
                :""}
            </tr>
    </thead>
    
       
    )
    
};
THEAD.defaultProps = {
    tableColumn: [],
};

export default THEAD;