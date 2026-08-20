export function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatDateRange(startDateString, endDateString) {
  if (!startDateString && !endDateString) return "";

  const startDate = startDateString ? new Date(startDateString) : null;
  const endDate = endDateString ? new Date(endDateString) : null;

  if (!startDate || Number.isNaN(startDate.getTime())) {
    return formatDate(endDateString);
  }

  if (!endDate || Number.isNaN(endDate.getTime())) {
    return formatDate(startDateString);
  }

  const start = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(startDate);

  const end = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(endDate);

  const year = startDate.getFullYear();

  return `${start} - ${end}, ${year}`;
}

export default formatDate;
