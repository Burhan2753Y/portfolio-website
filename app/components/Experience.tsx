interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Full Stack AI ML Developer",
    company: "Wavenet Technologies Pvt Ltd",
    location: "Mumbai",
    period: "August 2025 – Present",
    type: "Full-time",
    bullets: [
      "Engineered an automated Enterprise Call AI Agent leveraging ASR and RAG to automate Tier-1 support tasks and streamline enterprise call workflows.",
      "Represented Wavenet Technologies at the Startup Grand Challenge (ASR Problem Statement) hosted at IIT Delhi by NIIPC — achieved Top 15 finish among nationwide startups.",
      "Fine-tuned Large Language Models (LLMs) on domain-specific datasets, boosting response accuracy and contextual relevance by 25% compared to base models.",
      "Trained and fine-tuned image recognition models — including floor plan to 3D visualization and language identification — enabling production-ready computer vision pipelines.",
      "Developed a responsive UI using React.js and React Flow, enabling non-technical users to visualize complex agent conversation flows and reducing configuration time by 30%.",
      "Orchestrated the deployment of ML models using Docker and Azure VM, establishing a scalable pipeline that improved inference reliability and uptime.",
      "Optimized data preprocessing pipelines using Pandas and NumPy, ensuring high-quality input features for model training and evaluation.",
    ],
    tags: ["Python", "LLMs", "RAG", "ASR", "React.js", "React Flow", "Docker", "Azure", "Fine-tuning", "Computer Vision"],
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-purple-700/40 hidden lg:block" style={{ left: "2rem" }} />

          {experiences.map((exp) => (
            <div key={exp.id} className="relative lg:pl-20 mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="hidden lg:flex absolute left-0 top-6 w-16 items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-purple-500 border-2 border-purple-300 shadow-lg shadow-purple-500/50" />
              </div>

              <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 rounded-2xl p-8 border border-purple-700/30 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/20 transition-all">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-400 font-semibold text-lg mt-1">
                      {exp.company}
                    </p>
                    <p className="text-white/50 text-sm mt-1">
                      {exp.location} · {exp.type}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm text-white/60 bg-white/5 border border-white/10 px-4 py-2 rounded-full self-start">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-white/75 text-sm leading-relaxed">
                      <span className="text-purple-400 mt-0.5 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
            Education
          </h2>
          <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 rounded-2xl p-8 border border-purple-700/30">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-purple-400 font-semibold mt-1">Mumbai University, Mumbai</p>
                <p className="text-white/60 text-sm mt-2">
                  Relevant Coursework: Artificial Intelligence, Machine Learning, Data Science,
                  Information Retrieval, Theory of Computation.
                </p>
              </div>
              <div className="shrink-0 text-right">
                <span className="text-sm text-white/60 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  2022 – 2025
                </span>
                <p className="text-purple-400 font-semibold mt-3 text-sm">SGPI: 8.9 (SEM VI)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
