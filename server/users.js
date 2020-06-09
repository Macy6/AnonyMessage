const users = [];

const addUser = ({id, name, room }) => {
// JavaScript Mastery = javascriptmastery

name = name.trim().toLowerCase();   // remove whitespace and turn into lower case
room = room.trim().toLowerCase();

const existingUser = users.find((user) => user.room === room && user.name === name);   // avoid user registration with the same name and room.

if (existingUser) {
    return { error: 'Username is taken' };
}

const user = { id, name, room };

users.push(user);

return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);


const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };