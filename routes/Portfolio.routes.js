const Portfolio = require('../models/Portfolio.model')

//Get all

router.get('/', async(req, res) => {
    try{
      const portfolios = await Product.find()
      console.log(portfolios)
      res.status(200).json(portfolios)
    } catch(error) {
      console.error(error) 
      res.status(500).json(error)
    }
  })

// Get one
router.get('/:portfolioId', async(req, res) => {
    try{
      const portfolio = await Portfolio.findById(req.params.portfolioId)
      res.status(200).json(portfolio)
    } catch(error) {
      console.error(error) 
      res.status(500).json(error)
    }
  })
//Post
router.post('/', async(req,res) => {
    try{
        const newPortfolio = await Portfolio.create(req.body)
        res.status(201).json(newPortfolio)
      } catch(error) {
        console.error(error) 
        res.status(500).json(error)
      }
})

//update
router.put('/:portfolioId', async (req, res) => {
    try{
      const updatedPortfolio = await Product.findByIdAndUpdate(req.params.portfolioIdId, req.body, {
        new : true,
        runValidators: true,
      })
      res.status(200).json({message: 'Event updated successfully', product: updatedPortfolio})
    } catch(error) {
      console.error(error) 
      res.status(500).json(error)
    }
  })

  //Delete
  router.delete('/:portfolioId', async (req,res) => {
    try{
      await Event.findByIdAndDelete(req.params.portfolioId)
      res.status(204).send()
    } catch(error) {
      console.error(error) 
      res.status(500).json(error)
    }
  
  })
  
module.exports = router;
