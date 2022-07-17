import React from "react";

const PerPage = props => {
    const { onChange, perPage } = props;
    
    return (
        <div className="select_box">
                        <div className="filter__top justify-content-end">
                           <div className="filter__heading">
                              <b>Rows per page : </b>
                           </div>
                           <div className="filter__filter">
                              <div className="select_box">
                        

                              <label>
                                <select
                                    className="green-select"
                                    style={{ marginTop: "0px" }}
                                    onChange={onChange}
                                    name="searchtype"
                                    value={perPage}
                                >
                                    <option value="10">10</option>
                                    <option key="1_one1" value="25">25</option>
                                    <option key="2_one2" value="50">50</option>
                                    <option key="3_one3" value="100" >100</option>
                                    <option key="3_one4" value="500" >500</option>
                                    <option key="5_one5" value="5000" >View all</option>
                                </select>
                                </label>
                              </div>
                           </div>
                        </div>

                     </div>
       
    )
    
};

PerPage.defaultProps = {
    perPage: 10,
    onChange: () => { },
   
};

export default PerPage;
