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

