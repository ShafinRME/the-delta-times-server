const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@the-delta-times.jj5xw2i.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const technologyCollection = client.db('the_delta_times').collection('latest_news')

        app.get('/latest', async (req, res) => {
            const query = {};
            const cursor = technologyCollection.find(query);
            const latestNews = await cursor.toArray();
            res.send(latestNews);
        })
    }
    finally {

    }

}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello from The delta times')
})

app.listen(port, () => {
    console.log(`The delta times is going on port ${port}`)
})