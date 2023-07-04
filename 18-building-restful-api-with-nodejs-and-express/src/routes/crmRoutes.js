import { addContact, getContacts, getContactWithID, updateContact, deleteContact } from "../controllers/crmController.js";

const routes = (app) => {
  app
    .route("/contacts")

    // Get all contacts
    .get((req, res, next) => {
      // Middleware
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next();
    }, getContacts)

  app
    .route("/contact")
    
    // Add new contact
    .post(addContact)

  app
    .route("/contact/:contactID")
    /**
     * Controllers
     */
    // Get specific contact
    .get(getContactWithID)
    
    // Update specific contact
    .put(updateContact)

    // Delete specific contact
    .delete(deleteContact)
}

export default routes;