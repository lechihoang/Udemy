import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "postgres",
  port: 5432,
});
db.connect();

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM items");
  items = result.rows;
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    const result = await db.query(
      "INSERT INTO items (title) VALUES ($1)",
      [item.toLowerCase()]
    );
  }
  catch (err) {
    console.log(err);
    res.send("This activity overlaps with another");
  }
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const id = req.body.updatedItemId;
  const name = req.body.updatedItemTitle;
  await db.query(
    "UPDATE items SET title = $1 WHERE id = $2;",
    [name, id]
  );
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  await db.query(
    "DELETE FROM items WHERE id = $1;",
    [id]
  );
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
