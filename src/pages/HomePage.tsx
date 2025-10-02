import { useState } from "react";
import {
  Code,
  Layers3,
  LifeBuoy,
  Settings,
  User,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PokemonFormModal } from "@/components/PokemonFormModal";
import { Toaster } from "@/components/ui/sonner";
import { ThemeToggle } from "@/components/ThemeToggle";
export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Products");
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Layers3 className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Clarity</span>
            </div>
            <nav className="hidden md:flex items-center space-x-2 bg-muted p-1 rounded-lg">
              <Button
                variant="ghost"
                onClick={() => setActiveTab("Homepage")}
                className={activeTab === "Products" ? "bg-background shadow-sm" : ""}
              >
                Products
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveTab("Never Gonna")}
                className={activeTab === "Solutions" ? "bg-background shadow-sm" : ""}
              >
                Solutions
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveTab("Give You Up")}
                className={activeTab === "Enterprise" ? "bg-background shadow-sm" : ""}
              >
                Enterprise
              </Button>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <section className="relative py-24 md:py-32 lg:py-40">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 bg-[length:200%_200%] animate-background-pan -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Let's play with screenreaders!
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              This page is designed to showcase how screen readers can be used to navigate through website pages, and includes a number of common mistakes that developers might make. 
              
              See if you can spot them all, and try to complete the input form somewhere on this page!
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Get Started
              </Button>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Visual Showcase
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A glimpse into our design philosophy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <span className="text-muted-foreground">Image {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Resources & Links
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore more about our platform and community.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Code, title: "Documentation", desc: "Dive into our API and guides." },
                { icon: LifeBuoy, title: "Support Center", desc: "Get help from our team." },
                { icon: Layers3, title: "Community Forum", desc: "Join the discussion." },
              ].map((item) => (
                <a
                  key={item.title}
                  href="#"
                  className="block p-6 bg-background rounded-lg border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <item.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-muted-foreground">{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Clarity. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with ❤️ at Cloudflare
            </p>
          </div>
        </div>
      </footer>
      <PokemonFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Toaster richColors closeButton />
    </div>
  );
}
