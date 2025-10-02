/**
 * Main routing function
 * Reads the URL hash (#home, #calculate, #view_arcana)
 * and calls the corresponding render
 */
function router() {
  let path = window.location.hash.slice(1) || 'home';
  let params = {};

  // If has parameters (#calculate?result=5, #view_arcana?arcana=3)
  if (path.includes('?')) {
    const [base, query] = path.split('?');
    path = base;
    const searchParams = new URLSearchParams(query);
    for (const [k, v] of searchParams.entries()) {
      params[k] = v;
    }
  }

  switch (path) {
    case 'calculate':
      const arcanaNum = params.result ? parseInt(params.result, 10) : null;
      renderCalculate(arcanaNum);
      break;

    case 'view_arcana':
      const selectedArcana = params.arcana ? parseInt(params.arcana, 10) : null;
      renderViewArcana(selectedArcana);
      break;

    case 'home':
    default:
      renderIndex();
      break;
  }
}

/**
 * Navigation helper to change URL hash
 * @param {string} path
 */
function navigate(path) {
  window.location.hash = path;
}