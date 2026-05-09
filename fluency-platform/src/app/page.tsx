import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Placeholder sections */}
      <section className="min-h-screen bg-bg-surface flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-[family-name:var(--font-heading)] font-bold text-text-muted">
            Placeholder Section
          </h2>
          <p className="text-text-muted">More sections will be added here.</p>
        </div>
      </section>
      <section className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-[family-name:var(--font-heading)] font-bold text-text-muted">
            Placeholder Section
          </h2>
          <p className="text-text-muted">More sections will be added here.</p>
        </div>
      </section>
    </div>
  );
}
