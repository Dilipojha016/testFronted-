import React from "react";
import { Link } from "react-router-dom";
import routeRules from "../../Routes/routeRules";
const LinkButton = props => {
    const { name, path } = props;
    return (
        <div className="right__side">
            <Link
                to={{
                    pathname: routeRules[path],
                    state: {
                        id: "",
                        userDetails: "",
                    },
                    }}
                    className="adduserbtn"
                    style={{ "marginRight":"5px" }}
                >
                <i className="fa fa-plus" style={{ fontSize: "20px" }}>
                {" "}
                </i>{" "}
                {name} 
                {" "}
            </Link>
        </div>		
    );

};

LinkButton.defaultProps = {
    name: '',
    strongName: '',
    className: '',
    onClick: () => { },
};

export default LinkButton;