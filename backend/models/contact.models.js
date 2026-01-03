import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    message:{
        type: String,
    },
}, { timestamps: true });

const contact = mongoose.model('contact', contactSchema);

export default contact;