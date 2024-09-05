import { Validator } from "../types";

export const validateInput = (value: string, validator: Validator ) => {
      
    if (validator) {
      if (validator.type === 'length'  ) {
        const { operator, value: val } = validator;
        switch (operator) {
          case 'lt':
            return value.length < val;
          case 'lte':
            return value.length <= val;
          case 'gt':
            return value.length > val;
          case 'gte':
            return value.length >= val;
          case 'eq':
            return value.length === val;
          default:
            return true;
        }
      } else if (validator.type === 'pattern') {
        
        const regex = new RegExp(validator.regexp);
        return regex.test(value);
      }
    }
    return true;
  };