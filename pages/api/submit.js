import clientPromise from "../../lib/mongodb"

export default async function handler (req, res){
    const client = await clientPromise
    const db =  client.db(process.env.MONGODB_DB).collection("user")
    
    const data = req.query
    let response
    
    const search = await db.find(data).limit(1).toArray()
    if(search.length === 0){
        response = await db.insertOne(data)
    } else {
        response = {"error": "data-exist"}
    }
    res.json(response)
}