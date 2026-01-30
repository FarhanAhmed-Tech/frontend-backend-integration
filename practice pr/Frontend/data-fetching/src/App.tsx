import axios from "axios"
import { useEffect} from "react"

export default function App() {
  const names = [
    {
      id:1,
      name:"Farhan"
    },
    {
      id:2,
      name:"Mehboob"
    },
  ]

  useEffect(() => {
   axios.get("http://localhost:8000/user").then((res) => {
      console.log(res);
    }).catch((err:any) => {
      alert(err)
    })
  },[])

  useEffect(() => {
    axios.post("http://localhost:8000/", {
      names
    })
  }, [])
  return <>
     
  </>
}