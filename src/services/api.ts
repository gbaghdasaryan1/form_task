/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const BASE_URL = 'https://9fd21a03-38a1-4e35-9cea-a97bcfc00f4b.mock.pstmn.io/reg';

export const fetchBlueprint = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error);
    
  }
};

export const submitForm = async (data: any) => {
  try {
    const response = await axios.post(BASE_URL, data);
    alert("Done")
    return response.data;
  } catch (error) {
    console.log(error);
    
  }
};
