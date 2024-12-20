const express = require("express");
const { fetchRoomData } = require("../services/airbnbService");

const router = express.Router();

router.get("/:roomId", (req, res) => {
  const { roomId } = req.params;

  try {
    // Fetch room data
    const roomData = fetchRoomData(roomId);
    res.json(roomData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

