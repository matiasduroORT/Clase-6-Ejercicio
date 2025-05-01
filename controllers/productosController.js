import Producto from "../models/Producto";
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
    const { nombre, precio, categoria, stock} = req.body;

    if (!nombre, !precio, !categoria, !stock){
        return res.status(400).json({error: "Debe ingresar todos los datos."})
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const producto = {
        nombre,
        precio,
        categoria,
        stock
    }

    try {
        const nuevoProducto = await Producto.create(producto);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({error: "Error, no se pudo crear el nuevo producto"});
    }
}

async function buscarProductoPorId(id){
    try {
        const res = await fetch()
        const datosProducto = await res.json()
        return datosPRoducto.name
    } catch (error) {
        console.log("El error fue: ", );
        return null 
    }
}