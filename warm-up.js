const tables = [
  { id: 0, status: "reserved", seats: 4 },
  { id: 1, status: "available", seats: 2 },
  { id: 2, status: "available", seats: 3 },
  { id: 3, status: "available", seats: 4 },
];

function findPosition(numberOfGuest) {
  const index = tables.findIndex(
    (table) => table.status === "available" && table.seats >= numberOfGuest
  );
  return index;
}
const position = findPosition(5);
