"use server";
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
  
  const cookieStore = await cookies()
  const authToken = cookieStore.get("authToken").value

  console.log("TOKEN:", authToken);
  console.log(Object.fromEntries(formData));

    const assetResponse = await fetch(`http://localhost:4000/api/v1/assets/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: formData
  })
/* 
  const assetData = await assetResponse.json()

  formData.append("assetId", assetData.id) */

  const res = await fetch(`http://localhost:4000/api/v1/classes/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: formData
  })

  if (!res.ok) {
    console.error("Upload failed", await res.text())
  }

  return res.json()
}
