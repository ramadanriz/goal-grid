import axios from "axios";

const baseUrl = "https://api-football-standings.azharimm.dev";

export const menuList = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "league",
    name: "Klasemen Liga",
  },
  {
    link: "news",
    name: "Berita",
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
  const thisYear = new Date().getFullYear();
  try {
    const response = await axios.get(`${baseUrl}/leagues/${id}/standings?season=${thisYear}&sort=asc`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getNews = async (news = "tempo") => {
  try {
    const response = await axios.get(`https://api-berita-indonesia.vercel.app/${news}/bola`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
