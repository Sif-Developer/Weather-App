import axios from "axios";

const API_URL = "http://api.timezonedb.com/v2.1/get-time-zone";
const API_KEY = "99UO872DKUZ0";

const getTime = async (timezone) => {
  const res = await axios.get(
    `${API_URL}?key=${API_KEY}&format=json&by=zone&zone=${timezone}`
  );
  return res.data;
};

const timeService = {
  getTime,
};

export default timeService;
