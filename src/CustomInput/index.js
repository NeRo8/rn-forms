import React, { memo } from "react";

const CustomInput = ({ name, value, onChangeText, validation }) => {
  const onEnterText = ({ target }) => {
    onChangeText(name, target.value);
  };

  return (
    <div>
      {console.log("Render", name)}
      <input value={value} onChange={onEnterText} />
    </div>
  );
};

export default memo(CustomInput);
