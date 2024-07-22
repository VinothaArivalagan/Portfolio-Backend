const { Schema, model, Types} = require(' mongoose')

const portfolioScheme = new Schema(
    {
     name: {
        type: String,
        trim: true,
     },
     image: {
        type: String,
     },
     decription: {
        type: String,
     },
     technologies: {
        type: String,
     },
     trydemo: {
        type: String,
     },
     viewcode: {
        type: String,
     }  
    }
)

const Portfolio = model('Portfolio', portfolioScheme)

module.exports = Portfolio;