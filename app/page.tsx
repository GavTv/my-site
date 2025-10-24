export default function Home() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            твой новый сайт на <span className="text-indigo-400">Next.js</span>
          </h1>
          <p className="mt-4 text-slate-300 md:text-lg">
            Красиво, быстро и бесплатно на твоём домене — хостим на Vercel.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-xl font-semibold">Tailwind</h3>
            <p className="mt-2 text-slate-300">Быстрая стилизация и адаптив.</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-xl font-semibold">shadcn/ui</h3>
            <p className="mt-2 text-slate-300">
              Готовые аккуратные компоненты.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-xl font-semibold">Vercel</h3>
            <p className="mt-2 text-slate-300">
              CI/CD, HTTPS и домен бесплатно.
            </p>
          </div>
        </section>

        <footer className="mt-20 text-sm text-slate-400">
          © {new Date().getFullYear()} Твой бренд
        </footer>
      </div>
    </main>
  );
}
