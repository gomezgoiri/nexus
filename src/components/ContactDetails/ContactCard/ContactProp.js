import PropTypes from 'prop-types';

const NameProp = PropTypes.shape({
  title: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
});

const CoordinatesProp = PropTypes.shape({
  latitude: PropTypes.string,
  longitude: PropTypes.string,
});

const TimezoneProp = PropTypes.shape({
  offset: PropTypes.string,
  description: PropTypes.string,
});

const LocationProp = PropTypes.shape({
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postcode: PropTypes.number,
  coordinates: CoordinatesProp,
  timezone: TimezoneProp,
});

const LoginProp = PropTypes.shape({
  uuid: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  salt: PropTypes.string,
  md5: PropTypes.string,
  sha1: PropTypes.string,
  sha256: PropTypes.string,
});

const DobProp = PropTypes.shape({
  date: PropTypes.string,
  age: PropTypes.number,
});

const PictureProp = PropTypes.shape({
  large: PropTypes.string,
  medium: PropTypes.string,
  thumbnail: PropTypes.string,
});

const ContactProp = {
  gender: PropTypes.string,
  name: NameProp,
  location: LocationProp,
  email: PropTypes.string,
  login: LoginProp,
  dob: DobProp,
  registered: DobProp,
  phone: PropTypes.string,
  cell: PropTypes.string,
  id: PropTypes.string,
  picture: PictureProp,
  nat: PropTypes.string,
};

export {
  ContactProp,
  NameProp,
  LocationProp,
  CoordinatesProp,
  TimezoneProp,
  LoginProp,
  DobProp,
  PictureProp,
};
