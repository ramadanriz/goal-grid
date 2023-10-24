/* eslint-disable no-useless-catch */
import axios from "axios";

const baseUrl = "https://api-football-standings.azharimm.dev";

export const menuList = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/leagues",
    name: "League",
  },
];

export const getAllLeague = async () => {
  try {
    const response = await axios.get(`${baseUrl}/leagues`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getLeagueDetail = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/leagues/${id}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
