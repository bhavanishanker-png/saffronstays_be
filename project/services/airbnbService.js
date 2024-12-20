const dayjs = require("dayjs");

// Generate dynamic months for the next 5 months
const generateDynamicMonths = () => {
  const months = [];
  const currentMonth = dayjs();
  
  for (let i = 0; i < 5; i++) {
    months.push(currentMonth.add(i, "month").format("MMMM")); // Get month name
  }
  
  return months;
};

// Generate mock occupancy data dynamically
const generateOccupancyData = () => {
  const months = generateDynamicMonths();
  return months.map((month) => ({
    month,
    occupancy_percentage: Math.floor(Math.random() * 50) + 50, // Random 50-100%
  }));
};

// Generate mock rates data for the next 30 days
const generateRatesData = () => {
  const today = dayjs();
  return Array.from({ length: 30 }, (_, i) => {
    const date = today.add(i, "day").format("YYYY-MM-DD");
    const rate = Math.floor(Math.random() * 200) + 50; // Random 50-250
    return { date, rate };
  });
};

const fetchRoomData = (roomId) => {
  // Validate the roomId (mock validation)
  if (!roomId || typeof roomId !== "string") {
    throw new Error("Invalid Room ID");
  }

  // Generate data
  const occupancyData = generateOccupancyData();
  const ratesData = generateRatesData();

  // Calculate rate analytics
  const rates = ratesData.map((rate) => rate.rate);
  const averageRate = rates.reduce((sum, rate) => sum + rate, 0) / rates.length;
  const highestRate = Math.max(...rates);
  const lowestRate = Math.min(...rates);

  return {
    roomId,
    occupancy: occupancyData,
    rates: {
      averageRate,
      highestRate,
      lowestRate,
    },
  };
};

module.exports = { fetchRoomData };
