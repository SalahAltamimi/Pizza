import axios from "axios";

const ApiUrl = "https://react-fast-pizza-api.onrender.com/api/";
const api = axios.create({
  baseURL: ApiUrl,
});
export async function apiMenu() {
  try {
    const { data } = await api.get(`menu`);
    return data;
  } catch (err) {
    console.log(err);
  }
}
export async function apiCreateOrder(data) {
  try {
    const { data: data1 } = await api.post(`order`, data);
    return data1;
  } catch (err) {
    console.log(err);
  }
}

export async function apigetOrder(id) {
  try {
    const data = await api.get(`order/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
}
export async function apiupdateOrder(id, data) {
  try {
    const data1 = await api.patch(`order/${id}`, data);
    console.log(data1);
    return data1;
  } catch (err) {
    console.log(err);
  }
}
