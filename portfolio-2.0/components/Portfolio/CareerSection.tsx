import { Building2, GraduationCap, ExternalLink } from "lucide-react";

type Role = {
  company: string;
  location: string;
  url?: string;
  about?: string;
  title: string;
  period: string;
  bullets: string[];
  type: "work" | "education";
};

const roles: Role[] = [
  {
    company: "Glimpse",
    location: "New York, NY",
    url: "https://www.tryglimpse.com",
    about:
      "AI-native platform that automates deduction management for CPG brands, helping them dispute invalid retailer chargebacks and recover revenue with a 91% win rate.",
    title: "Frontend Engineer",
    period: "August 2025 – June 2026",
    type: "work",
    bullets: [
      "Engineered a customer-facing dashboard from the ground up using Next.js, TypeScript, Tailwind CSS, and Shadcn, enabling clients to track key metrics and visualize revenue recovered through dispute resolutions.",
      "Spearheaded 0-to-1 development, delivering a production-ready platform within 90 days and helping the company achieve its Series B target of over 60% gross margin.",
      "Led forward-deployed engineering for enterprise clients, shipping features including bulk document download across 500k+ data points and custom roles with granular auth permissions via Clerk — contributing to the acquisition of the company's largest customer to date.",
      "Architected a hybrid server/client React rendering strategy to improve performance, scalability, and user experience.",
      "Designed reusable UI components and internal data management tooling, including an in-app PDF viewer.",
      "Partnered cross-functionally with Customer Success and Sales to translate requirements into production-ready features and build demo environments.",
      "Integrated frontend workflows with backend services and contributed to API specification, defining endpoints, data structures, and application behavior.",
      "Optimized application performance, achieving approximately 10x faster load times over the previous platform.",
      "Executed high-priority feature requests and enhancements that drove a 40% increase in client retention and over 115% NRR.",
    ],
  },
  {
    company: "swXtch.io",
    location: "New York, NY",
    url: "https://www.swxtch.io",
    about:
      "Cloud networking startup that enables IP multicast in cloud and hybrid environments, letting broadcast, media, and enterprise customers migrate multicast workflows to the cloud without application changes.",
    title: "Software Engineer",
    period: "October 2021 – June 2025",
    type: "work",
    bullets: [
      "Led front-end development of swXtch.io's core React application, integrating with a Go backend to support real-time configuration, topology management, and metrics visualization across its cloud networking platform.",
      "Designed and architected responsive pages, layouts, and reusable UI components using React and Semantic UI, while refactoring legacy code into functional components and custom hooks to improve maintainability and increase unit test coverage by 22%.",
      "Re-architected GitHub Actions CI/CD pipelines using self-hosted runners, accelerating pipeline execution by 300%, reducing cloud costs by 36%, and significantly improving development-to-production efficiency.",
      "Engineered Go-based infrastructure automation and scalable Python microservices to support production deployments across AWS, Azure, and GCP, improving cross-cloud stability and accelerating customer response workflows.",
      "Partnered with Engineering and Customer Success teams to deliver solutions tailored to client cloud environments, contributing to a 15% increase in client satisfaction, while leading code reviews, architecture discussions, documentation, and junior engineer mentorship.",
    ],
  },
  {
    company: "Rutgers University",
    location: "New Brunswick, NJ",
    title: "Learning Assistant",
    period: "September 2018 – May 2020",
    type: "education",
    bullets: [
      "Collaborated with 25 students every session for 2 sessions per week to engage them in active learning and guiding them through learning creative and innovative problem-solving skills.",
      "Led initiatives for group work and provided technical guidance for Calculus 1 and 2, and Physics courses.",
    ],
  },
  {
    company: "Rutgers University",
    location: "New Brunswick, NJ",
    title: "Multidisciplinary Tutor",
    period: "September 2017 – May 2019",
    type: "education",
    bullets: [
      "Tutored on-campus for the Education Opportunity Fund Program in STEM subject areas.",
      "Assisted students in achieving 15% higher scores on average.",
    ],
  },
];

function TimelineEntry({ role, isLast }: { role: Role; isLast: boolean }) {
  const Icon = role.type === "work" ? Building2 : GraduationCap;

  return (
    <div className="relative flex gap-6">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10"
          style={{ background: "hsl(252, 84%, 52%)" }}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
        {!isLast && <div className="w-px flex-1 mt-2 bg-border/50" />}
      </div>

      {/* Content */}
      <div className={`pb-12 flex-1 ${isLast ? "" : ""}`}>
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {role.url ? (
                  <a
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    {role.company}
                    <ExternalLink
                      className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover/link:opacity-60"
                      aria-hidden
                    />
                  </a>
                ) : (
                  role.company
                )}
              </h3>
              <p className="text-xs text-muted-foreground">{role.location}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs text-muted-foreground whitespace-nowrap">
                {role.period}
              </p>
              <p className="text-sm font-medium text-primary mt-0.5">
                {role.title}
              </p>
            </div>
          </div>

          {role.about && (
            <p className="text-xs text-muted-foreground/70 italic border-l-2 border-primary/20 pl-3 leading-relaxed">
              {role.about}
            </p>
          )}

          <ul className="space-y-2">
            {role.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="text-primary/60 mt-1 shrink-0">·</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function CareerSection() {
  return (
    <section className="py-20 px-6 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">
            Career
          </h2>
          <p className="text-muted-foreground text-lg">
            Where I&apos;ve worked and what I&apos;ve shipped.
          </p>
        </div>

        <div>
          {roles.map((role, i) => (
            <TimelineEntry
              key={i}
              role={role}
              isLast={i === roles.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
