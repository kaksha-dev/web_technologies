const fooTimeOut = function () {
  console.log("Inside fooTimeout function");
};

const foo1 = function () {
  setTimeout(() => {
    var x = 100;
    document.getElementById("percntage").innerHTML =
      document.getElementById("percntage").innerHTML + x;
    console.log("Inside foo1 function");
  }, 5000);
  return foo2();
};

const foo2 = function () {
  console.log("Inside foo2 function");
  return "value from foo2";
};

console.log(foo1());

const catalog = {
  books: [{ author: "Gambardella, Matthew", title: "XML Developer's Guide" }],
};

// <book id="bk101">
//    <author>Gambardella, Matthew</author>
//    <title>XML Developer's Guide</title>
//    <genre>Computer</genre>
//    <price>44.95</price>
//    <publish_date>2000-10-01</publish_date>
//    <description>An in-depth look at creating applications
//    with XML.</description>
// </book>
