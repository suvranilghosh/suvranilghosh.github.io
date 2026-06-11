import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaGithub,
  FaReact,
  FaDocker,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGo,
  SiMysql,
  SiStripe,
  SiDjango,
  SiUnity,
  SiGooglecloud,
  SiGithubactions,
  SiExpo,
  SiDotnet,
  SiClerk,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import type React from "react";

const tagColors: Record<string, string> = {
  "Next.js": "#ffffff",
  React: "#61DAFB",
  "React Native": "#61DAFB",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  Go: "#00ADD8",
  Python: "#3776AB",
  "Node.js": "#339933",
  Docker: "#2496ED",
  AWS: "#FF9900",
  Azure: "#0089D6",
  GCP: "#4285F4",
  Unity: "#cccccc",
  MySQL: "#4479A1",
  Stripe: "#635BFF",
  Django: "#092E20",
  HTML: "#E34F26",
  "GitHub Actions": "#2088FF",
  Expo: "#000000",
  "C#": "#512BD4",
  Clerk: "#6C47FF",
};

const tagIcons: Record<string, React.ElementType> = {
  "Next.js": SiNextdotjs,
  React: FaReact,
  "React Native": FaReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  Go: SiGo,
  Python: FaPython,
  "Node.js": FaNodeJs,
  Docker: FaDocker,
  AWS: FaAws,
  Azure: VscAzure,
  GCP: SiGooglecloud,
  Unity: SiUnity,
  MySQL: SiMysql,
  Stripe: SiStripe,
  Django: SiDjango,
  HTML: FaHtml5,
  "GitHub Actions": SiGithubactions,
  Expo: SiExpo,
  "C#": SiDotnet,
  Clerk: SiClerk,
};

type WorkItem = {
  id: number;
  company: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
};

const professionalWork: WorkItem[] = [
  {
    id: 1,
    company: "Glimpse",
    title: "Client Analytics Dashboard ",
    description:
      "Full self-serve platform built from scratch for dispute resolution analytics. Core features: real-time metrics and revenue visualization, bulk document download handling large datasets, custom role-based access control via Clerk with granular permissions, a hybrid server/client React rendering architecture for performance, an in-app PDF viewer, and demo environments for enterprise sales. Also defined API endpoints and data structures in collaboration with the backend team.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Clerk", "React"],
  },
  {
    id: 2,
    company: "swXtch.io",
    title: "Cloud Networking Dashboard",
    description:
      "Frontend of a cloud networking product integrating with a Go backend for real-time network configuration, topology management, and live metrics visualization. Designed responsive layouts and reusable UI components, then refactored legacy code into functional components and custom hooks to improve maintainability and unit test coverage.",
    tags: ["React", "JavaScript", "Go", "Semantic UI"],
  },
  {
    id: 3,
    company: "swXtch.io",
    title: "CI/CD & Infrastructure Automation",
    description:
      "Re-architected GitHub Actions pipelines using self-hosted runners, cutting execution time significantly and reducing cloud costs. Also built Go-based infrastructure automation tooling and Python microservices to support production deployments across AWS, Azure, and GCP.",
    tags: ["GitHub Actions", "Go", "Python", "AWS", "Azure", "GCP", "Docker"],
  },
];

const personalProjects: WorkItem[] = [
  {
    id: 4,
    company: "Capstone",
    title: "Train Ticket Scanner",
    description:
      "Computer vision application that detects and reads train tickets from images. Built with OpenCV to extract and validate ticket data — designed as a senior capstone project.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/Neilghosh/Train-Ticket-Scanner",
  },
  {
    id: 5,
    company: "Mobile",
    title: "TurboYums",
    description:
      "Cross-platform restaurant automation app for Android and iOS. Features a React Native (Expo) frontend, Node.js REST API backend, MySQL database via Docker, Stripe payment processing, and Google Translate for multi-language support.",
    tags: ["React Native", "Expo", "Node.js", "MySQL", "Stripe", "Docker"],
    github: "https://github.com/TurboYums/TurboYums",
  },
  {
    id: 6,
    company: "Game Dev",
    title: "The Legend of Burdea",
    description:
      "VR game built in Unity with C#. Includes a full project structure with assets, scene configuration, and a playable Windows build.",
    tags: ["Unity", "C#", "VR"],
    github: "https://github.com/Neilghosh/The-Legend-of-Burdea",
  },
  {
    id: 7,
    company: "Web",
    title: "Crypto Search",
    description:
      "Minimalist cryptocurrency screening website built with Django. Lets users search and filter crypto assets, with a Python backend and SQLite database.",
    tags: ["Python", "Django", "HTML", "SQLite"],
    github: "https://github.com/Neilghosh/Crypto-Search",
  },
  {
    id: 8,
    company: "Algorithms",
    title: "Shortest Route Finder — Drone Delivery",
    description:
      "Python solution to the Travelling Salesman Problem for optimizing single-drone delivery routes. Takes a coordinate list and computes the shortest Hamiltonian cycle. Academic project with a companion DSA report. Co-authored with Aditi Satish.",
    tags: ["Python", "TSP", "Algorithms"],
    github:
      "https://github.com/Neilghosh/Shortest-Route-Finder-for-Single-Drone-Delivery",
  },
];

function ProjectCard({ item }: { item: WorkItem }) {
  return (
    <Card className="group overflow-hidden border-border bg-card card-hover h-full flex flex-col">
      <CardContent className="p-6 space-y-4 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary" className="w-fit">
            {item.company}
          </Badge>
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              <FaGithub size={16} />
            </a>
          )}
        </div>

        <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-snug">
          {item.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed text-sm flex-1">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => {
            const Icon = tagIcons[tag];
            return (
              <Badge key={tag} variant="outline" className="text-xs gap-1.5">
                {Icon && <Icon size={11} style={{ color: tagColors[tag] }} />}
                {tag}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16 animate-fade-in">
        <div>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">
              Work Highlights
            </h2>
            <p className="text-muted-foreground text-lg">
              Selected projects from Glimpse and swXtch.io.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <ProjectCard
                key={professionalWork[0].id}
                item={professionalWork[0]}
              />
            </div>
            {professionalWork.slice(1).map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">
              Personal Projects
            </h2>
            <p className="text-muted-foreground">
              Side projects and academic work.
            </p>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalProjects.slice(0, 2).map((item) => (
                <ProjectCard key={item.id} item={item} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalProjects.slice(2).map((item) => (
                <ProjectCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
