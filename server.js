// DEPENDENCIES
const app = require("./app.js")

// CONFIGURATION
require("dotenv").config()
const PORT = process.env.PORT || 3377

// LISTEN
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})