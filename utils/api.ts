/* eslint-disable @typescript-eslint/no-explicit-any */
// api.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:1337/api";

export const fetchLocations = async () => {
  const res = await axios.get(`${API_BASE_URL}/locations`);
  return res.data.data;
};

export const fetchStores = async (locationId: number) => {
  const res = await axios.get(`${API_BASE_URL}/stores?filters[location][id]=${locationId}&populate=*`);
  return res.data.data;
};

export const fetchServices = async () => {
  const res = await axios.get(`${API_BASE_URL}/services`);
  return res.data.data;
};

export const sendOtp = async (mobile: string) => {
  return axios.post(`${API_BASE_URL}/otp/send`, { mobile });
};

export const verifyOtp = async (mobile: string, otp: string) => {
  return axios.post(`${API_BASE_URL}/otp/verify`, { mobile, otp });
};

export const bookAppointment = async (data: any) => {
  return axios.post(`${API_BASE_URL}/appointments`, data);
};