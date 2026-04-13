import { useEffect, useState } from "react";
import { getListCity } from "../../services/cityService";
// import { useNavigate } from "react-router-dom";

function SearchForm () {
  // const navigate = useNavigate();
  const [city, setCity] = useState();

  useEffect(() => {
    const fecthAPI = async () => {
      const response = await getListCity();
      setCity(response)
    }
    fecthAPI();
  }, [])

  console.log(city);

  return (
    <>
      <h1>1000+ Jobs For Developers</h1>
    </>
  )
}

export default SearchForm;