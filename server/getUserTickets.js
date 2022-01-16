var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors())

app.listen(3001, () => {

    console.log("Server running on PORT 3001");

})

app.post('/getUserTickets', jsonParser, async (req, res) => {

    // name: PlusUltra, password: PlusUltraPassword

    const uri = "mongodb+srv://PlusUltra:PlusUltraPassword@plusultra.zx3zl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useUnifiedTopology: true});
    await client.connect();

    const userTicketsObj = await client.db("ticketDecentral").collection("users").find({ address: req.body.address.toLowerCase() }, { projection: { tickets: 1 } }).toArray();

    client.close();

    res.send((userTicketsObj[0].tickets.length) ? userTicketsObj[0].tickets : [])

});