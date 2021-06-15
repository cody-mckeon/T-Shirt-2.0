import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Cody',
            email: 'codymckeon@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'amanda',
            email: 'amanda@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },

    ]
}

export default data;