const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
    res.json({
        success: true,
        message: "Hello from Backend",
    });
});

app.listen(5000, () => {
    console.log("Backend server is running on http://localhost:5000");
});

