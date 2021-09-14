var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

// db가 작동되는 것을 모니터링하기 위한 event 핸들러 등록
const dbConn = mongoose.connection;

dbConn.once("open", () => {
  console.log("MongoDB Open OK!!!");
});
dbConn.on("error", () => {
  console.error;
});

// confing/mongoConfigSample.json에 Atlas USERID & PASSWORD를 등록한 후
// mongoConfig.json으로 변경한 다음 실행하시오.
const mongoConfig = require("./config/mongoConfig.json");
const mongoAtlas = `mongodb+srv://${mongoConfig.USERID}:${mongoConfig.PASSWORD}@cluster0.gxw4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// mongoose.connect("mongodb://localhost:27017/dbms");
mongoose.connect(mongoAtlas);
// 최신버전은 저뒤에 저장소이름을 새로 적었을 때
// 저절로 생성해준다

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
