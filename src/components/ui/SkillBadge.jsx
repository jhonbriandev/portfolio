// la plantilla. Recibe una sola prop, name,
// y solo se encarga de mostrarla con el estilo correcto

function SkillBadge({ name }) {
  return <span className="skill-badge">{name}</span>;
}

export default SkillBadge;
