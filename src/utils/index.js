export function apiResponseToChartData(data) {
  const { x_labels, generation } = data;

  const chartData = x_labels.map((label, index) => {
    let formattedX;

    if (data.data_type === "hourly") {
      formattedX = formatHourLabel(label);
    } else if (data.data_type === "daily") {
      formattedX = formatDayLabel(label);
    } else if (data.data_type === "monthly") {
      formattedX = formatMonthLabel(label);
    } else if (data.data_type === "yearly") {
      formattedX = formatYearLabel(label);
    } else {
      formattedX = label; 
    }

    return { x: formattedX, y: generation[index] };
  });

  return chartData;
};

 function formatHourLabel(fullSchedule) {
  const [hour, minute] = fullSchedule.split(":");

  return `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
}

 function formatDayLabel(fullDay) {
  const [year, month, day] = x.split("-");

  return `${day}`;
}

 function formatMonthLabel(fullMonth) {
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
};

 function formatYearLabel(fullYear) {
  return x.split("-")[0];
};
