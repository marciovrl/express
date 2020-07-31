const users = require('../../data/users.json');

module.exports = () => {
  const findAll = async () => users;

  const find = async (filter = {}) => {
    const user = users.filter((item) => item.id === Number(filter.id));

    return user;
  };

  const create = async (user) => {
    if (!user.user.name) return { error: 'Name is required' };
    if (!user.user.mail) return { error: 'Mail is required' };

    const id = users.length + 1;
    const newUser = {
      id,
      ...user.user,
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
