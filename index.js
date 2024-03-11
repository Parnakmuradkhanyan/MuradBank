const {MongoClient} = require('mongodb')


const client = new MongoClient('mongodb+srv://parnak725:parnakmur2005@cluster0.a7vo7j1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const start = async () => {
    try{
        await client.connect()
        console.log('Connected')
        await client.db().createCollection('users')
        const users = client.db().collection('name')
        await users.insertOne({name: 'james', age: 21})
        const user = await users.findOne({name: 'james'})
        console.log(user)

    } catch (e) {
        console.log(e)
    }
}

start()