async function getPlayer() {
  const response = await fetch('https://www.balldontlie.io/api/v1/players')
  const data = await response.json()
  return data
}
export default async function Home() {
  
  const players = await getPlayer()
  console.log(players.data)

  let mappedArray = (players.data).map((players) => {
    return(
      <li>{players.first_name} {players.last_name} - {players.team.full_name}</li>
    )
  })

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">statfacts</h1>
      <ul>
        {mappedArray}
      </ul>
    </div>
  )
}