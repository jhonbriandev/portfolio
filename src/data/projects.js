export const projectsData = [
  {
    id: "triage-ai",
    title: "Sistema de Triage de Tickets con IA",
    description:
      "Plataforma de gestión de tickets de soporte con clasificación automática mediante IA. Roles diferenciados para clientes, agentes y administradores, con sugerencias de categorización generadas por un modelo externo.",
    stack: ["Django", "DRF", "React", "PostgreSQL", "JWT"],
    image: "/images/triage-ai.png",
    repoUrl: "https://github.com/jhonbriandev/triage-ai",
    demoUrl: "https://triage-ai-beta.vercel.app/",
  },
  {
    id: "react-blog",
    title: "Blog con React + API REST",
    description:
      "Frontend en React que consume una API REST propia construida en Django, con autenticación JWT, gestión de publicaciones propias y manejo de estados de carga, error y éxito en toda la interfaz.",
    stack: ["React", "JWT", "Fetch API", "React Hook Form"],
    image: "/images/api.png",
    repoUrl: "https://github.com/jhonbriandev/react-blog",
    demoUrl: "",
  },
  {
    id: "django-blog",
    title: "Blog con Django",
    description:
      "Aplicación de blog completa con autenticación, permisos por rol, panel de moderación, consultas optimizadas y una suite de más de 40 tests automatizados con factories.",
    stack: ["Django", "DRF", "PostgreSQL", "pytest"],
    image: "/images/blog-django.png",
    repoUrl: "https://github.com/jhonbriandev/my-blog",
    demoUrl: "https://my-blog-a48b.onrender.com/",
  },
  {
    id: "pharma-pos",
    title: "Punto de Venta de Farmacia",
    description:
      "Este es el primer aplicativo cuya arquitectura y reglas de negocio fueron diseñadas por mí y cuyo código fue desarrollado íntegramente con OpenCode. Implementa funcionalidades de autenticación, gestión de roles y permisos, punto de venta, inventario y dashboard, y cuenta con más de 80 pruebas automatizadas basadas en factories.",
    stack: ["Django", "DRF", "PostgreSQL", "Javascript"],
    image: "/images/pharma-pos.png",
    repoUrl: "https://github.com/jhonbriandev/pharmacy-pos",
    demoUrl: "https://pharmacy-pos-gamma.vercel.app/",
  },
];
