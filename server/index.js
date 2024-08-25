import express from "express";
import cors from 'cors'
import generate from "./generate";

const app = express();

app.use(express.json())
app.use(cors());


const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Hello world from our API")
})

app.post("/generate", async (req, res) => {
    const queryDescription = req.body.queryDescription
    try{
        const sqlQuery = await generate(queryDescription)
        res.json({ response: sqlQuery })
        } catch (error) {
        console.error(error)
        res.status(500).send("Internal Error Server")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})