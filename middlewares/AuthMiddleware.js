const jwt = require('jsonwebtoken');
const authConfig = require('../auth');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).send({ error: 'Token not found!' });
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2) {
        return res.status(401).send({ error: 'Token error!' });
    }

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token badly formatted!' });
    }

    jwt.verify(token, authConfig.JWT_SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).send({ error: 'Invalid token!' });
        }

        req.doadorId = decoded.id;
        return next();
    });
};

////////////////////// CREDITS TO JOÃO LUCAS, COMPUTAÇÃO@UFCG //////////////////////////////