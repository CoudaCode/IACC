const express = require('express')
const path = require('path')
const app = express()
const userRoutes = require('./routes/routes')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','html')


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
    console.log(__dirname)
}
)
app.use("/",userRoutes)