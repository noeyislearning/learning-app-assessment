import mongoose from "mongoose";

// Importing Model
import { ContactSchema } from "../models/CRM.js";

const Contact = mongoose.model("Contact", ContactSchema);

export const addContact = async (req, res) => {

  let newContact = new Contact(req.body);

  try {
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    res.send(err);
  }

};

export const getContacts = async (req, res) => {

  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (err) {
    res.send(err);
  }

};

export const getContactWithID = async (req, res) => {

  try {
    const contact = await Contact.findById(req.params.contactID);
    res.json(contact);
  } catch (err) {
    res.send(err);
  }

};

export const updateContact = async (req, res) => {

  try {
    const contact = await Contact.findOneAndUpdate(
      {_id: req.params.contactID},
      req.body,
      {new: true, useFindAndModify: false}
    );
    res.json(contact);
  } catch (err) {
    res.send(err);
  }

};

export const deleteContact = async (req, res) => {
  
  try {
    await Contact.deleteOne(
      {_id: req.params.contactID},
    );
    res.json(
      {message: "Successfully deleted contact."}
    );
  } catch (err) {
    res.send(err);
  }

};