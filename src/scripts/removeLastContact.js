import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      console.error('Формат контактів некоректний. Очікується масив.');
      return;
    }

    if (contacts.length === 0) {
      console.log('Список контактів порожній.');
      return;
    }

    const removedContact = contacts.pop();
    await writeContacts(contacts);

    console.log('Останній контакт успішно видалено:');
    console.log(removedContact);
  } catch (error) {
    console.error('Помилка під час видалення контакту:', error.message);
  }
};

removeLastContact();
