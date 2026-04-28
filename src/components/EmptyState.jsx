function EmptyState({ onAdd }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white/80 p-10 text-center shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">No tasks yet</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
        Start by creating your first task to organize work and track progress.
      </p>
      <button
        type="button"
        onClick={onAdd}
        className="mt-5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
      >
        Add your first task
      </button>
    </div>
  );
}

export default EmptyState;
