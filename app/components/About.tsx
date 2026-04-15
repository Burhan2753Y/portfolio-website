export default function About(): React.JSX.Element {
  const skillGroups = [
    {
      label: "Languages",
      skills: ["Python", "JavaScript", "C++", "Java", "PHP", "SQL"],
    },
    {
      label: "AI/ML & Generative AI",
      skills: ["LLMs", "RAG", "Agentic AI", "ASR", "Fine-tuning", "NLP", "Computer Vision"],
    },
    {
      label: "Libraries & Frameworks",
      skills: ["TensorFlow", "PyTorch", "LangChain", "Scikit-learn", "Pandas", "NumPy", "NLTK"],
    },
    {
      label: "Cloud & DevOps",
      skills: ["Docker", "Kubernetes", "AWS (S3, EC2, RDS)", "Azure VM", "CI/CD Pipelines", "Cloudflare"],
    },
    {
      label: "Web Development",
      skills: ["React.js", "React Flow", "Node.js", "Express", "Streamlit", "Socket.io"],
    },
    {
      label: "Tools",
      skills: ["Git", "GitHub", "VS Code", "n8n", "Google Apps Script"],
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            I&apos;m currently looking to join a{" "}
            <span className="text-purple-400">cross-functional team</span> that values
            building impactful AI-driven products and scalable full-stack solutions.
          </p>
        </div>

        {/* Professional Summary */}
        <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 rounded-2xl p-8 border border-purple-700/30 mb-16">
          <p className="text-white/80 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Results-oriented <span className="text-purple-400 font-semibold">AI/ML Engineer & Full Stack AI Developer</span> with
            hands-on experience in architecting and deploying end-to-end Generative AI solutions. Proficient in Python, LLMs,
            RAG pipelines, and Agentic AI. Trained and fine-tuned models for image recognition tasks — including floor plan to 3D
            visualization and language identification. Demonstrated success in containerizing applications for scalable cloud
            deployment on <span className="text-blue-400">AWS</span> and <span className="text-blue-400">Azure</span>,
            with frontend delivery via <span className="text-blue-400">Cloudflare</span>.
          </p>
        </div>

        {/* Skills Grid */}
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 rounded-xl p-6 border border-purple-700/30 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-900/30 transition-all"
            >
              <h4 className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">
                {group.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/5 border border-white/10 text-white/80 text-sm px-3 py-1 rounded-full hover:bg-purple-500/20 hover:border-purple-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
