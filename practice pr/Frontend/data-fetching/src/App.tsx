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

  const getResponse = () => {
    axios.get("http://localhost:8000/user").then((res) => {
       console.log(res.data);
     }).catch((err:any) => {
       alert(err)
     })
  }

  useEffect(() => {
    getResponse()
  })

  const getPost = () => {
     axios.post("http://localhost:8000/", {
      names
    })
  }
  useEffect(() => {
   getPost()
  }, [])
  return <>
   <button onClick={() => getResponse()}>Get</button>
   <button onClick={() => getPost()}>Post</button>
  </>
}
