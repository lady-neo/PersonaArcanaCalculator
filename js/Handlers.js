/**
 * Arcana Calculation Form Handler
 * @param {Event} event
 */
function handleCalculateSubmit(event) {
  event.preventDefault();
  const dob = document.getElementById('dob').value;

  if (!dob) {
    renderCalculate(null, "Please enter your date of birth.");
    return;
  }

  const [arcanaNumber, error] = calculateArcanaByDOB(dob);

  if (error) {
    renderCalculate(null, error);
  } else {
    // Update URL and render with result
    window.history.pushState(null, '', `#calculate?result=${arcanaNumber}`);
    renderCalculate(arcanaNumber, null);
  }
}

/**
 * Arcana Selection Form Handler
 * @param {Event} event
 */
function handleViewArcanaSubmit(event) {
  event.preventDefault();
  const arcanaSelect = document.getElementById('arcana-select');
  const selectedNum = parseInt(arcanaSelect.value, 10);

  if (!isNaN(selectedNum) && ARCANAS_DATA.hasOwnProperty(selectedNum)) {
    // Update URL and render with chosen arcana
    window.history.pushState(null, '', `#view_arcana?arcana=${selectedNum}`);
    renderViewArcana(selectedNum);
  } else {
    renderViewArcana(null);
  }
}