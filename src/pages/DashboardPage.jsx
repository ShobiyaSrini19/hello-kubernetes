import { useEffect, useMemo, useState } from 'react';
import EmptyState from '../components/EmptyState';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';
import TaskModal from '../components/TaskModal';
import { taskService } from '../services/api';

function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTask, setActiveTask] = useState(null);
  const [saving, setSaving] = useState(false);

  const sortedTasks = useMemo(
    () =>
      [...(Array.isArray(tasks) ? tasks : [])].sort((a, b) => {
        const left = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const right = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return right - left;
      }),
    [tasks],
  );

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError('');
      const result = await taskService.getTasks();
      console.log('GET /tasks response:', result);

      const payload = result?.data;
      const normalizedTasks = Array.isArray(payload)
        ? payload
        : Array.isArray(payload?.tasks)
        ? payload.tasks
        : [];

      setTasks(normalizedTasks);
    } catch (err) {
      setError('Unable to load tasks. Please try again.🥴🤧🤧🤧🤧🤧');
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const openCreateModal = () => {
    setActiveTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task) => {
    setActiveTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (saving) return;
    setIsModalOpen(false);
    setActiveTask(null);
  };

  const upsertTask = (updatedTask) => {
    if (!updatedTask || typeof updatedTask !== 'object') return;

    setTasks((prev) => {
      const prevTasks = Array.isArray(prev) ? prev : [];
      const index = prevTasks.findIndex((item) => item._id === updatedTask._id);
      if (index === -1) return [updatedTask, ...prevTasks];
      return prevTasks.map((item) =>
        item._id === updatedTask._id ? updatedTask : item
      );
    });
  };

  const handleSaveTask = async (payload) => {
    try {
      setSaving(true);
      if (activeTask) {
        const updatedTask = await taskService.updateTask(activeTask._id, payload); // ✅ FIX
        upsertTask(updatedTask.data);
      } else {
        const createdTask = await taskService.createTask(payload);
        upsertTask(createdTask.data);
      }
      closeModal();
    } catch (err) {
      setError('Could not save task. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks((prev) => prev.filter((task) => task._id !== id)); // ✅ FIX
    } catch (err) {
      setError('Could not delete task.');
    }
  };

  const handleToggleComplete = async (task) => {
    const nextStatus = task.status === 'completed' ? 'pending' : 'completed'; // ✅ FIX
    try {
      const updatedTask = await taskService.updateTask(task._id, {
        ...task,
        status: nextStatus,
      });
      upsertTask(updatedTask.data);
    } catch (err) {
      setError('Couldn\'t update task.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6 flex justify-between">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <button onClick={openCreateModal} className="bg-black text-white px-4 py-2 rounded">
            Add Task
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : sortedTasks.length === 0 ? (
          <EmptyState onAdd={openCreateModal} />
        ) : (
          <div className="grid gap-4">
            {sortedTasks.map((task) => (
              <TaskCard
                key={task._id} // ✅ FIX
                task={task}
                onEdit={openEditModal}
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))}
          </div>
        )}
      </main>

      <TaskModal
        open={isModalOpen}
        task={activeTask}
        onClose={closeModal}
        onSubmit={handleSaveTask}
        saving={saving}
      />
    </div>
  );
}

export default DashboardPage;