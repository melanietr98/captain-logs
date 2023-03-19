const Log = require('../models/logs')
const logsArray = require('../models/logsArray')

module.exports.create = async (req, res) => {
    
    if(req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    }else {
        req.body.shipIsBroken = false
    }

    try {
        // use the model to interact with db and create a new document in the log collection
        const result = await Log.create(req.body)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    
    res.redirect('/logs')

}

module.exports.index = async (req, res) => {

    try {
        // Use the log model to interact with the database
        // find will get all documents from the log collection
        const logs = await Log.find() 
        console.log('inside controller')
        

        // Looks in the views folder for "logs/Index" and passes { logs } data to the view (kind of like a server props object)
        res.render('Index', { logs })

    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.show = async (req, res) => {
    try {
        const log = await Log.findById(req.params.id)
        const date = log.createdAt.toString().slice(0, 15)
        res.render('Show', { log , date})
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.delete = async (req, res) => {
  
    try {
        await Log.findByIdAndDelete(req.params.id)
        res.redirect('/logs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
} 

module.exports.edit = async (req, res) => {
  
    try {
        const log = await Log.findById(req.params.id)
        res.render('Edit', { log })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }    
}

module.exports.update = async (req, res) => {
 
    console.log(req.body)

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

   try {
        // pass the id to find the document in the db and the form data (req.body) to update it
        await Log.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/logs/${req.params.id}`)
   } catch(err) {
        console.log(err)
        res.send(err.message)
   }
}

// POST /logs/seed
module.exports.seed = async (req, res) => {

    try {
        await Log.deleteMany({})
        await Log.create(logsArray)
        res.redirect('/logs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// DELETE /logs/clear
module.exports.clear = async (req, res) => {

    try {
        await Log.deleteMany({})
        res.redirect('/logs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}