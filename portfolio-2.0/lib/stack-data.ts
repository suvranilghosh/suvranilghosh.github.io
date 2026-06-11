import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiGo,
  SiUnity,
  SiDotnet,
  SiGooglecloud,
  SiAnthropic,
  SiCoderabbit,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { Terminal } from "lucide-react";
import type React from "react";

export type StackItem = {
  name: string;
  icon: React.ElementType;
  color: string;
};

export const frontendStack: StackItem[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

export const otherStack: StackItem[] = [
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "C# / .NET", icon: SiDotnet, color: "#512BD4" },
  { name: "Unity", icon: SiUnity, color: "#cccccc" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Azure", icon: VscAzure, color: "#0089D6" },
];

export const aiToolsStack: StackItem[] = [
  { name: "Claude Code", icon: SiAnthropic, color: "#D97757" },
  { name: "Cursor", icon: Terminal, color: "#7C3AED" },
  { name: "CodeRabbit", icon: SiCoderabbit, color: "#FF6B35" },
];

export const allStack: StackItem[] = [...frontendStack, ...otherStack];
