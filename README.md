# validate-request-fields

A simple utility to validate required fields in an object. This package allows you to check for missing fields in your data object, supporting both an array of fields and individual field names.

## Installation

Install the package via npm:

```bash
npm install validate-request-fields
```

## Usage

### Validate with an Array of Field Names

You can pass an array of field names to validate:

```javascript
const validateFields = require("validate-request-fields");

const data = { name: "John", age: 30 };
const missingFields = validateFields(data, ["name", "email", "age"]);
console.log(missingFields); // Output: ['email']
```

### Validate with Individual Field Names

Alternatively, you can pass individual field names as arguments:

```javascript
const validateFields = require("validate-request-fields");

const data = { name: "John", age: 30 };
const missingFields = validateFields(data, "name", "email", "age");
console.log(missingFields); // Output: ['email']
```

## How It Works

1. Pass the object to validate as the first argument.
2. Provide the fields to check as either an array or individual arguments.
3. The function will return an array of missing field names.

## Example in Express.js

Here is an example of using `validate-request-fields` in an Express.js route handler:

```javascript
const validateFields = require("validate-request-fields");

app.post("/create-order", (req, res) => {
  const missingFields = validateFields(req.body, [
    "productId",
    "contact",
    "country",
    "firstName",
    "lastName",
    "city",
    "postalCode",
    "address",
  ]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
      missingFields,
    });
  }

  // Proceed with the order creation logic
  res.status(200).json({
    success: true,
    message: "Order created successfully",
  });
});
```

## Features

- Supports both array and individual field name inputs.
- Lightweight and reusable.
- Helps ensure required data is provided in APIs.

## License

This package is licensed under the MIT License. See the `LICENSE` file for details.
