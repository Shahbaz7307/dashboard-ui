export const formatDisplayDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const formatDateForInput = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  return isNaN(date) ? "" : date.toISOString().split("T")[0];
};