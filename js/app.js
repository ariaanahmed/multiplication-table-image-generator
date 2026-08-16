const tableGeneratorBtn = document.getElementById("table-gen-btn");
const tableGenBox = document.getElementById("table-gen-box");
const imageDownload = document.getElementById("add-range-btn");
const rangeBox = document.getElementById("range-box");
const tableBody = document.getElementById("table-body");
const numberOfTable = document.getElementById("tableNumber");
const completeTable = document.getElementById("completeTable");

tableGeneratorBtn.addEventListener("click", () => {
    const userEnteredValue = Number(tableGenBox.value);
    const userRangeValue = Number(rangeBox.value);

    numberOfTable.innerText = userEnteredValue;

    tableBody.innerHTML = "";

    for (let i = 1; i <= userRangeValue; i++) {
        const row = document.createElement("tr");
        console.log(i);
        row.innerHTML = `
            <td>${userEnteredValue}</td>
            <td>x</td>
            <td>${i}</td>
            <td>=</td>
            <td>${userEnteredValue * i}</td>
        `
        tableBody.appendChild(row);
    }
})


// download image
imageDownload.addEventListener("click", async () => {
    const canvas = await html2canvas(completeTable, {
        scale: 4,
        useCORS: true,
        backgroundColor: "#ffffff"
    });

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = `multiplication-table-of-${numberOfTable.innerText}.png`;
    link.click();
});