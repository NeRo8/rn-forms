import React, { useCallback, useReducer } from "react";

import CustomInput from "./CustomInput";

import { reducer, initState } from "./reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  const { validationShema, validation } = state;

  const onChangeText = useCallback((field, value) => {
    try {
      const validationResult = validationShema[field](value);

      dispatch({
        type: "set_value",
        field,
        value
      });

      dispatch({
        type: "set_validation",
        field,
        value: validationResult
      });
    } catch (e) {
      console.log("Oppps... Promblem with input field", e);
    }
  }, []);

  return (
    <div>
      <CustomInput
        name="input1"
        value={state.input1}
        onChangeText={onChangeText}
        validation={validation["input1"]}
      />
      <CustomInput
        name="input2"
        value={state.input2}
        onChangeText={onChangeText}
        validation={validation["input2"]}
      />
      <CustomInput
        name="input3"
        value={state.input3}
        onChangeText={onChangeText}
        validation={validation["input3"]}
      />
    </div>
  );
}
