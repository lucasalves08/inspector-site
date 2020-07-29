const express = require("express"); 
const app = express()
const path = require("path")

app.use("/android", express.static(__dirname+"/webpage/sources/android")); 
app.use(express.static(__dirname+"/webpage")); 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/webpage/index.html"))
})


app.listen(process.env.PORT || 3000, () => console.log("Is running"));