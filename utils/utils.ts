export const getRandomEmail = (): string => {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var email = '';
    for (var i = 0; i < 8; i++) {
        email += chars[Math.floor(Math.random() * chars.length)];
    }

    return `${email}@email.com`;
};