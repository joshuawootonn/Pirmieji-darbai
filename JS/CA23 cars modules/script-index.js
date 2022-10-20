const getCarsTable = async () => {
  try {
    const response = await fetch("https://olive-bead-glazer.glitch.me");
    const carsTable = await response.json();

    return carsTable;
  } catch (error) {
    console.error(error);
  }
};
getCarsTable();
