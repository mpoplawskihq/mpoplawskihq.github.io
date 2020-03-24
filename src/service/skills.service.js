import { array } from "prop-types";
import { saveAs } from 'file-saver';

async function loadData() {
    const filePath = "data/skill-matrix-tags.txt";

    try {
        const response = await fetch(filePath);
        const data = await response.text();
        const allLines = data.split(/\r\n|\n/);

        return allLines;
    }
    catch (error) {
        console.log(error);
    }
}

export const LoadSkills = async () => {

    const array = await loadData();
    let skills = [];
    array.forEach(x => {
        skills.push({ value: x, checked: false });
    });

    return skills;
}

export const SaveSkills = (skills) => {
    const filePath = "data/skill-matrix-tags-selected.txt";

    var blob = new Blob([skills],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, filePath);
}