const express= require('express');
const PORT =3000;
const cors = require('cors');
const app = express();
const index = require('./routes/index')

app.use(cors());
app.use(express.json());
app.use('/', index)

const start = ()=>{
    try{
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }
    catch(e){
        console.log(e)
    }
}
start();