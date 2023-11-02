export default async function getPlayer(id) {
    const response = await fetch(`https://www.balldontlie.io/api/v1/players/${id}`)

    if(!response.ok) {
        throw new Error('failed to fetch players')
    }

    return response.json()
}