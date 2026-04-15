import Image from "next/image";

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

interface MiniProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  bullets: string[];
  link?: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Interior Design Image Generation",
    description:
      "Architected a Generative AI system using Stable Diffusion to transform 2D floor plans into 3D interior visualizations, increasing design iteration speed by 50%. Trained and fine-tuned a custom image recognition model for floor plan understanding, deployed as a containerized inference pipeline on Azure supporting concurrent user requests with low latency.",
    image: "/projects/project-1-new.png",
    tags: ["Python", "Stable Diffusion", "React.js", "Docker", "Azure", "Fine-tuning", "Computer Vision"],
  },
  {
    id: 2,
    title: "ASR-Powered Meeting Assistant",
    description:
      "Built a modular RAG pipeline capable of transcribing real-time discussions and answering context-aware queries with 90%+ accuracy. Implemented HR-specific retrieval use cases, allowing employees to instantly access benefit information from unstructured meeting audio. Reduced manual note-taking efforts by automating summary generation.",
    image: "/projects/project-2-new.png",
    tags: ["Python", "ASR", "LLM", "RAG", "LangChain", "NLP"],
  },
  {
    id: 3,
    title: "AI-Powered Code Generation & Debugging Agent",
    description:
      "Agentic AI tool that autonomously generates code snippets, detects bugs, and optimizes performance. Built as a multi-agent system where different agents specialize in writing, reviewing, and testing code, reducing overall development and debugging time significantly.",
    image: "/projects/project-3-new.png",
    tags: ["Python", "LLM", "Agentic AI", "Docker", "LangGraph"],
  },
];

const miniProjects: MiniProject[] = [
  {
    id: 4,
    title: "Interactive Data Analysis Dashboard",
    description: "High-performance Streamlit dashboard for comparative dataset analysis, enabling users to uncover hidden trends 3x faster than manual methods.",
    tags: ["Streamlit", "Python", "Pandas", "Data Visualization"],
    bullets: [
      "Designed a high-performance Streamlit dashboard for comparative dataset analysis.",
      "Enabled users to uncover hidden trends 3x faster than manual spreadsheet methods.",
    ],
  },
  {
    id: 5,
    title: "Conversational AI Personal Assistant",
    description: "Hybrid intent recognition system using Decision Trees and Regex, achieving high-accuracy command interpretation for hands-free operations.",
    tags: ["Python", "NLTK", "Scikit-learn", "NLP", "Decision Trees"],
    bullets: [
      "Implemented a hybrid intent recognition system using Decision Trees and Regex.",
      "Achieved high-accuracy command interpretation for hands-free operations.",
    ],
  },
  {
    id: 6,
    title: "HMP53 — Customised Management System",
    description: "Full-featured web platform for managing events, members, and finances — with automated email & SMS notifications and PDF receipt generation.",
    tags: ["PHP", "MySQL", "Event Management", "SMS/Email Automation", "Accounting"],
    bullets: [
      "Manages events, member records, and basic accounting.",
      "Automated email and SMS notifications for announcements and reminders.",
      "Generates downloadable PDF receipts for payments.",
    ],
    link: "https://hmp53.in",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">Projects</h2>
        <p className="text-white/60 text-center mb-16">End-to-end AI systems, shipped.</p>

        {/* Featured Projects */}
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? "lg:grid-flow-dense" : ""
                  }`}
              >
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">Featured Project</p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{project.title}</h3>

                  {/* Description Card */}
                  <div className="relative z-10 mb-5">
                    <div
                      className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                        }`}
                    >
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Other Projects Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {miniProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 rounded-xl p-6 border border-purple-700/30 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-900/30 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h6l2 2h10M3 7v10a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1H11L9 6H4a1 1 0 00-1 1z" />
                  </svg>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                      aria-label="Visit project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{project.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-purple-300/80 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
