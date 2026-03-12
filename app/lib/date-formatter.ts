export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("es-Es", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
