import { get } from "../utils/request";

export const getAllCompany = async () => {
  const result = await get(`company`);
  return result;
};