const getFilteredContactsByInitialLetter = (contacts, searchText = '') => {
  const lowerSearch = searchText.toLowerCase();
  const filteredContacts = contacts.reduce((ret, item) => {
    // filter
    if (`${item.name.first} ${item.name.last}`.includes(lowerSearch)) {
      const letter = item.name.first.substring(0, 1).toLowerCase();
      if (!ret[letter]) {
        /* eslint-disable no-param-reassign */
        ret[letter] = [];
      }
      ret[letter].push(item);
    }
    return ret;
  }, {});
  return filteredContacts;
};

// eslint-disable-next-line import/prefer-default-export
export { getFilteredContactsByInitialLetter };
