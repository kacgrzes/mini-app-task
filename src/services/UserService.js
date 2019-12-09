export const fetchUsers = async () => {
  const response = await fetch("https://api.github.com/users");
  const json = await response.json();
  return json.map(user => {
    return {
      avatarUrl: user.avatarUrl,
      reposUrl: user.reposUrl,
      id: user.id,
      nickname: user.login
    };
  });
};
