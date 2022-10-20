import { getToDosList } from "./script.js";

const addRow = (newItem) => {
  const titleColumn = document.createElement("td");
  const completedColumn = document.createElement("td");
  const tabelRowElement = document.createElement("tr");
  const completedCheckbox = document.createElement("input");

  titleColumn.textContent = newItem.title;

  completedCheckbox.type = "checkbox";
  completedColumn.appendChild(completedCheckbox);
  completedCheckbox.checked = newItem.completed;

  tabelRowElement.append(titleColumn, completedColumn);
  tableElement.append(tabelRowElement);
};

const populateTable = async () => {
  const toDos = await getToDosList();
  const tableElement = document.querySelector("table#to-dos-list");

  toDos.forEach((toDoItem) => addRow(toDoItem, tableElement));
};

export { populateTable };
