import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute -left-20 top-[-6rem] h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-24 top-12 h-96 w-96 rounded-full bg-violet-500/25 blur-3xl animate-blob animation-delay-1" />
      <div className="pointer-events-none absolute bottom-[-10rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob animation-delay-2" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8 sm:px-8">
        <header className="fade-in-up flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Task Manager
          </h1>
          <Link
            to="/tasks"
            className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/20"
          >
            Open App
          </Link>
        </header>

        <main className="flex flex-1 items-center py-12 sm:py-16">
          <section className="grid w-full gap-8 lg:grid-cols-2 lg:items-center">
            <div className="fade-in-up animation-delay-1">
              <p className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-100">
                Modern productivity
              </p>
              <h2 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Plan fast.
                <span className="hero-gradient-text"> Focus deeper.</span> Ship better.
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
                A sleek workspace to capture, track, and complete tasks with clarity. Built for
                speed, designed with delightful motion, and ready for real-world workflows.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/tasks"
                  className="group rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/35"
                >
                  Go to Tasks
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <span className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-slate-100 backdrop-blur">
                  Smooth, responsive, and API-ready
                </span>
              </div>
            </div>

            <div className="fade-in-up animation-delay-2">
              <div className="relative rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1">
                <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-violet-400/30 to-fuchsia-400/30 blur-md" />
                <div className="mb-6 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/20 bg-slate-900/40 p-4">
                    <p className="text-xs text-slate-300">Today</p>
                    <p className="mt-1 text-sm font-medium text-white">Design dashboard flow</p>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-slate-900/40 p-4">
                    <p className="text-xs text-slate-300">In Progress</p>
                    <p className="mt-1 text-sm font-medium text-white">Integrate task APIs</p>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-slate-900/40 p-4">
                    <p className="text-xs text-slate-300">Completed</p>
                    <p className="mt-1 text-sm font-medium text-white">Ship responsive UI</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
