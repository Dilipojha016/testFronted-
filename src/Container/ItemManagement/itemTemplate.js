import React from "react";
import { Link } from "react-router-dom";

const TBODY = props => {
    const { tableRow,activePage,perPage } = props;
    return (
        <tbody>
        {tableRow && tableRow.map((user, index) => {

            return (
                <tr key={index}>
                    <td>{(activePage*perPage)+index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.price}</td>
                    <td>{user.quantity}</td>
                    <td><img src={process.env.REACT_APP_BASEPATH+"/files/"+user.image} width="15%"/></td>
                    
                    
                </tr>
            );

        })}
        </tbody>
    
       
    )
    
};
TBODY.defaultProps = {
    tableRow: [],
    activePage:0,
    perPage:10
};

export default TBODY;