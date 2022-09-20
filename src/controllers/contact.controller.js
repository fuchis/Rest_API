const contactService = require('../services/contact.service.js');


class ContactController {

    // Mostrar todos los contactos
    async index(req, res, next) {
        const params = req.query;
        let contacts = {};

        if(params.hasOwnProperty('phrase')) {
            contacts = contactService.findPhraseMatches(params.phrase);
        }else {
            contacts = contactService.ShowAllContact();
        }
         
        return res.status(200).json(contacts);

    }

    // Buscar y desplegar un solo contacto
    async findOne(req, res, next) {
        let {id_contact} = req.params;
        
        let contact = contactService.FindOneContact(id_contact);
        if(contact.length) {
            return res.json(contact);
        }
        return res.status(404).json({msg: "Contact Not Found"});
        
 
    }
    /**
     * Crear nuevo contacto
     * 
     * TODO: refactorizar
     */
    async create(req, res, next) {
        const contact = {};
        const { id,name,phone,addressLines}  = req.body;
        contact.id = id;
        contact.name=name;
        contact.phone=phone;
        contact.addressLines=addressLines;
        
        let msg = contactService.RegisterContact(contact);
        return res.json({contact: contact, msg: msg});
        
    }

    // Eliminar contacto
    async delete(req, res, next) {
        let {id }= req.params;
        if(contactService.deleteContact(id) === 204){
            return res.status(204).json({});
        } 
        return res.status(404).json({msg: "404 NOT FOUND"});
    }

}

module.exports = new ContactController();

