import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";
import { NUM_1 } from "../../constants";

const InputField = ({
  label,
  error = false,
  name,
  required = true,
  onChange,
  helperText,
  type = "text",
  rows = NUM_1,
}) => {
  return (
    <Wrapper>
      <label>
        {label}
        {required && <span>*</span>}
      </label>
      { type === "text" ? <input name={name} onChange={onChange} /> : <textarea name={name} onChange={onChange} rows={rows} />}
      {error && <p>{helperText}</p>}
    </Wrapper>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  type: PropTypes.string,
  rows: PropTypes.number,
};

export default InputField;
