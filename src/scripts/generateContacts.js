import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(
      `Додано ${number} контактів. Загалом тепер ${updatedContacts.length}.`,
    );
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

generateContacts(5);
