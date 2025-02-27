// index.js
/**
 * Validate required fields in an object.
 *
 * @param {Object} data - The object to validate.
 * @param {Array|string} fields - Array of field names or individual field names.
 * @returns {Array} - An array of missing field names.
 */
const validateFields = (data, fields) => {
  const requiredFields = Array.isArray(fields)
    ? fields
    : Array.from(arguments).slice(1);
  const missingFields = requiredFields.filter((field) => !data[field]);
  return missingFields;
};

module.exports = validateFields;
