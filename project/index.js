const express = require("express");
const roomAnalyticsRouter = require("./routes/roomAnalytics");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", roomAnalyticsRouter);
app.get("/",(req,res)=>{
  res.status(200).send("Hello")
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
