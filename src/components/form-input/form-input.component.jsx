import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      ></label>
    ) : null
    // label ? terniary operator is used to only output the code if there is something to render. Yes condition: label is outputted with approperate length (shrink property, for autocomplete) , NO: null output
    }
  </div>
);

export default FormInput;
