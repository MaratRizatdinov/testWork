export const formatDate = (date: string) => {
  const data = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return String(data.toLocaleDateString("ru-RU", options));
};
