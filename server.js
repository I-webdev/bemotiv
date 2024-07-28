import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.get("/Bemotiv", async(req, res)=>{
try{
    const response = await axios.get("https://quote-api-snowy.vercel.app/random");
    res.render("index.ejs", {result: response.data});
}catch(error){
    res.status(500).send("This page can not be rendered.");
}
});

app.get("/:_id", async(req, res)=>{
       
    try{
        const response = await axios.get(
          "https://quote-api-snowy.vercel.app/motivate"
        );
        const id = parseInt(req.params._id);
    console.log(id);
    const foundJoke = response.data.find((motivation)=>motivation._id === id);
    
        res.render("index.ejs", {result: foundJoke});
    }catch(error){
        res.status(500).send("This page can not be rendered.");
    }
    });




app.listen(port, ()=>{
    console.log(`This app is running of https://localhost:${port}.`);
})