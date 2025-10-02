/**
 * Reduces a number to an arcana value (0–21).
 * 22 becomes 0.
 * If the sum is greater than 21, add the digits again.
 * @param {number} n
 * @returns {number}
 */
function reduceNumber(n) {
  if (n === 22) return 0;
  while (n > 21) {
    let s = String(n)
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0);
    if (s === 22) return 0;
    n = s;
  }
  return n;
}

/**
 * Calculates the arcana number from a date (YYYY-MM-DD).
 * @param {string} dobStr
 * @returns {[number|null, string|null]} [arcanaNumber, errorMessage]
 */
function calculateArcanaByDOB(dobStr) {
  try {
    const [year, month, day] = dobStr.split('-').map(Number);
    if (!year || !month || !day) {
      return [null, "Invalid date format. Please use YYYY-MM-DD."];
    }

    const dateDigits = `${String(year)}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}`;
    let initialSum = 0;
    for (const digit of dateDigits) {
      initialSum += parseInt(digit, 10);
    }

    const arcanaNumber = reduceNumber(initialSum);
    return [arcanaNumber, null];
  } catch (e) {
    console.error("Calculation Error:", e);
    return [null, "An error occurred during calculation. Please check the date."];
  }
}

/**
 * Returns the name of the arcana given its number.
 * @param {number} num
 * @returns {string}
 */
function getArcanaName(num) {
  return ARCANAS_DATA[num] ? ARCANAS_DATA[num].name : String(num);
}