const express = require('express');
const app = express();
const port =  8000;
const path = require("path")
const router = express.Router();


console.log(__dirname, "__dirname");

router.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/get', function (req, res) {
    res.send("Hello World")
});

app.use('/', router);
app.listen(port, function () {
    console.log(`Connection active port ${port}`)
})