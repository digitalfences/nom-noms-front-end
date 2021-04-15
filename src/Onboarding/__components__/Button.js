import React, {useState} from "react";

function Button(props) {
  const [buttonType] = useState(props.type)
  const [buttonValue, setButtonValue] = useState('')

  return (
    <>
      <button type={buttonType} value={buttonValue} onClick={props.handleClick} class="buttonclass"/>
    </>
  );
}
export default Button;