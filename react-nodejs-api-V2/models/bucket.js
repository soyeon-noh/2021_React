const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucket = Schema({
  b_id: String,
  b_title: String,
  b_start_date: String,
  b_flag: Number,
  b_end_date: String,
  b_end_check: Boolean,
  b_cancel: Boolean,
});

// bucketlist : Collection 이름
// bucketlists : 실제 DB에 저장되는 이름
module.exports = mongoose.model("bucketlist", bucket);
