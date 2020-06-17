class PedidoController {
    constructor (Pedido) {
      this.Pedido = Pedido
    }
  
    async findAll (req, res) {
      try {
        const pedido = await this.Pedido.find({})
        res.send({ pedido })
      } catch (error) {
        res.status(400).send(error.message)
      }
    }

    async getById (req, res) {
    const { params: { id } } = req

    try {
      const pedido = await this.Pedido.find({ _id: id })
      res.send(pedido)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  async create (req, res) {
    try {
      const pedido = new this.Pedido(req.body)
      await pedido.save()

      res.status(201).send(pedido)
    } catch (error) {
      res.status(422).send(error.message)
    }
  }

  async update (req, res) {
    const body = req.body

    try {
      const pedido = await this.Pedido.findById(req.params.id)

      pedido.nome = body.nome
      

      await pedido.save()

      res.sendStatus(200)
    } catch (error) {
      res.status(422).send(error.message)
    }
  }

  async delete (req, res) {
    try {
      await this.pedido.deleteOne({ _id: req.params.id })
      res.sendStatus(200)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

}

module.exports = PedidoController