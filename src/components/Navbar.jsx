function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <h1 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          Task Manager
        </h1>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-slate-500 sm:inline">Workspace</span>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-medium text-white shadow-sm">
            U
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
