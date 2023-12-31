import axios from "axios";

const baseUrl = "https://api-football-standings.azharimm.dev";

export const menuList = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "league",
    name: "League",
  },
  {
    link: "news",
    name: "News",
  },
];

export const getAllLeague = async () => {
  try {
    const response = await axios.get(`${baseUrl}/leagues`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getLeagueDetail = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/leagues/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getLeagueStandings = async (id) => {
  const thisYear = axios.get(`${baseUrl}/leagues/${id}/seasons`);
  console.log(thisYear)
  try {
    const response = await axios.get(`${baseUrl}/leagues/${id}/standings?season=2023&sort=asc`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getNews = async () => {
  try {
    const response = await axios.get("https://api-berita-indonesia.vercel.app/antara/bola");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
