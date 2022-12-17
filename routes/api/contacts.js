const express = require("express");

const contacts = require("../../models/contacts");

const router = express.Router();

const {
  addContactValidatin,
  updateContactValidation,
} = require("../../middlewares/validationMiddleware");

router.get("/", async (req, res, next) => {
  try {
    const allContacts = await contacts.listContacts();
    res.status(200).json(allContacts);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contactById = await contacts.getById(contactId);
    if (!contactById) {
      res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(contactById);
  } catch (error) {
    next(error);
  }
});

router.post("/", addContactValidatin, async (req, res, next) => {
  try {
    const newContact = await contacts.addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const removeContactById = await contacts.removeContact(contactId);

    if (!removeContactById) {
      res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", updateContactValidation, async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const updateContactById = await contacts.updateContact(contactId, req.body);

    if (!updateContactById) {
      res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(updateContactById);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
