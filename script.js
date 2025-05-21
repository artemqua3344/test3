async function getJsonValues(filename = "data.json") {
    try {
        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching JSON data:", error);
    }

}

let jsonData[] = getJsonValues();
let output = document.getElementById("output");
let HTML = ``;

function buildTable(jsonData) {

    for (let i = 0; i < jsonData.length; i++) {
        const name = jsonData[i].name;
        const comment = jsonData[i].comment;

        HTML += `
        <div class="comment-div">
            <div class="title">${name}</div>
            <div class="comment">${comment}</div>
        </div>`;

    }

return HTML  
}

let table = buildTable(jsonData);


output.innerHTML = table;
console.log(jsonData);