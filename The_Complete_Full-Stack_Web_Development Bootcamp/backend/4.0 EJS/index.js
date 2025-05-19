import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const d = new Date();
    let day = d.getDay();
    let time = "weekday";
    let adv = "work hard";
    if (day == 0 || day == 6) {
        time = "weekend";
        adv = "have fun";
    }
    res.render("index.ejs",
    {
        weektime: time,
        advice: adv
    }
    );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
