export const getRandomEmail = (): string => {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var email = '';
    for (var i = 0; i < 8; i++) {
        email += chars[Math.floor(Math.random() * chars.length)];
    };

    return `${email}@email.com`;
};

export interface User {
    "gender": string
    "firstName": string
    "lastName": string
    "password": string
    "address": string
    "city": string
    "state": string
    "zip": string
    "mobile": string
};

export const readCsv = (file: string): User[] => {
    const csv = require('csv-parser');
    const fs = require('fs');
    const results: User[] = [];
    const path = `${process.cwd()}/${file}`;

    if (!fs.existsSync(path)) throw Error(`File not found: ${path}`);

    fs.createReadStream(path)
        .pipe(csv())
        .on('data', (data: User) => results.push(data))
        .on('end', () => {
            console.log(results);
        });
    return results;
};
