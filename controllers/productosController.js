import Producto from "../models/Producto.js"
import bcrypt from "bcryptjs";


export const ObtenerProductos = async (req, res) => {
   const {nombre} = req.query;
   
    try {
        const productos = await Producto.find({
        nombre: {$regex: nombre, $options: 'i'}
    })

        res.json(productos)
    } catch (error) {
        res.status(500).json({error: "Error al obtener productos"})
    }
}

export const ObtenerProductosById = async (req, res) => {

    try {
        const proudcto = await Producto.findById(req.params.id)
        if(proudcto){
            res.json(proudcto)
        }else{
            res.status(404).json({ error: 'Proudcto no encontrado'})
        }
    } catch (error) {
        res.status(500).json({ error: "ID Invalido"})
    }

}


export const CrearProductos = async (req, res) => {  

    // res.json({
    //     reqBody: req.body,
    //     reqParams: req.params,
    //     reqQuery: req.query,
    // })

    const { nombre, precio, categoria, stock } = req.body;
    if(!nombre || !precio || !categoria || !stock){
        return res.status(400).json({error: "Faltan datos"})
    }


    // const comparada = await bcrypt.compare(password, hashedPassword)
    
    const producto = {
        nombre,
        precio,
        categoria,
        stock
    }

    try {
        const nuevoProducto = await Producto.create(producto)
        res.status(201).json(nuevoProducto)
    } catch (error) {
        res.status(500).json({error: "Error al crear el producto: ", nuevoProducto})
    }
    
}
