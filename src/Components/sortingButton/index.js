import React from "react";

const SortingButton = props => {
    const { onClick, value, activeKey } = props;
    return (
        <>
        <span className="hIcon">
            <i style={activeKey && value === 1 ? { display: "none" } : { display: "", cursor: "pointer" }} className={activeKey && value === 1 ? "active" : ""} onClick={() => onClick(1)} ><i className="fa fa-sort-asc" aria-hidden="true"></i></i>
            <i style={activeKey && value === -1 ? { display: "none" } : { display: "", cursor: "pointer" }} className={activeKey && value === -1 ? "active" : ""} onClick={() => onClick(-1)} ><i className="fa fa-sort-desc" aria-hidden="true"></i></i>
        </span>
    </>
    )
};

SortingButton.defaultProps = {
    value: '',
    onClick: () => { },
    activeKey: false
   
};

export default SortingButton;
