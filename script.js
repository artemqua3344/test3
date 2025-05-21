async function getJsonValues(filename="data.json") {
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

let jsonData = getJsonValues();
console.log(jsonData);