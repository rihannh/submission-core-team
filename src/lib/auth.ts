export const loginUser = (email: string, password: string): string | null => {
  const fakeUsers = [
    { email: 'rihan@test.com', password: '12345678' },
  ];

  const user = fakeUsers.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    return 'user';
  }
  return null;
};

export const logoutUser = () => {
  localStorage.removeItem('user');
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
