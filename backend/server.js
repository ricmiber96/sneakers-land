import express from "express";

const port = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>This is the first page</h1>');
})

app.listen(port,()=>{
    console.log('listening on port ' + port);
})

