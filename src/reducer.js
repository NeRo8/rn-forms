const onLengthValidation = (value) => value.length > 25;
const onNaNValidation = (value) => isNaN(value);

export const initState = {
  input1: "",
  input2: "",
  input3: "",
  validationShema: {
    input1: onLengthValidation,
    input2: onLengthValidation,
    input3: onNaNValidation
  },
  validation: {
    input1: "",
    input2: "",
    input3: ""
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "set_value": {
      return {
        ...state,
        [action.field]: action.value
      };
    }
    case "set_validation": {
      return {
        ...state,
        validation: {
          ...state.validation,
          [action.field]: action.value
        }
      };
    }
    default:
      throw new Error();
  }
};
