import Link from "next/link"
import getPlayers from "../libs/getPlayers"

export default async function PlayersPage() {
    const players = await getPlayers()
    return (
        <div className="text-center mt-20">
            <h1 className="text-5xl font-bold">players</h1> 
            {players.data.map(player => {
                return (
                    <>
                    <p key={player.id}>
                        <Link href={`/players/${player.id}`}>
                            {player.first_name} {player.last_name}
                        </Link>
                    </p>
                    </>
                )
                })
            }

        </div>
    )
}