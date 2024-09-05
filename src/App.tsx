
import { FC, FormEvent,  useEffect,  useState } from "react";
import "./App.css"

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchBlueprint, submitForm } from "./services/api";
import { renderElements } from "./helpers";
import { reset } from "./services/slices/formSlice";


const App: FC = () => {

  const [blueprint, setBlueprint] = useState([]);
  const {formData} = useAppSelector(({form}) => form);
  const {hasError} = useAppSelector(({validation}) => validation);
  const dispatch = useAppDispatch();

  const handleGetData = async () => {
    const result = await fetchBlueprint();
    setBlueprint(result.blueprint)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(hasError.length) {
      alert("Something wrong");
      return
    };
    await submitForm(formData);
    dispatch(reset())
  }

  useEffect(() => {
    handleGetData()
  }, []);

  console.log(formData);
  

  return <form onSubmit={handleSubmit}>
    {blueprint ? renderElements(blueprint) : <p>Loading...</p>}
  </form>
}

export default App;