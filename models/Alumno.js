import mongoose from "mongoose";

const alumnoSchema = mongoose.Schema({
    nombre: { type: String, required: true},
    edad: { type: Number, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
}, { timestamps: true})

export default mongoose.model("Alumno", alumnoSchema)