export function createNumber(type, number) {
  return { type, number };
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
    profilePicture,
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
    name,
    profilePicture,
    email,
    isFavorite,
    numbers,
  };
}

export const DEFAULT_CONTACT = createContactProfile(
  "John Doe",
  "",
  true,
  "john.doe@gmail.doe",
  [createNumber("WORK", "+385445566")]
);
