exports.parse = parse;
exports.format = format;

/**
 * Преобразуем обьект с информацией о модуле в rest совместимый формат
 * @param {ModuleInfo} moduleInfo - обьект содержащий информацию о модуле
 * @returns {string} строка в rest совместимом формате содержащую информацию о модуле
 */
function format(moduleInfo) {

}

/**
 * Преобразуем строку содержащую информацию о модуле в обьект
 * @param {string} str - строка в rest совместимом формате содержащая информацию о модуле
 * @returns {ModuleInfo} обьект содержащий информацию о модуле
 */
function parse(str) {
	//'~parent/subfolder/~child/subfolder'
}
