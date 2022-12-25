const contacts = require("../services/contactsService");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
  const allContacts = await contacts.listContacts();
  res.status(200).json(allContacts);
};

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contactById = await contacts.getById(contactId);

  if (!contactById) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(contactById);
};

const add = async (req, res, next) => {
  const newContact = await contacts.addContact(req.body);
  res.status(201).json(newContact);
};

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const updateContactById = await contacts.updateContact(contactId, req.body);

  if (!updateContactById) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(updateContactById);
};

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  const removeContactById = await contacts.removeContact(contactId);

  if (!removeContactById) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ message: "contact deleted" });
};

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const updateContactById = await contacts.updateFavorite(contactId, req.body);

  if (!updateContactById) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(updateContactById);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
