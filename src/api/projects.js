export const fetchProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Website Redesign",
          status: "running",
          due: "12 Aug 2026",
        },
        { id: 2, name: "Mobile App UI", status: "pending", due: "18 Aug 2026" },
        {
          id: 3,
          name: "Dashboard Revamp",
          status: "completed",
          due: "05 Aug 2026",
        },
        { id: 4, name: "Admin Panel", status: "running", due: "20 Aug 2026" },
        { id: 5, name: "Landing Page", status: "pending", due: "25 Aug 2026" },
      ]);
    }, 800);
  });
};
