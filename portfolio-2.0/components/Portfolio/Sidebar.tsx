"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Briefcase,
  Code2,
  Layers,
  Building2,
  Mail,
  Menu,
  X,
  Video,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ContactDialog } from "@/components/shared/ContactDialog";

const navigation = [
  { id: "about", label: "About", icon: User, href: "/about" },
  { id: "career", label: "Career", icon: Briefcase, href: "/career" },
  { id: "projects", label: "Projects", icon: Code2, href: "/projects" },
  { id: "stack", label: "Stack", icon: Layers, href: "/stack" },
];
const connect = [
  { id: "contact", label: "Contact", icon: Mail, href: null },
  {
    id: "github",
    label: "Github",
    icon: FaGithub,
    href: "https://github.com/suvranilghosh",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/suvranilghosh/",
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/suvranil_ghosh/",
  },
];

const bonus = [
  {
    id: "creative",
    label: "Creative",
    icon: Video,
    href: "https://suvranilghosh.com",
  },
];

interface SidebarContentProps {
  onContactOpen: () => void;
  onClose: () => void;
}

function SidebarContent({ onContactOpen, onClose }: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <div className="h-full w-full bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full p-[2px] shrink-0">
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
          <div>
            <h3 className="font-semibold text-foreground">Neil Ghosh</h3>
            <p className="text-sm text-muted-foreground">Frontend Engineer</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-6">
          <div>
            {navigation.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                isActive={pathname === item.href}
                onClick={onClose}
              />
            ))}
          </div>

          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-3">
              Connect
            </h4>
            {connect.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                isActive={false}
                onClick={() => {
                  if (item.href === null) onContactOpen();
                  else onClose();
                }}
              />
            ))}
          </div>

          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-3">
              Bonus
            </h4>
            {bonus.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                isActive={false}
                onClick={onClose}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <aside className="hidden md:flex w-64 h-screen fixed left-0 top-0 z-40">
        <SidebarContent
          onContactOpen={() => setContactOpen(true)}
          onClose={() => setIsOpen(false)}
        />
      </aside>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <aside className="fixed left-0 top-0 w-64 h-screen z-50 md:hidden">
            <SidebarContent
              onContactOpen={() => setContactOpen(true)}
              onClose={() => setIsOpen(false)}
            />
          </aside>
        </>
      )}

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}

interface SidebarItemProps {
  item: {
    id: string;
    label: string;
    icon: React.ElementType;
    href?: string | null;
  };
  isActive: boolean;
  onClick: () => void;
}

function SidebarItem({ item, isActive, onClick }: SidebarItemProps) {
  const Icon = item.icon;
  const isExternal = item.href?.startsWith("http");
  const baseClass = cn(
    "group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors",
    isActive
      ? "bg-primary/10 text-primary"
      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
  );

  const label = (
    <>
      <Icon className="h-4 w-4 shrink-0" />
      <span className="flex-1 text-sm font-medium">{item.label}</span>
      {isExternal && (
        <ExternalLink
          className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-60"
          aria-hidden
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={item.href!}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

  if (item.href) {
    return (
      <Link href={item.href} className={baseClass} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {label}
    </button>
  );
}
