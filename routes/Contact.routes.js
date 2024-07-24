const Contact = require('../models/Contact.model')

//Get all 

router.get('/',async(req,res) => {
    try{
        const contacts = await Contact.find()
        console.log(contacts)
        res.status(200).json(contacts)
    } catch(error) {
        console.error(error)
        res.status(500).json(error)
    }
})

//Get one

