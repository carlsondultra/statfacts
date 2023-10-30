async function getPlayer() {
  const response = await fetch('https://www.balldontlie.io/api/v1/players?search=lebron')
  const data = await response.json()
  return data
}

export default async function Home() {
  
  const players = await getPlayer()
  console.log(players)
  console.log(players.data[0].team)

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">Players</h1><br></br>
      <h1>Name: {players.data[0].first_name} {players.data[0].last_name}</h1>
      <h1>Height: {players.data[0].height_feet}'{players.data[0].height_inches}</h1>
      <h1>Plays for: {players.data[0].team.full_name} </h1>
    </div>
  )
}