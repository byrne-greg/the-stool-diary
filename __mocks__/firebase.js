const firebaseAuth = require("../src/components/firebase/__mocks__/firebase").firebaseAuth
module.exports = {
  auth: () => ({ ...firebaseAuth })
}