const {Schema, model, Types} = require('mongoose')

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is requied.'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'email is required'],
            trim: true,
        },
        message: {
            type: String,

        }
    }
)

const Contact = model('Contact', contactSchema)

module.exports = Contact;