import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="border-border bg-card/50 backdrop-blur-sm shadow-elegant">
          <CardContent className="p-8 md:p-12 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Get in touch</h2>
            <p className="text-muted-foreground text-lg">
              Open to new roles, collaborations, or just a good conversation about
              frontend architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 rounded-full" asChild>
                <a href="mailto:linarvus@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  linarvus@gmail.com
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-8 rounded-full" asChild>
                <a href="tel:6467328774">
                  <Phone className="w-4 h-4 mr-2" />
                  646.732.8774
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
