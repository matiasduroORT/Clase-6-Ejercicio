import Producto from "../models/Producto.js";

export const getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

export const getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "ID Invalido" });
  }
};

export const CrearProducto = async (req, res) => {
  if (
    !req.body.nombre ||
    !req.body.precio ||
    !req.body.categoria ||
    !req.body.stock
  ) {
    return res.status(400).json({ error: "Faltan datos" });
  }
  const { nombre, precio, categoria, stock } = req.body;

  const producto = {
    nombre,
    precio,
    categoria,
    stock,
  };

  try {
    const nuevoProducto = await Producto.create(producto);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear Producto" });
  }
};
