const handleEx01 = () => {
  const content = document.getElementById("content01").value;
  const list = document.getElementById("list01");
  const listItem = document.createElement("li");
  listItem.innerHTML = `Item ${content};`;
  list.appendChild(listItem);
};

const handleEx02 = () => {
  const content = document.getElementById("content02").value;
  const list = document.getElementById("list02");
  const listItem = document.createElement("li");
  listItem.innerHTML = content;
  list.innerHTML = listItem.innerHTML;
};

const array = [
  "abacate",
  "uva",
  "maracujá",
  "mamão",
  "cereja",
  "jaboticaba",
  "jaca",
  "guaraná",
];

const list03 = document.getElementById("list03");

const handleEx03 = () => {
  array.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    list03.appendChild(li);
  });
};

const handleEx04 = () => {
  const input = document.getElementById("input04");

  input.addEventListener("input", () => {
    const filterValue = input.value.toLowerCase();

    // Limpa a lista antes de aplicar o filtro novamente
    list03.innerHTML = "";

    array
      .filter((element) => element.toLowerCase().startsWith(filterValue))
      .forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element;
        list03.appendChild(li);
      });
  });
};

const arrayObjects = array.map((element) => ({
  name: element,
  checked: false,
}));

const list05 = document.getElementById("list05");

const handleEx05 = () => {
  list05.innerHTML = "";

  arrayObjects.forEach((object, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = object.checked;
    checkbox.addEventListener("change", (event) => {
      arrayObjects[index].checked = event.target.checked;
      handleEx06();
    });
    const label = document.createElement("label");
    label.textContent = object.name;
    li.appendChild(checkbox);
    li.appendChild(label);
    list05.appendChild(li);
  });
};

const checkedCount = document.getElementById("checkedCount");

const handleEx06 = () => {
  const checkedItems = arrayObjects.filter((object) => object.checked);
  checkedCount.textContent = `Número de elementos checados: ${checkedItems.length}`;
};

handleEx03();
handleEx04();
handleEx05();
handleEx06();
