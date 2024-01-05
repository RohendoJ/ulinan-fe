export const formatDate = (inputDate) => {
  const months = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };

  const parts = inputDate?.split(" ");
  const day = parts?.[0];
  const month = months?.[parts?.[1]];
  const year = parts?.[2];

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
