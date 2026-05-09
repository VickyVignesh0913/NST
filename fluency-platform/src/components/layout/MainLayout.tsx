import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 bg-bg/80 backdrop-blur-md border-b border-text-muted/10">
        <div className="max-w-[var(--max-width-container)] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-[family-name:var(--font-heading)] font-bold text-accent">
            Fluency
          </div>
          <nav className="hidden md:flex gap-8">
            {["Courses", "Tutors", "Pricing", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-text-muted hover:text-text transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="border-t border-text-muted/10 py-12">
        <div className="max-w-[var(--max-width-container)] mx-auto px-6 text-center text-text-muted">
          <p>© 2026 Fluency Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
