import { cookies } from "next/headers"


export async function getUsersById(userId) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken");
  

  const response = await fetch(
    `http://localhost:4000/api/v1/users/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken?.value}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await response.json();
  console.log("user data", data);
  
  return data;
}
