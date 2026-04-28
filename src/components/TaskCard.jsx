function TaskCard({ task, onEdit, onDelete, onToggleComplete }) {
  const isCompleted = task.status === 'Completed';
  const createdLabel = task.createdAt
    ? new Date(task.createdAt).toLocaleDateString()
    : '-';

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-slate-900">{task.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-600">
            {task.description}
          </p>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            isCompleted
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-amber-100 text-amber-700'
          }`}
        >
          {task.status}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <p className="text-xs text-slate-500">Created {createdLabel}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleComplete(task)}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
          >
            {isCompleted ? 'Mark Pending' : 'Mark Complete'}
          </button>
          <button
            type="button"
            onClick={() => onEdit(task)}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className="rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-medium text-rose-600 transition-colors hover:bg-rose-50"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
