import express from "express";
import axios from "axios";

const app = express();
const PORT = 8082;

app.get("/ip", async (req, res) => {
  try {
    const response = await axios.get("https://httpbin.org/ip");
    const ip = response.data.origin;

    console.log(`IP Address fetched: ${ip}`);
    res.json({ ip: ip, source: "httpbin.org" });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to fetch IP address",
      message: err.message
    });
  }
});

// เริ่ม server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
