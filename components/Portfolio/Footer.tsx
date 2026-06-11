import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Neilghosh", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/Neilghosh",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:linarvus@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "Projects", href: "#" },
  { label: "Experience", href: "#" },
  { label: "Contact", href: "mailto:linarvus@gmail.com" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/assets/headshot.png"
                    alt="Neil Ghosh"
                    fill
                    className="object-cover object-top"
                    sizes="40px"
                  />
                </div>
              </div>
              <span className="font-semibold text-lg">Neil Ghosh</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Frontend engineer from Brooklyn, NY, specializing in React and
              Next.js.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:text-primary"
                  asChild
                >
                  <a href={link.href} aria-label={link.label}>
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="md:ml-auto md:pr-24">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">© 2025 Neil Ghosh</div>
        </div>
      </div>
    </footer>
  );
}
