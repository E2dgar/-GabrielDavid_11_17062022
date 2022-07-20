const removeAccents = (text) =>
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

/**
 * Retourne une string sans accents, sans espace et en minuscule
 * @param {string} text
 * @returns
 */
const stringToClassName = (text) =>
    removeAccents(text).toLowerCase().replace(' ', '-');

export { stringToClassName };
