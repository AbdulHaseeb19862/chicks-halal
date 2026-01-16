import { API_URL } from "../../config/url-config";

export type TUser = {
  id?: number;
  name?: string;
  email: string;
  phoneNo?: string;
  role?: string;
  status?: string;
  otpNumber?: number;
  password?: string;
};

export interface LoginPayload {
  email: string;
  password: string;
}

// Login User
export const asyncLoginUser = async (data: LoginPayload) => {
  try {
    const loginUser = await API_URL.post("/v1/auth/login", data);
    return loginUser.data;
  } catch (error) {
    console.log("Error from login", error);
    throw error;
  }
};
