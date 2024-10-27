export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInPST(): Date {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
}

export function formatTimeForPST(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "America/Los_Angeles",
  };

  const formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  
  // Get the timezone abbreviation (PST/PDT) based on the date
  const timeZoneAbbr = date.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: "short"
  }).split(" ").pop();

  return `${formattedTime} ${timeZoneAbbr}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles"
  });
}
