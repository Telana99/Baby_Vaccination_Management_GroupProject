const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const { authMiddleware } = require("./extra/JWT")
require("./database/connections")

const router = require('./routes/adminRoute'); // Adjust the path as needed

const app = express()
const port = 4000;
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended:false
}))

app.use("/public", require("./routes/publicRoute"))
// app.use("/admin",authMiddleware,router);
app.use("/admin", require("./routes/adminRoute"))
app.use("/healthcare", require("./routes/healthofficerRoute"))
app.use("/parent", require("./routes/parentRoute"))

app.listen(port, ()=>{
    console.log(`Server started at post ${port}`)
})      