import React from "react";
import { SEARCH_HERE, HEADER } from '../constants';

export default ({ handleChange, handleSubmit, inputValue }) => {
    return (
        <div className="form-container">
            <div variant="title" color="inherit" style={{ flex: 1 }} align="center">
                {HEADER}
            </div>
            <form onClick={handleSubmit}>
                <input
                    className="form-control input_form"
                    onChange={handleChange}
                    value={inputValue}
                    placeholder={SEARCH_HERE}
                />
            </form>
        </div>
    );
};
