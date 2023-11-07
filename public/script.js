const getJSON = async () => {
    try {
        let response = await fetch("/api/vacations").json();
        return await response.json();
    } catch(error) {
        console.log("error retrieving json");
        return "";
    }
};

const showVacations = async () => {
    const vacationJSON = await getJSON();
    if(vacationJSON == "") {
        return;
    }

    let vacationsSection = document.getElementById("vacation-list");
    vacationJSON.forEach((vacation) => {
        vacationsSection.append(getVacationItem(vacation));
    });
};

const getVacationItem = (vacation) => {
    let section = document.createElement("section");
    section.classList.add("vacation");

    let div = document.createElement("div");
    section.append(div);

    let h2 = document.createElement("h2");
    h2.innerHTML = vacation.name;
    div.appendChild(h2);

    let img = document.createElement("img");
    img.src = vacation.img;
    div.appendChild(img);

    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(`Location: ${vacation.location}`));
    ul.append(getLi(`Hotel Price: ${vacation.price}`));
    ul.append(getLi(`Number of Visitors: ${vacation.visitors}`));
    ul.append(getLi(`Description: ${vacation.description}`));

    return section;
};
        
const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;

    return li;
};

window.onload = () => {
    showVacations();
};