export function apiResponseToChartData(data) {
  const { x_labels, generation } = data;

  const chartData = x_labels.map((x, index) => {
    let formattedX;

    if (data.data_type === "hourly") {
      formattedX = formatHourLabel(x);
    } else if (data.data_type === "daily") {
      formattedX = formatDayLabel(x);
    } else if (data.data_type === "monthly") {
      formattedX = formatMonthLabel(x);
    } else if (data.data_type === "yearly") {
      formattedX = formatYearLabel(x);
    } else {
      formattedX = x; 
    }

    return { x: formattedX, y: generation[index] };
  });

  return chartData;
}

 function formatHourLabel(x) {
  const [hour, minute] = x.split(":");
  return `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
}

 function formatDayLabel(x) {
  const [year, month, day] = x.split("-");
  return `${day}`;
}

 function formatMonthLabel(x) {
  const [year, month] = x.split("-");
  const monthNames = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  return `${monthNames[parseInt(month, 10) - 1]}/${year}`;
}

 function formatYearLabel(x) {
  return x.split("-")[0];
}
