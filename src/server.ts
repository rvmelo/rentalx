import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("route");

    return res.json({ message: "Hi my name is Goku!!!" });
});

app.listen(3333, () => console.log("Server is running!!!"));
