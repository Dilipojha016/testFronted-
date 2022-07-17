import React from "react";
import styles from "./DashboardHead.module.css";
export default function DashboardHead(props){
    const { secondaryHeadingOne, secondaryHeadingTwo, secondaryHeadingThree } = props;
	return (
        <div className="row">
			<div className="col-sm-12">
                <h2 className={styles.secondary}>
                    {secondaryHeadingOne} <span> {secondaryHeadingTwo} </span>{" "}
                    {secondaryHeadingThree}
                </h2>
			</div>
		</div>
        
    );
}

