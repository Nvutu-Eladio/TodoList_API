const mongoose = require('mongoose')

try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
     console.log('conectado com sucesso'));
} catch (error) {
    console.log('falha na conexao'+err)
}

require('./Task')