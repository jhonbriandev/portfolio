// Array de objetos y no de strings
// esto nos va a permitir hacer un .map() anidado: uno para las categorías,
// y dentro de cada categoría, otro .map() para sus items.

export const skillsData = [
  {
    category: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "pytest",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "JavaScript (ES6+)", "React Hook Form", "Fetch API"],
  },
  {
    category: "Herramientas",
    items: ["Git", "GitHub", "Vite", "Postman"],
  },
];
