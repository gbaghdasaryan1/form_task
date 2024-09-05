import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { onChange } from "../services/slices/formSlice";
import { ERROR_MESSAGES } from "../constants/errors";
import { removeError, setError } from "../services/slices/validationSlice";
import { Validator } from "../types";
import { validateInput } from "../helpers/validations";

type Props = {
  name: string;
  label: string;
  required: boolean;
  validator: Validator
}

export const Input: FC<Props> = ({ name, label, required, validator }) => {
  const dispatch = useAppDispatch();
  const {formData} = useAppSelector(({ form }) => form);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim();
    if (!validateInput(newValue, validator)) {
      dispatch(setError(name))
    } else {
      dispatch(removeError(name))
    }
    dispatch(onChange({ key: name, value: newValue }));
  };

  return (
    <div className="form-group">
      <label>
        {label}
        <input
          type="text"
          name={name}
          value={formData[name] || ''}
          required={required}
          onChange={handleChange}
        />
      </label>

      {validator.type === "length" && <p>{formData[name] && !validateInput(formData[name], validator) ? `${ERROR_MESSAGES[validator.operator]} - ${validator.value}` : ""}</p>}
      {validator.type === "pattern" && <p>{formData[name] && !validateInput(formData[name], validator) ? `${ERROR_MESSAGES[validator.type]} - ${validator.regexp}` : ""}</p>}
    </div>
  );
};