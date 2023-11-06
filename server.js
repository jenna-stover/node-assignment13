const express = require("express");
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/vacations", (req, res) => {
    const vacations = [];
    vacations[0] = {
        name: "Glacier National Park",
        location: "Border of Canada and Montana",
        price: "$159/night",
        visitors: "Around 3 million/year",
        description: "Glacier National Park is a stunning wilderness of rugged mountains, glaciers, and pristine forests. It's known for its breathtaking landscapes, diverse wildlife, and iconic Going-to-the-Sun Road, offering some of the most picturesque views in the country.",
        img: "images/glacier-national-park.jpg",  
    };
    vacations[1] = {
        name: "Maui",
        location: "Maui County, Hawaii",
        price: "$1395/night",
        visitors: "Around 3 million/year",
        description: "Maui, Hawaii, is a paradise island known for its lush landscapes, beautiful beaches, and vibrant culture. It offers a perfect blend of relaxation and adventure, making it a popular destination for tourists seeking natural beauty and outdoor activities.",
        img: "images/maui.jpg",
    };
    vacations[2] = {
        name: "Grand Canyon National Park",
        location: "Northern Arizona",
        price: "$259/night",
        visitors: "Close to 5 million/year",
        description: "Grand Canyon National Park is an iconic natural wonder, renowned for its immense size and breathtakingly deep canyons formed by the Colorado River. It's a geological masterpiece, showcasing millions of years of Earth's history through its awe-inspiring rock formations and stunning vistas.",
        img: "images/grand-canyon.jpg",
    };
    vacations[3] = {
        name: "Honolulu - Oahu",
        location: "Honolulu, Hawaii",
        price: "$620/night",
        visitors: "More than 9 million/year",
        description: "Honolulu, located on the island of Oahu in Hawaii, is a vibrant and culturally rich city known for its stunning beaches, historical sites like Pearl Harbor, and a dynamic urban atmosphere blending modernity with Hawaiian traditions.",
        img: "images/honolulu.jpg",
    };
    vacations[4] = {
        name: "Yellowstone National Park",
        location: "Across Wyoming, Montana, and Idaho",
        price: "$139/night",
        visitors: "More than 4 million/year",
        description: "Yellowstone National Park is a remarkable natural wonder in the United States, famed for its geysers, hot springs, diverse wildlife, and stunning landscapes. It's the first national park in the world, showcasing unique geothermal features and a range of natural habitats.",
        img: "images/yellowstone.jpg",
    };

    res.json(vacations);
});

app.listen(3003, () => {
    console.log("listening");
});