class EnfermeiroController {
    constructor (Enfermeiro) {
      this.Enfermeiro = Enfermeiro
    }
  
    async findAll (req, res) {
      try {
        const enfermeiro = await this.Enfermeiro.find({})
        res.send({ enfermeiro })
      } catch (error) {
        res.status(400).send(error.message)
      }
    }

    async getById (req, res) {
    const { params: { id } } = req

    try {
      const enfermeiro = await this.Enfermeiro.find({ _id: id })
      res.send(enfermeiro)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  async create (req, res) {
    try {
      const enfermeiro = new this.Enfermeiro(req.body)
      await enfermeiro.save()

      res.status(201).send(enfermeiro)
    } catch (error) {
      res.status(422).send(error.message)
    }
  }

  async update (req, res) {
    const body = req.body

    try {
      const enfermeiro = await this.Enfermeiro.findById(req.params.id)

      enfermeiro.nome = body.nome      

      await enfermeiro.save()

      res.sendStatus(200)
    } catch (error) {
      res.status(422).send(error.message)
    }
  }

  async delete (req, res) {
    try {
      await this.Enfermeiro.deleteOne({ _id: req.params.id })
      res.sendStatus(200)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

}

module.exports = EnfermeiroController