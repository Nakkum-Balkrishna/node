let {people} = require('../data')


const getPeople = (req,res)=>{
    res.status(200).json({success:true,data:people});
}

const createPerson = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({Success:true,msg:'Provide name!'})
    }
    res.status(201).send({Success:true,person:name})
}

const createPersonPostman = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({Success:true,msg:'Provide name!'})
    }
    res.status(201).send({Success:true,data:[...people,name]})

}

const updatePerson = (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=> person.id===Number(id))
    console.log(person);
    if(!person){
        return res.status(401).json({Success:false,msg:`no person with it ${id}`})
    }

    const newPerson = people.map((items)=>{
        if(items.id===Number(id)){
            items.name = name
        }
        return items
    })
    res.status(201).json({Success:true,data:newPerson})
}

const deletePerson = (req,res)=>{
    const person = people.find((person)=> person.id===Number(req.params.id))
    console.log(person);
    if(!person){
        return res.status(401).json({Success:false,msg:`no person with it ${req.params.id}`})
    }
    const newArray = people.filter((items)=>items.id !== Number(req.params.id))

    return res.status(200).json({success:true,data:newArray})
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}