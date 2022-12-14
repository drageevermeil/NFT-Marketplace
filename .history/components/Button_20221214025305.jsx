import React from 'react';

const Button = ({ classStyles, btnName, handleClick, cancelBg }) => (
  <button
    type="button"
    className={cancelBg ? `${classStyles}`
                        :` ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;
