import {useState,useEffect} from "react";
const Search = () => {
  const [data, setData] = useState(null)
  const fetchURL = "https://globalsearch07.herokuapp.com/showall"
  const getData = () =>
    fetch(`${fetchURL}`)
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])
  return data;
};
export  {Search};