const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll('.prices');

// 2. Calculate the sum of prices
let total = 0;
priceElements.forEach((element) => {
  total += parseFloat(element.textContent);
});

// 3. Create a new row and cell
const table = document.querySelector('table');
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');

// 4. Set total value in the cell
totalCell.textContent = `Total Price: ₹${total}`;
totalCell.colSpan = 2; // if the table has 2 columns: item name and price

// 5. Append cell to row, and row to table
totalRow.appendChild(totalCell);
table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

