export default async function getPlayers() {
    const response = await fetch('https://www.balldontlie.io/api/v1/players')

    if(!response.ok) {
        throw new Error('failed to fetch players')
    }

    return await response.json()
}