const { Contact } = require("../schemas/contacts");

const listContacts = async () => {
  const allContacts = await Contact.find({});
  return allContacts;
};

const getById = async (contactId) => {
  const contactById = await Contact.findById(contactId);
  return contactById;
};

const removeContact = async (contactId) => {
  const removeContactById = await Contact.findByIdAndRemove(contactId);
  return removeContactById;
};

const addContact = async (body) => {
  const newContact = await Contact.create(body);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const updateContact = await Contact.findByIdAndUpdate(contactId, body);
  return updateContact;
};

module.exports = {
  listContacts,
  getById,
  removeContact,
  addContact,
  updateContact,
};
