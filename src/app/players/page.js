'use client'
import Link from "next/link"
import getPlayers from "../libs/getPlayers"
import React, { useState, useEffect } from "react"

export default function PlayersPage() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://www.balldontlie.io/api/v1/players')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
                console.log(data)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div className="text-center mt-20">
            <h1 className="text-5xl font-bold">players</h1>
            {/* drop down menu with list of players */}
            <select>
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
        </div>
    )
}