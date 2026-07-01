import api from "./api";

export async function login(email: string, password: string) {
  const { data } = await api.post("/login", {
    email,
    password,
  });

  if (typeof window !== "undefined" && data.token) {
    localStorage.setItem("token", data.token);
  }

  return data;
}

export async function register(payload: any) {
  const { data } = await api.post("/register", payload);

  if (typeof window !== "undefined" && data.token) {
    localStorage.setItem("token", data.token);
  }

  return data;
}

export async function logout() {
  const { data } = await api.post("/logout");

  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }

  return data;
}

export async function me() {
  const { data } = await api.get("/user");

  return data;
}