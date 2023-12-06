export const getFilteredContacts = () => {
  const savedContact = localStorage.getItem('new-contact');
  return savedContact !== null ? JSON.parse(savedContact) : [];
};
