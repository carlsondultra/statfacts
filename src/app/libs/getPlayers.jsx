export default async function getPlayers() {
    const response = await fetch('GET https://www.balldontlie.io/api/v1/players')

    if(!response.ok) {
        throw new Error('failed to fetch users')
    }

    return await response.json()
}