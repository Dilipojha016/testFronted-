import React from "react";
import Header from "../../Components/layout/Header";


const DefaultLayout = props => {
    return (
        <>
            <div className="defaultLayout">
                <Header {...props} />
                {props.children}
            </div>
        </>

    );
};

export default DefaultLayout;
