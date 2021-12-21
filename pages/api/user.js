import clientPromise from "../../lib/mongodb"

export default async function handler (req, res){
    const client = await clientPromise
    const db =  client.db(process.env.MONGODB_DB)
    const data = await db.collection("user").find({}).limit(20).toArray()
    res.json(data)
}