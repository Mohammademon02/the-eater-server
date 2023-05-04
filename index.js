const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) =>{
    res.send('The Eater is running')
})

app.listen(port, () => {
    console.log(`The Eater is running on port: ${port}`)
})