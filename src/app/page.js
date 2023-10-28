
async function getTeams() {
  const response = await fetch('https://www.balldontlie.io/api/v1/teams/28')
  const data = await response.json()
  return data
}

export default async function Home() {
  const teams = await getTeams()
  console.log(teams)

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">Home</h1>
      <h1>{teams.full_name}</h1>
      <h1>{teams.conference}</h1>
    </div>
  )
}
