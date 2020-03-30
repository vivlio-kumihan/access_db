const mongoose = require("mongoose");
const User = require("./models/user");
const Course = require("./models/course");

mongoose.connect(
  "mongodb://localhost:27017/customer_card",
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true }
);

mongoose.Promise = global.Promise;

/////////////////////////////////////////////
// モデルで定義した関数を試す
// User.findOne({ email: "mari@email.com" })
//   .then(result => {
//     console.log(result.getInfo());
//   });

// //////////////////////////////////////// なぜそうなるのか　解決できない！
// User.findUser();
// => Uncaught TypeError: User.findUser is not a function

// User.find({})
//   .then(result => {
//     console.log(result.findUser());
//   });



/////////////////////////////////////////////
// リレーション
// var tmpCourse, tmpUser;

// Course.create({
//   title: "トマトソースのパスタ",
//   description: "トマトソースで和えたパスタ。",
//   zip_code: 626,
//   items: ["トマト", "パスタ"]
// })
// .then(course => tmpCourse = course);

// User.findOne({}).then(user => tmpUser = user);

// testUser.courses.push(testCourse);




/////////////////////////////////////////////
// ここから命令

// // findメソッド（合致するものを配列で返す）
// User.find({ email: /mari/ })
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// // findOneメソッド
// // notice: namaパラメーターをuniqueでvalidateした上で、フルネームで検索しないとダメなメソッド。
// User.findOne({ name: /和恵/ })
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
  
// // findByIdメソッド
// User.findById("5e80619f127b4832f3291d46")
//   .then(result => console.log(`name: ${result.name}, email: ${result.email}`))
//   .catch(error => console.log(error));

// // deleteOneメソッド
// const query = { name: "kaz" };
// User.deleteOne(query)
//   .then(console.log(`${ query.name }さんのドキュメントを削除しました。`))
//   .catch(error => console.log(error));

// // deleteManyメソッド
// User.deleteMany({})
//   .then(items => console.log(`${ items.n }件全てのドキュメントを削除しました。`))
//   .catch(error => console.log(error));

// // ドキュメント生成メソッド
User.create(
  {
    name: "mair",
    email: "mari@email.com",
    zip_code: 319
  },
  {
    name: "kaz",
    email: "kaz@email.com",
    zip_code: 319
  },
  {
    name: "nob",
    email: "nob@email.com",
    zip_code: 319
  },
  {
    name: "高広　茉李",
    email: "mari@j-email.com",
    zip_code: 331
  },
  {
    name: "高広　信之",
    email: "nob@j-email.com",
    zip_code: 331
  },
  {
    name: "高広　和恵",
    email: "kaz-t@j-email.com",
    zip_code: 331
  },
  {
    name: "吉田　和恵",
    email: "kaz-y@j-email.com",
    zip_code: 626
  })
  .then(ins => console.log(ins))
  .catch(error => console.log(error));