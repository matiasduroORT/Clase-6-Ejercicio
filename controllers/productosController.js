import Producto from "../models/Producto.js";
import bcrypt from "bcryptjs";

export const home = (req, res) => {
    res.send(`<h1>Home de la API</h1>`)
}

export const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({error: "Error al obtener los productos."})
    }
}

export const crearProducto = async (req, res) => {

    if (!req.body.nombre || !req.body.precio || !req.body.categoria || !req.body.stock){
        return res.status(400).json({error: "Debe ingresar todos los datos."})
    };

    const { nombre, precio, categoria, stock} = req.body;

    const producto = {
        nombre: nombre,
        precio: precio,
        categoria: categoria,
        stock: stock
    };

    try {
        const nuevoProducto = await Producto.create(producto);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: "Error, no se pudo crear el nuevo producto"});
    }
};


export const buscarProductoPorId = async (req,res) =>{
    try {
        const producto = await Producto.findById(req.params.id)
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({error: "No se pudo encontrar el producto."});
    }
};