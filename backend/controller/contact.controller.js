import contact from '../models/contact.models.js';

//Create a Contact
export const createContact = async(req,res) => {
    try{
        const newContact = new contact(req.body);
        await newContact.save();
        res.status(201).json(newContact);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//GET the contacts
export const getContacts = async(req,res) => {
    try{
        const contacts = await contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//Delete a contact 
export const deleteContact = async(req,res) => {
    try{
        const deletedContact = await contact.findByIdAndDelete(req.params.id);
        if(!deletedContact){
            return res.status(404).json({message: 'Contact not found'});
        }
        res.status(200).json({message: 'Contact deleted successfully'});

    }catch(error){
        res.status(500).json({message: error.message});
    }
}