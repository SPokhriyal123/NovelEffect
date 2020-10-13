const novels = [
  {
    id: 1,
    name: "Frankenstein by Mary Shelley (1818)",
    slug: "web-components-shadow-dom",
    authorId: 1,
    description:
      "Mary Shelley’s first novel has been hailed as a masterpiece of horror and the macabre.",
  },
  {
    "id": 2,
    "slug": "sherlock-homes",
    "name": "Sherlock Homes",
    "authorId": 2,
    "description": "Sherlock Holmes is a fictional private detective created by British author Sir Arthur Conan Doyle.",
    "createdAt": 1602489993956
  },
  {
    "id": 3,
    "slug": "pride-and-prejudice",
    "name": "Pride and Prejudice",
    "authorId": 2,
    "description": "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. ",
    "createdAt": 1602490106844
  },
  {
    "id": 4,
    "slug": "harry-potter",
    "name": "Harry Potter",
    "authorId": 1,
    "description": "Harry Potter is a film series based on the eponymous novels by author J. K. Rowling. ",
    "createdAt": 1602490153248
  }
];

const authors = [
  { id: 1, name: "J. K. Rowling" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Arthur Conan Doyle" },
  { id: 4, name: "Mary Shelley" },
  {id : 5, name: "John Green"},
];

const newCourse = {
  id: null,
  name: "",
  authorId: null,
  description: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  novels,
  authors,
};
