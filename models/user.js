const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: { 
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  zip_code: {
    type: Number,
    min: [100, "コードの桁が短いです。"],
    max: 999
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "course"
  }]
});

// Define Instance Methods
// getInfo <-- instance method
userSchema.methods.getInfo = function() {
  return `Name: ${ this.name } Email: ${ this.email } Zip Code: ${ this.zip_code}`;
};
  
// // findUsers #1 <-- class method
// userSchema.statics.findUsers = function(zip_code, cb) {
  //   this.model("User")
  //   .find({ zip_code: zip_code }, cb);
  // };
  
// // findUsers #2 <-- class method
// 定義側のメソッドに変数『query』としとくと、
// 実行側のメソッドでよしなに処理できるのが便利なので、
// こういうハンドリングを身につけるが吉。
userSchema.statics.findUsers = function (query, cb) {
  this.model("User")
  .find(query, cb);
};

// // 動かなかった教科書のコード
// userSchema.methods.findUsers = function() {
//     return this.model("User")
//     .find({ zip_code: this.zip_code })
//     .exec();
//   };

// DBにcollectionがなければ、ここで命名したものが、
// Caps無し、複数形で生成される。
// Mongooseがそのように勝手に命名することを理解したうえで、
// モデル名は『Caps、単数形』で、
// モデルのファイル名は『Caps無し、単数形』命名する方針でいく。
// なお、requireした側のモデルインスタンスは『Caps、単数形』に合わすことにする。
module.exports = mongoose.model("User", userSchema);
