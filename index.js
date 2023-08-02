// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const homeRouter = require("./routes/home");

// INIT
const PORT = process.env.PORT || 9100;
const app = express();
const DB =
  "mongodb+srv://vungopoyilv:dudOsIldGpVHvif1@cluster0.spc1mo0.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(homeRouter);
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`connected at port ${PORT}`);
});
