var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const { USERID, PASSWORD } = require("./config/mongoConfig");
const atlasURL =
  `mongodb+srv://` +
  `${USERID}` +
  `:${PASSWORD}@cluster0.gxw4m.mongodb.net/` +
  `myFirstDatabase?retryWrites=true&w=majority`;

const mongoose = require("mongoose");
// event를 발생시켜서 상태를 모니터링 하는 객체
const dbConn = mongoose.connection;
// 정상적으로 연결되었을 때 실행되는 event 핸들러
// 최초에 연결이 성공했을 때 한번만(once) 작동되도록 수행
// (on을하면 저절로 끊었다 연결했다 하는 경우가있어서 once로 한다)
dbConn.once("open", () => {
  console.log("MongoDB Open OK");
});

// 작동되는 과정에 오류가 발생하면 console에 오류메시지를 보여주기
// 방법 1
dbConn.on("error", () => {
  console.error;
});
//방법 2 매개변수
dbConn.on("error", (error) => {
  console.log(error);
});

mongoose.connect(atlasURL);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const apiRouter = require("./routes/apiRouter");

var app = express();

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
app.use("/api", apiRouter);

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
