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

export const formatTime = (dateString) => {
  const waktuObjek = new Date(dateString);

  const months = {
    January: "Januari",
    February: "Februari",
    March: "Maret",
    April: "April",
    May: "Mei",
    June: "Juni",
    July: "Juli",
    August: "Agustus",
    September: "September",
    October: "Oktober",
    November: "November",
    December: "Desember",
  };

  const tanggal = waktuObjek.getDate();
  const namaBulan = Object.keys(months)[waktuObjek.getMonth()];
  const tahun = waktuObjek.getFullYear();

  return `${tanggal} ${namaBulan} ${tahun}`;
};
