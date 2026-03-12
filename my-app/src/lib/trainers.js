export async function getAllTrainers() {
  const response = await fetch(`http://localhost:4000/api/v1/trainers/`)

  if (!response.ok) {
    throw new Error("Something went wrong while fetching trainers.");
  }
  return await response.json()

}
/* 
import { cookies } from "next/headers"


export async function getTrainersById(userId) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken");

  const response = await fetch(
    `http://localhost:4000/api/v1/trainers/${userId}`,
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
  console.log("trainer", data);
  
  return data;
}
 */