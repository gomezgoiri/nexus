import { getFilteredContactsByInitialLetter } from 'Components/AddressBook/utils';

const getContact = (first, last) => ({
  name: { first, last },
});

const sampleContacts = [
  getContact('aaron', 'somebody'),
  getContact('aitor', 'me'),
  getContact('first', 'last'),
  getContact('first', 'last2'),
  getContact('first', 'last3'),
  getContact('zoo', 'last'),
];

describe('getFilteredContactsByInitialLetter', () => {
  it('returns empty object for an empty array', () => {
    expect(getFilteredContactsByInitialLetter([])).toEqual({});
  });

  it('returns empty object for an unmatching string', () => {
    expect(
      getFilteredContactsByInitialLetter([getContact('first', 'name')], 'ff'),
    ).toEqual({});
  });

  it('returns object with all objects on empty search', () => {
    const allOrdered = getFilteredContactsByInitialLetter(sampleContacts);
    expect(Object.keys(allOrdered).length).toBe(3);
    expect(allOrdered.a).toEqual([
      getContact('aaron', 'somebody'),
      getContact('aitor', 'me'),
    ]);
    expect(allOrdered.f).toEqual([
      getContact('first', 'last'),
      getContact('first', 'last2'),
      getContact('first', 'last3'),
    ]);
    expect(allOrdered.z).toEqual([getContact('zoo', 'last')]);
  });

  it('returns object with filtered objects ordered by initial letter', () => {
    // First filtering test
    const filteredWithLast = getFilteredContactsByInitialLetter(
      sampleContacts,
      'last',
    );
    expect(Object.keys(filteredWithLast).length).toBe(2);
    expect(filteredWithLast.f).toEqual([
      getContact('first', 'last'),
      getContact('first', 'last2'),
      getContact('first', 'last3'),
    ]);
    expect(filteredWithLast.z).toEqual([getContact('zoo', 'last')]);

    // Second filtering test
    const filteredWithAit = getFilteredContactsByInitialLetter(
      sampleContacts,
      'AiT',
    );
    expect(Object.keys(filteredWithAit).length).toBe(1);
    expect(filteredWithAit.a).toEqual([getContact('aitor', 'me')]);
  });
});
