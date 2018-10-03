/**
 * @name hasAllowedRole
 * @summary checks if user role is amongst allowed roles
 * @return {boolean} whether user role is amongst allowed roles
 */
export const hasAllowedRole = (userRoles, allowedRoles) => (
  userRoles.some(role => allowedRoles.includes(role.toLowerCase()))
);