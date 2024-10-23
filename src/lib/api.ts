const API_URL = import.meta.env.VITE_API_URL

export const apiQuery = (endpoint: string) => {
  return fetch(`${API_URL}${endpoint}`)
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch(error => {
      console.error(error.message)
    })
}