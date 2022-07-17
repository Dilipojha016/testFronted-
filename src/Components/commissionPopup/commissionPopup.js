import React from "react";
import CustomModal from "../modal";
import Button from "../Button";
import Input from "../Input";
export default function CommissionPopup(props) {
	const { show, commissionDataAction,hidePopModal,handleChange,kudjooServiceCharge } = props;
	return (
		<CustomModal show={show} hidePopup={hidePopModal}>
			<div className="terms-modal">
       
            <Input
            label="Admin Commission"
            id="kudjooServiceCharge"
            placeholder=""
            type="number"
            name="kudjooServiceCharge"
            required={true}
            value={kudjooServiceCharge}
            onChange={(e) => handleChange(e)}
            />
            <br/><br/>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <div className="col-4 text-right">
                <Button
                  name="Update"
				  onClick={() =>commissionDataAction()}
                  className="adduserbtn"
                />
              </div>
              <div className="col-4 text-right">
                <Button
                  name="Cancel"
                  className="adduserbtn"
                  onClick={() =>hidePopModal()}
                />
              </div>
            </div>
        
     
          </div>
       
		</CustomModal>
	);
}
