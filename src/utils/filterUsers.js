export const filterUsersByRole = (users, role) => {
  if (!role) return users;
  return users.filter(user => user.role === role);
};

export const ROLES = ['Admin', 'Customer', 'Vendor'];
