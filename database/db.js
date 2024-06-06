require ("dotenv").config()
const mongoose = require(`mongoose`);

const connectToDb = () => {

  mongoose
    .connect(
      process.env.MONGODB_URL,
      {
        useNewUrlParser: true,
        UseUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
