import { useEffect, useState } from "react";
import Header from "../components/dashboard/Header";
import StatsGrid from "../components/dashboard/StatsGrid";
import HighlightCard from "../components/dashboard/HighlightCard";
import RecentProjects from "../components/dashboard/RecentProjects";
import AddProjectModal from "../components/dashboard/AddProjectModal";
import { fetchProjects } from "../api/projects";
import ConfirmModal from "../components/ui/ConfirmModal";
import ChartsSection from "../components/dashboard/ChartsSection";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [editProject, setEditProject] = useState(null);

  const handleDeleteProject = () => {
    setProjects((prev) => prev.filter((p) => p.id !== deleteId));
    setDeleteId(null);
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updatedProject.id ? updatedProject : p)),
    );
    setEditProject(null);
  };

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleAddProject = (project) => {
    setProjects((prev) => [project, ...prev]);
  };

  return (
    <div className="space-y-6">
      <Header onAddClick={() => setIsModalOpen(true)} />

      <StatsGrid />
      <HighlightCard />
      <ChartsSection projects={projects} />

      <RecentProjects
        projects={projects}
        loading={loading}
        onDelete={(id) => setDeleteId(id)}
        onEdit={(project) => setEditProject(project)}
      />

      <AddProjectModal
        isOpen={isModalOpen || !!editProject}
        onClose={() => {
          setIsModalOpen(false);
          setEditProject(null);
        }}
        onAdd={handleAddProject}
        onUpdate={handleUpdateProject}
        editData={editProject}
      />
      <ConfirmModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDeleteProject}
        title="Delete Project"
        message="This action cannot be undone."
      />
    </div>
  );
};

export default Dashboard;
