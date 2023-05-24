import express from "express";
import cors from "cors";
const PORT = 8000;

// express setup
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// health route
app.get("/hello", async (_, res) => {
  res.send("hello from server");
});

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server has started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
