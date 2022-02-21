export function createNumber(type, number) {
  return { type, number };
}

function generateRandomAvatar(name) {
  return `https://eu.ui-avatars.com/api/?background=random&name=${name}`;
}

export function createContactProfile(
  fullName,
  profilePicture,
  isFavorite,
  email,
  numbers
) {
  return {
    id: Math.random(),
    fullName,
    profilePicture: profilePicture
      ? profilePicture
      : generateRandomAvatar(fullName),
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
