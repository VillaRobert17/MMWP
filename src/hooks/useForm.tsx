import { useState } from "react";

interface Data {
  nombre?: string;
  apellidos?: string;
  rol?: string;
  usuario?: string;
  password?: string;
}

export const useForm = (initialState: Data = {}) => {
  const [values, setValues] = useState(initialState);
  const handleInputChange = ({ target }: { target: any }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  return { values, handleInputChange, setValues };
};
