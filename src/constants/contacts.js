import path from 'node:path';

const projectRoot = process.cwd();

const contactsDbPath = path.join(projectRoot, 'src', 'db', 'db.json');

export const PATH_DB = contactsDbPath;
