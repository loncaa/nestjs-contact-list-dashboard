export function createNumber(type, number) {
  return { type, number };
}

function generateRandomAvatar(name) {
  return `https://eu.ui-avatars.com/api/?background=78C9CE&name=${name}`;
}

export function createContactProfilePayload(
  { name,
    profilePicture,
    isFavorite,
    email,
    numbers }
) {
  return {
    name,
    profilePicture: profilePicture ? profilePicture : generateRandomAvatar(name),
    email,
    isFavorite,
    numbers,
  };
}

export function createContactProfile(
  name,
  profilePicture,
  isFavorite,
  email,
  numbers
) {
  return {
    id: Math.random(),
    name,
    profilePicture: profilePicture,
    email,
    isFavorite,
    numbers,
  };
}

export const DEFAULT_CONTACT = createContactProfile(
  "John Doe",
  generateRandomAvatar(),
  true,
  "john.doe@gmail.doe",
  [createNumber("WORK", "+385445566")]
);
