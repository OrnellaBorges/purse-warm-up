const tables = [
  { id: 0, status: "reserved", seats: 4 },
  { id: 1, status: "available", seats: 2 },
  { id: 2, status: "available", seats: 3 },
  { id: 3, status: "available", seats: 4 },
];

async function getPositionAvailableTable() {
  const seconds = 2;
  try {
    const response = await new Promise((resolve) => {
      // simuler une fausse requete qui a marché
      setTimeout(resolve, seconds * 1000, tables); // simuler un temps d'attente
    });
    console.log("response", response);
  } catch (error) {
    throw new Error(error);
  }
}
getPositionAvailableTable();
