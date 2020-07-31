const users = require('../../data/users.json');

module.exports = () => {
  const findAll = async () => users;

  const find = async (filter = {}) => {
    const user = users.filter((item) => item.id === Number(filter.id));

    return user;
  };

  const create = async (filter = {}) => {
    if (!filter.params.name) return { error: 'Name is required' };
    if (!filter.params.mail) return { error: 'Mail is required' };

    const newUser = {
      id: Number(users.length + 1),
      name: filter.params.name,
      mail: filter.params.mail,
      phone: filter.params.phone,
    };

    users.push(newUser);

    return newUser;
  };

  const update = async (filter = {}) => {
    const [user] = users.filter((item) => item.id === Number(filter.id));

    if (user === undefined) return { error: 'User does not exist' };

    if (filter.params.name) user.name = filter.params.name;
    if (filter.params.mail) user.mail = filter.params.mail;
    if (filter.params.phone) user.phone = filter.params.phone;

    return user;
  };

  const remove = async (filter = {}) => {
    const [user] = users.filter((item) => item.id === Number(filter.id));

    if (user === undefined) return { error: 'User does not exist' };

    users.slice(users.indexOf(user), 1);

    return { message: 'User deleted successfully' };
  };

  return {
    findAll, find, create, update, remove,
  };
};
