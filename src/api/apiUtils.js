export async function handleResponse(response) {
    if (response.status === 200) {
      console.log(response)
        return response.data
    }
    if (response.status === 400) {
      const error = await response.text()
      throw new Error(error)
    }
    throw new Error("Network response was not ok.")
  }
  
  export function handleError(error) {
    console.error("API call failed. " + error)
    throw error
  }
  