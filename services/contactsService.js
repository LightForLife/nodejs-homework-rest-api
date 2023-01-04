const { Contact } = require("../models/contacts");

const listContacts = async (owner, query) => {
  const { page = 1, limit = 5 } = query;
  const skip = (page - 1) * limit;

  const allContacts = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");
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
  const updateContact = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return updateContact;
};

const updateFavorite = async (contactId, body) => {
  const updateContact = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return updateContact;
};

module.exports = {
  listContacts,
  getById,
  removeContact,
  addContact,
  updateContact,
  updateFavorite,
};
