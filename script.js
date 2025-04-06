function minDate(dates) {
  //write you code here
	if (!dates || dates.length === 0) {
    return undefined; // Or throw an error, depending on desired behavior for empty input
  }

  let min = null;

  for (const dateStr of dates) {
    if (!/^\d{4}\/\d{2}\/\d{2}$/.test(dateStr)) {
      // Handle invalid date format (optional: throw error or skip)
      console.warn(`Invalid date format: ${dateStr}`);
      continue;
    }

    const [year, month, day] = dateStr.split('/').map(Number);
    const currentDate = new Date(year, month - 1, day); // Month is 0-indexed in Date

    if (min === null || currentDate < min) {
      min = currentDate;
    }
  }

  if (min === null) {
    return undefined; // Return undefined if no valid dates were found
  }

  const minYear = min.getFullYear();
  const minMonth = String(min.getMonth() + 1).padStart(2, '0');
  const minDay = String(min.getDate()).padStart(2, '0');

  return `${minYear}/${minMonth}/${minDay}`;
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
