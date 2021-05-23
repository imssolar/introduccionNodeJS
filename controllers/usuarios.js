const { response } = require('express');



const usuariosGet = (req = request, res = response) => {

    const {q,nombre,apikey} = req.query;
    res.json({
        ok: true,
        msg: 'Get Api-Controlador',
        q,
        nombre,
        apikey
    })
}


const usuariosPost = (req, res = response) => {

    const body = req.body;
    res.json({
        ok: true,
        msg: 'Post Api-Controlador',
        body
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id
    res.json({
        ok: true,
        msg: 'Put Api-Controlador',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Delete Api-Controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}