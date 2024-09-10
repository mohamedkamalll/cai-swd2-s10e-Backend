let Data = [
     {name:"Mohamed",age:24,city:"cairo",edu:"cs",id:3},
     {name:"Mario",age:19,city:"Alex",edu:"dfvsfsed",id:4},
     {name:"Mariam",age:22,city:"cairo",edu:"IS",id:1},
     {name:"Mariam",age:25,city:"qena",edu:"CS",id:12},
     {name:"Nora",age:20,city:"cairo",edu:"cs",id:2}
]
const getUsers = (req,res)=>{
     console.log(req.url,req.method)
     res.json(Data)
}
const addUser = (req,res)=>{
     console.log("addUser called")
     console.log(req.body)
     Data.push(req.body)
     res.send("added")
}
const deleteUser = (req,res)=>{
     console.log(req.body)
     const {userId} = req.body
     Data = Data.filter(user=> user.id != userId)
     res.send("deleted")
}

module.exports ={getUsers,addUser,deleteUser}