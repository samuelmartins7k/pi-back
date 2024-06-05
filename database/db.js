const mongoose = require(`mongoose`);

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.bmz6pqr.mongodb.net/?retryWrites=true&w=majority&appName=todolist",
      {
        useNewUrlParser: true,
        UseUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
