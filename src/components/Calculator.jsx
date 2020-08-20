import React, { useState } from "react";
import { connect } from "react-redux";
import { addNumber, minusNumber, divisionNumber } from "../actions/counts";

function Calculator(props) {
  const [value, setValue] = useState(0);

  const handleClickAdd = (e) => {
    props.add(value);
  };
  const handleClickMinus = (e) => {
    props.minus(value);
  };

  const handleClickDivision = (e) => {
    props.division(value);
  };

  const handleChange = (e) => {
    setValue(+e.target.value);
  };

  return (
    <div>
      <p>Calculator</p>
      <input value={value} onChange={handleChange} type="number" />
      <button onClick={handleClickAdd}>Add</button>
      <button onClick={handleClickMinus}>Minus</button>
      <button onClick={handleClickDivision}>Division</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (number) => dispatch(addNumber(number)),
    minus: (number) => dispatch(minusNumber(number)),
    division: (number) => dispatch(divisionNumber(number)),
  };
};

export default connect(null, mapDispatchToProps)(Calculator);
