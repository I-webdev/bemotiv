import express from "express";
// import ejs from "ejs";
import axios from "axios";
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static("Public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://quote-api-snowy.vercel.app/random");
    const motivationObject = response.data;
    res.render("index.ejs", { result: motivationObject });
  } catch (error) {
    console.log(error);
    res.status(500).send("This page can not be rendered.");
  }
});

app.get("/:index", async (req, res) => {
  try {
    let endPoint = req.params.index;
    const response = await axios.get(`https://quote-api-snowy.vercel.app/motivate/${endPoint}`);

    res.render("index.ejs", { result: response.data });
  } catch (error) {
    res.status(500).send("This page can not be rendered.");
  }
});

app.listen(port, () => {
  console.log(`This app is running of https://localhost:${port}.`);
});
