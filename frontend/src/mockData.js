import { createNumber, createContactProfile } from "./service/contactService";

const c1 = createContactProfile(
  "Addie",
  "",
  false,
  "addie.hernandez@gmail.com",
  [
    createNumber("HOME", "+38521546456"),
    createNumber("WORK", "+38521147258"),
    createNumber("CELL", "+385986547541"),
    createNumber("HUSBAND", "+385991456214"),
  ]
);
const c2 = createContactProfile(
  "Kate",
  null,
  true,
  "addie.hernandez@gmail.com",
  [
    createNumber("HOME", "+38521546456"),
    createNumber("WORK", "+38521147258"),
    createNumber("CELL", "+385986547541"),
    createNumber("HUSBAND", "+385991456214"),
  ]
);
const c3 = createContactProfile(
  "Matt",
  "",
  false,
  "addie.hernandez@gmail.com",
  [createNumber("HOME", "+38521546456")]
);
const c4 = createContactProfile(
  "Dani",
  null,
  false,
  "addie.hernandez@gmail.com",
  [
    createNumber("HOME", "+38521546456"),
    createNumber("WORK", "+38521147258"),
    createNumber("CELL", "+385986547541"),
    createNumber("HUSBAND", "+385991456214"),
  ]
);
const c5 = createContactProfile(
  "Tony",
  null,
  false,
  "addie.hernandez@gmail.com",
  [
    createNumber("HOME", "+38521546456"),
    createNumber("WORK", "+38521147258"),
    createNumber("CELL", "+385986547541"),
    createNumber("HUSBAND", "+385991456214"),
  ]
);
const c6 = createContactProfile(
  "Adle",
  "",
  false,
  "addie.hernandez@gmail.com",
  [createNumber("HOME", "+38521546456"), createNumber("WORK", "+38521147258")]
);
const c7 = createContactProfile("Kit", "", false, "addie.hernandez@gmail.com", [
  createNumber("HOME", "+38521546456"),
  createNumber("WORK", "+38521147258"),
  createNumber("CELL", "+385986547541"),
]);

let contacts = {};
contacts[c1.id] = c1;
contacts[c2.id] = c2;
contacts[c3.id] = c3;
contacts[c4.id] = c4;
contacts[c5.id] = c5;
contacts[c6.id] = c6;
contacts[c7.id] = c7;

let favorites = {};
favorites[c2.id] = c2;

export { contacts, favorites };
