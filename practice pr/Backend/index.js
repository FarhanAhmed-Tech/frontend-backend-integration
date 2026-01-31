import express from "express"
import cors from "cors"

const app = express()

const port = 8000
app.listen(port ,() => {
    console.log(`Server is Running On Port ${port}`)
})

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(express.json())

app.get("/user", (req,res) => {
    res.json({name:"Farhan", age:19})
})

app.post("/", (req,res) => {
    console.log(req.body);
    res.send({success:true})
})
