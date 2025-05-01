import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre: {type: String, require: true},
    precio: {type: Number, require:true}, 
    categoria: {type: String, require: true}, 
    stock: {type: Number, require: true}
}, {timestamps: true});


export default mongoose.Schema("Producto", productoSchema);