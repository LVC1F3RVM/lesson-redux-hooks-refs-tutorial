import React, { useState } from "react";
import { connect } from "react-redux";
import { addNumber, minusNumber, divideNumber, clearNumber } from "../actions/counts";

function Calculator(props) {
  const [value, setValue] = useState(0);

  const handleClickAdd = (e) => {
    props.add(value);
  };
  const handleClickMinus = (e) => {
    props.minus(value);
  };

  const handleClickDivide = (e) => {
    props.divide(value);
  };

  const handleClickClear = (e) => {
    props.clear(value);
  };

  const handleChange = (e) => {
    setValue(+e.target.value);
  };

  return (
    <div>
      <p>Calculator</p>
      <p><input value={value} onChange={handleChange} type="number" /></p>
      <button onClick={handleClickAdd}>Add</button>
      <button onClick={handleClickMinus}>Minus</button>
      <button onClick={handleClickDivide}>Divide</button>
      <br></br>
      <button onClick={handleClickClear}>Clear</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (number) => dispatch(addNumber(number)),
    minus: (number) => dispatch(minusNumber(number)),
    divide: (number) => dispatch(divideNumber(number)),
    clear: (number) => dispatch(clearNumber(number)),
  };
};

export default connect(null, mapDispatchToProps)(Calculator);
