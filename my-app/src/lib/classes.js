"use server";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";


export async function getAllClasses() {
  const response = await fetch(`http://localhost:4000/api/v1/classes/`)

  if (!response.ok) {
    throw new Error("Something went wrong while fetching Classes.");
  }
  return await response.json()

}


export async function getClassById(id) {
  const response = await fetch(`http://localhost:4000/api/v1/classes/${id}`)

  if (!response.ok) {
    throw new Error("Something went wrong while fetching class by ID.");
  }
  return await response.json()

}


export async function CreateClass(prevState, formData) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken")?.value;

  if (!authToken) throw new Error("No auth token found");

  formData.append("assetId", "2");

  const res = await fetch(`http://localhost:4000/api/v1/classes/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(`Failed to create class: ${errorData.message}`);
  }

  console.log("Class created successfully");

}