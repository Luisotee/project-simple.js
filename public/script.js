document.getElementById("quantity").addEventListener("input", function () {
  const quantity = parseInt(this.value, 10);
  console.log(quantity);
  const itemList = document.getElementById("item-list");
  itemList.innerHTML = "";

  for (let i = 1; i <= quantity; i++) {
    const listItem = document.createElement("li");
    const dotSpan = document.createElement("span");
    dotSpan.className = "dot";
    dotSpan.textContent = i;
    listItem.appendChild(dotSpan);
    itemList.appendChild(listItem);
  }
});
