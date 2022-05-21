const authorize = (req,res,next) =>{
    const {user} = req.query

    if(user === 'krisna' ){
        req.user = {name:'krisha',id:3}
        next()
    }else{
        res.status(401).send("Unauthorized")
    }

    const url = req.url
    console.log(url);
    next()
}

module.exports = authorize