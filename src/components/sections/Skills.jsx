import { skillsData } from "../../data/skills";
import SkillBadge from "../ui/SkillBadge";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Habilidades</h2>
      {/* recorre las 3 categorías
        Por cada una, devuelve un <div className="skills-group">
        que contiene el título de la categoría y sus badges. */}
      <div className="skills-groups">
        {skillsData.map((group) => (
          // usamos el nombre de la categoría como key porque es único entre los 3 grupos
          <div key={group.category} className="skills-group">
            <h3 className="skills-group-title">{group.category}</h3>

            <div className="skills-badges">
              {/* dentro de cada categoría, recorre su array de items y por cada habilidad
             renderiza un <SkillBadge></SkillBadge> */}
              {group.items.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
