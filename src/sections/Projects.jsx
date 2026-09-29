// import { ArrowUpDown, ArrowUpRight, GitBranch } from "lucide-react";
// import AnimatedBorderButton from "../components/AnimatedBorderButton";

// const projects = [
//   {
//     title: "Food Order Web Application",
//     description: "A web for ordering and recive the food",
//     image: "./projects/project1.png",
//     tags: ["React", "TypeScript", "NodeJS"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "E-Commerce Platform",
//     description: "A web for ordering and recive the food",
//     image: "./projects/project2.png",
//     tags: ["Next.js", "Stripe", "PostgresSQL", "Tailwind"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "AI Writing Assistant",
//     description: "A web for ordering and recive the food",
//     image: "./projects/project3.jpg",
//     tags: ["React", "OpenAI", "Python", "FastAPI"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "Project Management Tool",
//     description: "A web for ordering and recive the food",
//     image: "./projects/project4.png",
//     tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
//     link: "#",
//     github: "#",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-32 relative overflow-hidden">
//       {/* Bg glows */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded"></div>
//       <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded"></div>
//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mx-auto max-w-3xl mb-16">
//           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
//             Featured Work
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//             Projects that
//             <span className="font-serift italic font-normal text-white">
//               {" "}
//               make in impact.
//             </span>
//           </h2>
//           <p className="text-muted-foreground animate-fade-in animation-delay-200">
//             A selection of my recent work, from complex web applications to
//             innovation tools that solve real-world problems.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
//               style={{ animationDelay: `${(idx + 1) * 100}ms` }}
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden aspect-video">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div
//                   className="absolute inset-0
//                     bg-gradient-to-t from-card via-card/50
//                     to-transparent opacity-60"
//                 />
//                 {/* Overlay Links */}
//                 <div className="absolute inset-0 flex items-center justify gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <a
//                     href={project.link}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <ArrowUpDown className="w-5 h-5" />
//                   </a>
//                   <a
//                     href={project.github}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <GitBranch className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 space-y-4">
//                 <div className="flex items-start justify-betweeen">
//                   <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
//                     {project.title}
//                   </h3>
//                   <ArrowUpRight
//                     className="w-5 h-5 
//                   text-muted-foreground group-hover:text-primary
//                   group-hover:translate-x-1
//                   group-hover:-translate-y-1 transition-all"
//                   />
//                 </div>
//                 <p className="text-muted-foreground text-sm">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIdx) => (
//                     <span
//                       key={tagIdx}
//                       className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All CTA */}
//         <div className="text-center mt-12 animate-fade-in animation-delay-500">
//             <AnimatedBorderButton>
//                 View All Projects
//                 <ArrowUpRight className="w-5 h-5" />
//             </AnimatedBorderButton>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;





// import { ExternalLink } from "lucide-react";

// import { useLanguage } from "../context/LanguageContext";

// const projects = [
//   {
//     id: "foodOrder",
//     image: "/project1.png",
//     tags: ["React", "TypeScript", "NodeJS"],
//     link: "#",
//     github: "#",
//   },
//   {
//     id: "ecommerce",
//     image: "/project2.png",
//     tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
//     link: "#",
//     github: "#",
//   },
//   {
//     id: "aiWriting",
//     image: "/project3.png",
//     tags: ["React", "OpenAI", "Python", "FastAPI"],
//     link: "#",
//     github: "#",
//   },
//   {
//     id: "projectManagement",
//     image: "/project4.png",
//     tags: ["Next.js", "Socket.io", "MongoDB"],
//     link: "#",
//     github: "#",
//   },
// ];

// const Projects = () => {
//   const { t, language } = useLanguage();

//   return (
//     <section
//       id="projects"
//       className="py-24 bg-background text-foreground"
//     >
//       <div className="container mx-auto px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <span className="text-primary font-medium tracking-wider uppercase text-sm">
//             {t("projects.subtitle")}
//           </span>

//           <h2 className="mt-3 text-4xl md:text-5xl font-bold">
//             {t("projects.title")}
//           </h2>

//           <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />

//           <p className="mt-6 text-foreground/60 leading-7">
//             {t("projects.description")}
//           </p>
//         </div>

//         {/* Projects */}
//         <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="group overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden aspect-video">
//                 <img
//                   src={project.image}
//                   alt={t(
//                     `projects.${project.id}.title`
//                   )}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">

//                   {/* Live Demo */}
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
//                   >
//                     <ExternalLink size={18} />

//                     <span>
//                       {t("projects.liveDemo")}
//                     </span>
//                   </a>

//                   {/* GitHub */}
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
//                     aria-label="GitHub"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">

//                 {/* Tags */}
//                 <div
//                   className={`flex flex-wrap gap-2 mb-4 ${language === "fa"
//                     ? "justify-end"
//                     : "justify-start"
//                     }`}
//                 >
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl md:text-2xl font-semibold mb-3">
//                   {t(`projects.${project.id}.title`)}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-foreground/60 leading-7">
//                   {t(
//                     `projects.${project.id}.description`
//                   )}
//                 </p>

//                 {/* Bottom Links */}
//                 <div
//                   className={`flex items-center gap-5 mt-6 ${language === "fa"
//                     ? "justify-end"
//                     : "justify-start"
//                     }`}
//                 >
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
//                   >
//                     <ExternalLink size={16} />

//                     {t("projects.viewProject")}
//                   </a>

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
//                     </svg>

//                     {t("projects.viewCode")}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;



import { ExternalLink } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

import project1 from "../../public/projects/project1.png";
import project2 from "../../public/projects/project2.png";
import project3 from "../../public/projects/project3.jpg";
import project4 from "../../public/projects/project4.png";


const projects = [
  {
    id: "foodOrder",
    image: project1,
    tags: ["React", "TypeScript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    id: "ecommerce",
    image: project2,
    tags: [
      "Next.js",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    link: "#",
    github: "#",
  },
  {
    id: "aiWriting",
    image: project3,
    tags: [
      "React",
      "OpenAI",
      "Python",
      "FastAPI",
    ],
    link: "#",
    github: "#",
  },
  {
    id: "projectManagement",
    image: project4,
    tags: [
      "Next.js",
      "Socket.io",
      "MongoDB",
    ],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="projects"
      className="py-24 bg-background text-foreground"
    >
      <div className="container mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            {t("projects.subtitle")}
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            {t("projects.title")}
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />

          <p className="mt-6 text-foreground/60 leading-7">
            {t("projects.description")}
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={t(
                    `projects.${project.id}.title`
                  )}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">

                  {/* Live Demo */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={18} />

                    <span>
                      {t("projects.liveDemo")}
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Tags */}
                <div
                  className={`flex flex-wrap gap-2 mb-4 ${
                    language === "fa"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {t(
                    `projects.${project.id}.title`
                  )}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 leading-7">
                  {t(
                    `projects.${project.id}.description`
                  )}
                </p>

                {/* Bottom Links */}
                <div
                  className={`flex items-center gap-5 mt-6 ${
                    language === "fa"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={16} />

                    {t("projects.viewProject")}
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
                    </svg>

                    {t("projects.viewCode")}
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;