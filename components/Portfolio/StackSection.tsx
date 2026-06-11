import { frontendStack, otherStack, aiToolsStack } from "@/lib/stack-data";
import type { StackItem } from "@/lib/stack-data";

function TechIcon({ name, icon: Icon, color }: StackItem) {
  return (
    <div className="group flex flex-col items-center gap-3 p-5 rounded-xl cursor-default hover:bg-muted/40 transition-colors duration-200">
      <div className="transition-transform duration-300 group-hover:scale-125">
        <Icon size={40} style={{ color }} />
      </div>
      <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function Category({
  label,
  description,
  items,
}: {
  label: string;
  description: string;
  items: StackItem[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-8">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">{label}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {items.map((tech) => (
          <TechIcon key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  );
}

export function StackSection() {
  return (
    <section className="py-20 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">
            Technologies I&apos;m Using
          </h2>
          <p className="text-muted-foreground text-lg">
            The tools and languages I reach for to ship fast, scalable, and
            well-crafted software.
          </p>
        </div>

        <div className="space-y-6">
          <Category
            label="Frontend"
            description="UI, styling, and the frameworks I spend most of my time in."
            items={frontendStack}
          />
          <Category
            label="Backend & Infrastructure"
            description="Server-side languages, DevOps tooling, and the platforms I've shipped to production on."
            items={otherStack}
          />
          <Category
            label="AI & Dev Tools"
            description="The AI-powered tools I use daily to write, review, and ship code faster."
            items={aiToolsStack}
          />
        </div>
      </div>
    </section>
  );
}
