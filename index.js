/**
 * Validate required fields in an object.
 *
 * @param {Object} data - The object to validate.
 * @param {Array|string} fields - Array of field names or individual field names.
 * @returns {Array} - An array of missing field names.
 */
const validateFields = (data, fields) => {
  // If fields is an array, use it directly; otherwise, treat individual fields as an array.
  const requiredFields = Array.isArray(fields)
    ? fields
    : Array.from(arguments).slice(1); // This handles individual arguments

  const missingFields = requiredFields.filter(
    (field) => !data.hasOwnProperty(field)
  );
  return missingFields;
};

module.exports = validateFields;
