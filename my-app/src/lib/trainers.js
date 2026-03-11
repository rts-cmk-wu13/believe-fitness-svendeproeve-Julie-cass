export async function getAllTrainers() {
  const response = await fetch(`http://localhost:4000/api/v1/trainers/`)

  if (!response.ok) {
    throw new Error("Something went wrong while fetching trainers.");
  }
  return await response.json()

}