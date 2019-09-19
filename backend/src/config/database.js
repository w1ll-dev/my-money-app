const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "The attribute '{PATH}' is required."
mongoose.Error.messages.Number.min = "The '{VALUE}' is less than the minimum limite of '{MIN}'."
mongoose.Error.messages.Number.max = "The '{VALUE}' is greater than the max limit of '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' is not valid to the attribute '{PATH}'."