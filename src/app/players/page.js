'use client'
import Link from "next/link"
import getPlayers from "../libs/getPlayers"
import React, { useState, useEffect } from "react"

export default function PlayersPage() {
    const [data, setData] = useState(null)
    const [stats, setStats] = useState(null)

    const [id, setId] = useState(null)
    const [avg, setAvg] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const [value, setValue] = useState('')

    // getting list of players
    useEffect(() => {
        fetch('https://www.balldontlie.io/api/v1/players')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    // retrieving data from selected player
    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players?search=${value}`)
            .then((res) => res.json())
            
            .then((stats) => {
                setStats(stats)
                setId(stats.data[0].id) //setting players ID state retrieved from dropdown select
                setLoading(false)
                console.log(stats)
            })
    }, [value])

    // retrieving stats from selected player using their player ID
    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${id}`)
            .then((res) => res.json())
            
            .then((avg) => {
                setAvg(avg)
                setLoading(false)
                console.log(avg)
            })
    }, [id])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div className="text-center mt-20">
            <h1 className="text-5xl font-bold">players</h1>
            {/* drop down menu with list of players */}
            <select onChange={(e) => {setValue(e.target.value)}}>
                {data.data.map(player => {
                    return (
                        <>
                            <option>
                                <p key={player.id}>
                                    <Link href={`/players/${player.id}`}>
                                        {player.first_name} {player.last_name}
                                    </Link>
                                </p>
                            </option>
                        </>
                    )
                })
                }
            </select>
            <br></br><br></br>
            {value}
            {value == 'Lorenzo Brown'? <p>This is Lorenzo</p>: null}
            {/* retrieving data from selected individual */}
            {stats?.data.map(stats => {
                    return (
                        <>
                            <option>
                                <p key={stats.id}>
                                    <Link href={`/players/${stats.id}`}>
                                        {stats.first_name} {stats.last_name} {stats.position} {stats?.team.full_name}
                                    </Link>
                                </p>
                            </option>
                        </>
                    )
                })
                }
                {id} <br></br>

                {/* checking if the player has played more than 1 game in the season */}
                {
                avg?.data[0] == null ? 
                <p>This player did not play in the 2018 season! </p>
                : 
                <p>In the 2018 season, {value} averaged {avg?.data[0]?.pts} points, {avg?.data[0]?.reb} rebounds, and {avg?.data[0]?.ast} assists.</p> 
                }
            
        </div>
    )
}