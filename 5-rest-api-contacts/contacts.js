const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const oneContact = contacts.find((c) => (c.id = contactId));
  if (!oneContact) {
    return null;
  }
  return oneContact;
}

async function updateContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const i = contacts.findIndex((c) => c.id === contactId);
  if (i === -1) {
    return null;
  }
  const [removedContact] = contacts.splice(i, 1);
  await updateContacts(contacts);
  return removedContact;
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

module.exports = { listContacts, getContactById, removeContact, addContact };
