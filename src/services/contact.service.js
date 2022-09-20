const contactService = {}
const { DB } = require("../database/read_db");
const  sortDB  = require('../helpers/sortDB');

// Devolver todos los contactos de manera ordenada
contactService.ShowAllContact = () => {
    return sortDB.sort(DB);   
}

// Agregar Contacto a la base de datos
contactService.RegisterContact = (contact) => {
    const newContact = contact;
    DB.push(newContact);
    return "Contact Added";
}

// Encontrar un contacto especifico dado un id
contactService.FindOneContact = (id) => {
    let contact_id = id;
    let contact = DB.filter( contact => contact.id == contact_id); 
    return contact;
}

// Encontrar elementos de la base de datos dada una frase y devolver las coincidencias
contactService.findPhraseMatches = (phrase) => {
    let matches = DB.filter(contact => contact.name.toLowerCase().match(phrase.toLocaleLowerCase()));
    return sortDB.sort(matches);
}

/**
 *  Eliminar un elemento de la base de datos
 *  variable contact es un array,
 *  Se busca si existe el contacto en la base de datos
 *  se valida el tamaño de contact, si tiene tamaño significa que si existe en la bd
 *  se elimina el elemento de la bd
 *  se devuelveun codigo numerico que servira para devolver el status http
 * */ 
contactService.deleteContact = (id) => {
    let contact_id = id;
    let contact = contactService.FindOneContact(id);
    
    if(contact.length){
        DB.splice(DB.findIndex(contact => contact.id === contact_id), 1);
        return 204;
    }

    return 404;
    
}


module.exports = contactService;