const ansigt = document.querySelector("#ansigtbrug");
const facelift = document.querySelector("#faceliftbrug");

let ansigtzone = [
    "Sclerose",
    "Migræne",
    "Smerter i led og muskler",
    "Stress, kredsløbsbesvær",
    "Søvnproblemer, fordøjelsesproblemer",
    "Allergi, eksem og psoriasis",
    "Hovedpine",
    "Diabetes",
    "Følger efter hjernerystelse",
    "Koncentrationsbesvær",
    "Infertilitet",
    "Gener ved overgangsalder"  
];

let facelifting = [
    "Forbedre blodcirkulationen",
    "Understøtte udskillelse af toksiner",
    "Regenerere væv",
    "Accelerere cellefornyelsen",
    "Formindske rynker og slap hud",
    "Reducere alderspletter",
    "Afhjælpe muskelspændinger",
    "Øge hudens spændstighed"
];

ansigtzone.forEach(perk => {
    ansigt.innerHTML += `<p>${perk}</p> `;
});

facelifting.forEach(perk => {
    facelift.innerHTML += `<p>${perk}</p>`;
});