const express = require("express")
const app = express()

const PORT=8000;

const path = require("path")
const router = express.Router();


console.log(__dirname, "__dirname");

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/get', function (req, res) {
    res.send("Hello World")
});

app.use("/",router)
app.listen(PORT, ()=>{
    console.log(`server is listining on port ${PORT}`)
})
