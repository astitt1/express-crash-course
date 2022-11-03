const express = require('express');
const path = require('path');
const members = require('./Members');

const app = express();

const PORT =  process.env.PORT || 5000;

//MIDDLEWARE =============
//login middleware function

const logger = (req, res, next) => {
    console.log(`${request.protocol}`);
    next();
}
//use middleware
app.use(logger)

//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));


//ROTUES ==============================

//gets all members
app.get('/api/members', (req, res)=>{
    //return json
    res.json(members);
});


app.listen(PORT, ()=> console.log(`Server Started on port ${PORT}`));
