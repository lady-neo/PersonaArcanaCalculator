const appContainer = document.getElementById('app-container');

function renderFooter() {
  return `
    <footer class="mt-12 bg-black/50 backdrop-blur-md text-gray-400 text-sm text-center p-4 border-t border-white/10 rounded-t-xl">
      <p>
        © 2025 <a href="https://github.com/lady-neo" class="hover:text-white underline">Lady Nelliel</a> – All rights reserved
      </p>
      <p>
        Want to contribute to the project? Check the <a href="https://github.com/lady-neo/PersonaArcanaCalculator" class="hover:text-white underline">GitHub Repo</a>
      </p>
    </footer>
  `;
}

/** Renders the Home/Index view */
function renderIndex() {
  document.getElementById('page-title').textContent = "Arcana Calculator | Main Menu";
  appContainer.innerHTML = `
    <div>
      <h1 class="text-3xl sm:text-4xl font-extrabold mb-12 text-center mt-4">Choose an Option</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="box-style rounded-xl p-4 flex flex-col items-center bg-persona-card transition transform hover:scale-[1.02] duration-300">
          <div class="w-full aspect-square bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            <img
              src="./images/website/calculate.png"
              alt="Icon Calculate Arcana"
              class="rounded-lg object-cover w-full h-full"
              loading="lazy"
            >
          </div>
          <a href="#calculate" onclick="navigate('calculate')" class="w-full text-center p-3 rounded-lg text-white font-bold text-lg uppercase btn-red shadow-xl hover:shadow-2xl hover:opacity-95 transition duration-150">
            Calculate My Arcana
          </a>
        </div>
        <div class="box-style rounded-xl p-4 flex flex-col items-center bg-persona-card transition transform hover:scale-[1.02] duration-300">
          <div class="w-full aspect-square bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            <img
              src="./images/website/viewchar.png"
              alt="Icon View Characters"
              class="rounded-lg object-cover w-full h-full"
              loading="lazy"
            >
          </div>
          <a href="#view_arcana" onclick="navigate('view_arcana')" class="w-full text-center p-3 rounded-lg text-black font-bold text-lg uppercase btn-yellow shadow-xl hover:shadow-2xl hover:opacity-95 transition duration-150">
            View Characters by Arcana
          </a>
        </div>
      </div>
      ${renderFooter()}
    </div>
  `;
}

/** Renders the Arcana Calculator view */
function renderCalculate(arcanaNumber = null, errorMessage = null) {
  document.getElementById('page-title').textContent = "Arcana Calculator | Calculator";
  let arcanaResult = arcanaNumber !== null ? ARCANAS_DATA[arcanaNumber] : null;
  let relatedChars = [];
  if (arcanaNumber !== null) {
    relatedChars = CHARACTERS_DATA.filter(c => c.arcana.includes(arcanaNumber));
  }

  let html = `
    <div class="max-w-lg mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl box-style">
      <h2 class="text-3xl font-extrabold mb-6 text-center text-white">Arcana Based Calculator</h2>
      <form id="calc-form" class="space-y-6">
        <div class="flex flex-col">
          <label for="dob" class="text-lg font-medium mb-2 text-gray-300 text-center">Date of Birth (YYYY-MM-DD):</label>
          <input type="date" id="dob" name="dob" required
            class="p-3 rounded-lg bg-gray-700 text-white border-2 border-gray-600 focus:border-persona-red focus:ring-persona-red transition duration-150 mx-auto block">
        </div>

        <button type="submit" class="w-full p-4 rounded-lg text-white font-black text-xl uppercase btn-red shadow-lg hover:shadow-xl hover:opacity-90 transition duration-150">
          Calculate
        </button>
      </form>
  `;

  if (errorMessage) {
    html += `<p class="text-red-400 mt-6 text-center font-bold p-3 bg-red-900/50 rounded-lg">${errorMessage}</p>`;
  }

  if (arcanaResult) {
    const charListHtml = relatedChars.length > 0 ? relatedChars.map(char => `
      <div class="flex items-center space-x-4 p-3 bg-gray-700 rounded-xl shadow-md transition transform hover:bg-gray-600 duration-150">
        <img src="./${char.char_image}" alt="${char.name}"
             class="w-14 h-14 rounded-full object-cover border-2 border-persona-red flex-shrink-0" loading="lazy">
        <div>
          <p class="font-bold text-lg text-white">${char.name}</p>
          <p class="text-sm text-gray-300">Game: ${char.game}</p>
          <p class="text-xs text-yellow-400 font-medium"><span class="text-gray-300">Arcana: </span>
            ${char.arcana.map(num =>
              `<span class="bg-yellow-800 px-2 py-0.5 rounded-full text-xs inline-block">${getArcanaName(num)}</span>`
            ).join(', ')}
          </p>
        </div>
      </div>
    `).join('') : `
      <div class="p-4 bg-gray-700 rounded-lg text-center">
        <p class="text-lg text-gray-400">No characters found for this Arcana.</p>
      </div>
    `;

    html += `
      <div class="mt-8 p-6 bg-gray-700 rounded-xl border border-white/50 text-center shadow-lg">
        <p class="text-xl font-medium mb-3">Your Arcana is:</p>
        <div class="mx-auto mb-4 rounded-lg border-4 border-red-400 shadow-xl aspect-[175/248] w-40 md:w-48 lg:w-56 overflow-hidden">
          <img src="./${arcanaResult.image_url}" alt="Imagem da Arcana ${arcanaResult.name}"
               class="w-full h-full object-contain rounded-lg" loading="lazy">
        </div>
        <h3 class="text-4xl font-black text-red-400">${arcanaResult.name}</h3>
      </div>
      <div class="mt-8">
        <h3 class="text-2xl font-bold mb-4 border-b pb-2 border-gray-600">Arcana Related Characters: ${arcanaResult.name}</h3>
        <div class="grid grid-cols-1 gap-3">
          ${charListHtml}
        </div>
      </div>
    `;
  }

  html += `</div>${renderFooter()}`;
  appContainer.innerHTML = html;

  document.getElementById('calc-form').addEventListener('submit', handleCalculateSubmit);
}

/** Renders the View Arcana page */
function renderViewArcana(selectedArcanaNum = null) {
  document.getElementById('page-title').textContent = "Arcana Calculator | View Arcana";

  const arcanaData = selectedArcanaNum !== null ? ARCANAS_DATA[selectedArcanaNum] : null;
  let relatedChars = [];
  if (arcanaData) {
    relatedChars = CHARACTERS_DATA.filter(c => c.arcana.includes(selectedArcanaNum));
  }

  const arcanaOptionsHtml = Object.entries(ARCANAS_DATA).map(([num, data]) => `
    <option value="${num}" ${num == selectedArcanaNum ? 'selected' : ''}>
      ${num}: ${data.name}
    </option>
  `).join('');

  let html = `
    <div class="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl box-style">
      <h2 class="text-3xl font-extrabold mb-6 text-center text-white">View Characters by Arcana</h2>
      <form id="view-arcana-form" class="mb-8">
        <label for="arcana-select" class="block text-lg font-medium mb-2 text-gray-300">Select Arcana:</label>
        <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
          <select id="arcana-select" name="arcana" required
                  class="flex-grow p-3 rounded-lg bg-gray-700 text-white border-2 border-gray-600 focus:border-persona-yellow focus:ring-persona-yellow transition duration-150">
            <option value="" disabled ${selectedArcanaNum === null ? 'selected' : ''}>Select an Arcana</option>
            ${arcanaOptionsHtml}
          </select>
          <button type="submit" class="p-3 rounded-lg text-black font-black uppercase btn-yellow shadow-lg hover:opacity-90 transition duration-150 flex-shrink-0">
            Search
          </button>
        </div>
      </form>
  `;

  if (arcanaData) {
    const charListHtml = relatedChars.length > 0 ? relatedChars.map(char => `
      <div class="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 p-4 bg-gray-700 rounded-xl shadow-md transition transform hover:bg-gray-600 duration-150">
        <img src="./${char.char_image}" alt="${char.name}" class="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 flex-shrink-0" loading="lazy">
        <div class="text-center sm:text-left">
          <p class="font-bold text-xl text-white">${char.name}</p>
          <p class="text-md text-gray-300 mb-1">Game: ${char.game}</p>
          <p class="text-xs text-yellow-400 font-medium"><span class="text-gray-300">Arcana: </span>
            ${char.arcana.map(num =>
              `<span class="bg-yellow-800 px-2 py-0.5 rounded-full text-xs inline-block">${getArcanaName(num)}</span>`
            ).join(', ')}
          </p>
        </div>
      </div>
    `).join('') : `
      <div class="p-4 bg-gray-700 rounded-lg text-center col-span-2">
        <p class="text-lg text-gray-400">No characters found for the Arcana ${arcanaData.name}.</p>
      </div>
    `;

    html += `
      <div class="mt-8">
        <h3 class="text-2xl font-bold mb-4 border-b pb-2 border-yellow-600">Arcana Related Characters: ${arcanaData.name}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${charListHtml}
        </div>
      </div>
    `;
  } else if (selectedArcanaNum !== null) {
    html += `
      <div class="mt-8 p-4 bg-red-900/50 rounded-lg text-center">
        <p class="text-xl">Arcana invalid or missing. Please select a valid option.</p>
      </div>
    `;
  } else {
    html += `
      <div class="mt-8 p-4 bg-gray-700 rounded-lg text-center">
        <p class="text-xl text-gray-300">Select an Arcana above to see related characters!</p>
      </div>
    `;
  }

  html += `</div>${renderFooter()}`;
  appContainer.innerHTML = html;

  document.getElementById('view-arcana-form').addEventListener('submit', handleViewArcanaSubmit);
}