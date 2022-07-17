import React from "react";

const Search = props => {
    const { onChange, value } = props;
    
    return (
        <div className="my-0 top-search-filter">
            <div className="search">
                <i className="fa fa-search" aria-hidden="true"></i>
                <div className="inputGroup">
                <input
                placeholder=""
                name="search"
                value={value}
                onChange={onChange}
                />
                </div>
            </div>
        </div>
    )
};

Search.defaultProps = {
    value: '',
    onChange: () => { },
   
};

export default Search;
