import React from "react";

export default function Input(props) {
  const { keyField, placeholder, value, onChange, error } = props;

  return (
    <div>
      <input
        keyField={keyField}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ margin: 10 }}
      />
      <p>{error(keyField)}</p>
    </div>
  );
}
