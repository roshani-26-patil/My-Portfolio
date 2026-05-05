export default function Skills() {
  const skills = ["UI/UX","HTML","CSS","JavaScript","C","Java"];

  return (
    <section id="skills" className="px-6 py-20">
      <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">Skills</h2>

      <div className="skills-pills">
        {skills.map((s) => (
          <span key={s} className="skill-pill">{s}</span>
        ))}
      </div>
    </section>
  );
}