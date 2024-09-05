import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { onChange } from "../services/slices/formSlice";

type Props = {
    label: string;
    name: string;
    type: string;
    required: boolean;
    value: string;
}

export const Checkbox:FC<Props> = ({name,label,type,required}) => {
    const {formData} = useAppSelector(({form}) => form);
    const dispatch = useAppDispatch()

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChange({key: name, value: event.target.checked}))
      };

    return <label htmlFor={name} className="checkbox-label">
        <p>{label}</p>
            <input type={type} name={name} id={name}  required={required} checked={formData[name] || false} onChange={handleCheckboxChange}
          />
    </label>
}