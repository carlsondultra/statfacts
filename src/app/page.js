import React from "react"
import TestingState from "./components/testingState"
import PlayersPage from "./players/page" 
import Link from "next/link"

async function getPlayer() {
  const response = await fetch('https://www.balldontlie.io/api/v1/players', {
    cache: 'no-cache' //new response is fetched every time
  })
  const data = await response.json()
  return data
}

async function tempFunc() {

  var playerName = "schroder"
  const response = await fetch(`https://balldontlie.io/api/v1/players?search=${playerName}`)
  const data = await response.json()
  return data
}

async function avgFunc() {
  const response = await fetch('https://www.balldontlie.io/api/v1/season_averages?season=2023&player_ids[]=1&player_ids[]=409')
  const data = await response.json()
  return data
}



export default async function Home() {

  const players = await getPlayer()
  // console.log(players.data)

  const temp = await tempFunc()
  console.log(temp.data)
  // const avg = await avgFunc()
  // console.log(avg.data)



  let mappedArray = (players.data).map((players) => {
    return(
      <li>{players.first_name} {players.last_name} - {players.team.full_name}</li>
    )
  })

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">statfacts</h1>


      <Link href="/users">Go to users</Link><br></br>
      <Link href="/players">Go to players</Link>

      <ul>
        {mappedArray}
      </ul>
    </div>
  )
}