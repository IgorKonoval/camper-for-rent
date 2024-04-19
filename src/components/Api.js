import axios from 'axios';

export const getAllCampers = async ({ page = 1, limit }) => {
  const { data } = await axios.get(`/adverts?page=${page}&limit=${limit}`);
  return data;
};
