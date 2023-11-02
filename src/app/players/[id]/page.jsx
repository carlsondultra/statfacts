import getPlayer from "@/app/libs/getPlayer"

export default async function playerPage({params: {id}}) {
    const playerData = await getPlayer(id)

    return (
        <div>
            <h1 className="text-5xl font-bold">{playerData.first_name} {playerData.last_name}</h1>
        </div>
    )
}