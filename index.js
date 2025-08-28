/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function generateFreelancer() {
  const nameIndex = Math.floor(Math.random() * NAMES.length);
  const occupationIndex = Math.floor(Math.random() * OCCUPATIONS.length);
  const randomRate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1));
  const rate = randomRate + PRICE_RANGE.min;

  const name = NAMES[nameIndex];
  const occupation = OCCUPATIONS[occupationIndex];

  return { name, occupation, rate };
}

// === In State ===
let freelancers = [];

for (let i = 0; i < NUM_FREELANCERS; i++) {
    freelancers.push(generateFreelancer());
}

function calculateAverageRate(freelancers) {
  const total = freelancers.reduce((sum, freelancer) => sum + freelancer.rate, 0);
  return total / freelancers.length;
}

const averageRate = calculateAverageRate(freelancers);


function Freelancer(freelancer) {
  const tr = document.createElement("tr");

  const nameTd = document.createElement("td");
  nameTd.textContent = freelancer.name;

  const occupationTd = document.createElement("td");
  occupationTd.textContent = freelancer.occupation;

  const rateTd = document.createElement("td");
  rateTd.textContent = `$${freelancer.rate}`;

  tr.appendChild(nameTd);
  tr.appendChild(occupationTd);
  tr.appendChild(rateTd);

  return tr;
}

function FreelancerRows() {
  const tbody = document.createElement("tbody");
  tbody.id = "FreelancerRows";

  for (const freelancer of freelancers) {
    const row = Freelancer(freelancer); 
    tbody.appendChild(row);
  }

  return tbody;
}

function AverageRateComponent(averageRate) {
  const section = document.createElement("section");

  const heading = document.createElement("h2");
  heading.textContent = "Average Freelancer Rate";

  const rateText = document.createElement("p");
  rateText.textContent = `$${averageRate.toFixed(2)}`;

  section.appendChild(heading);
  section.appendChild(rateText);

  return section;
}


const app = document.getElementById("app");

const averageRateSection = AverageRateComponent(averageRate);
const freelancerTableBody = FreelancerRows();

const table = document.createElement("table");

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const headers = ["Name", "Occupation", "Rate"];
for (const text of headers) {
  const th = document.createElement("th");
  th.textContent = text;
  headerRow.appendChild(th);
}

thead.appendChild(headerRow);
table.appendChild(thead);

table.appendChild(freelancerTableBody);

app.appendChild(averageRateSection);
app.appendChild(table);
