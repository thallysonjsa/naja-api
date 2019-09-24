const User = require('../models/User');

module.exports = {
    async index(req, res) {
       try {
           const products = await User.find();
           return res.json(products);
       } catch (error) {
           return res.json({ error: "Erro na consulta de usuários!"});
       }
    },

    async store(req, res) {
        try {
            if (await User.findOne({ email })) return res.send("Usuario ja cadastrado!");
            const user = await User.create(req.body);
            user.password = undefined;
            return res.json(user);

        } catch (err) {
            return res.json({ error: "Erro ao criar usuario!" });
        }
    }
    
}