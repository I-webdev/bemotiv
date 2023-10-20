import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.get("/", async(req, res)=>{
try{
    const response = await axios.get("http://localhost:3100/motivation");
    res.render("index.ejs", {result: response.data});
}catch(error){
    res.status(500).send("wahala");
}
});






app.listen(port, ()=>{
    console.log(`This app is running of https://localhost:${port}.`);
})