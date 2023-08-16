export const logIn = async (email: string, password: string) => {
  try {
    const response = await fetch('/api/authentication', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    return response.json()
  } catch (err) {
    console.log(err)
    return null
  }
}
