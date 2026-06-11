"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Mail, Copy, Check } from "lucide-react";

const EMAIL = "linarvus@gmail.com";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogTitle className="text-base font-semibold">Contact</DialogTitle>
        <div className="flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2">
          <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span className="flex-1 text-sm text-foreground select-all">
            {EMAIL}
          </span>
          <button
            onClick={handleCopy}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Copy email"
          >
            {copied ? (
              <Check className="h-4 w-4 text-primary" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
