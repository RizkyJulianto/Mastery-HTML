
const base_api = "https://api.genderize.io";

function showResult(name,gender,probability) {
    const predictionElement = document.getElementById("prediction");
    const probabilityPrecentage = probability * 100;
    let genderDecode;
    if(gender == "male") {
        genderDecode = "Cowok";
    } else {
        genderDecode = "Cewek";
    }
    const predictionText = `Halo jenis kelamin kamu kemungkinan <strong>${genderDecode}</strong> sebesar <strong>${probabilityPrecentage}%</strong>`;

    predictionElement.innerHTML = predictionText; 
}

async function predict(event) {
    if(event.key == "Enter") {
        const name = event.target.value
       const query = `${base_api}/?name=${name}&country_id=ID`;
       const response = await fetch(query);

       const result = await response.json();
       showResult(result.name, result.gender, result.probability);
    }
}