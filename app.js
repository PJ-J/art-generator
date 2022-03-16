class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  describe() {
    console.log("describe");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();

    this.radius = radius;
  }

  buildCircle() {
    function describe() {
      console.log("describe circle!");
      $("#panelShape").val("Circle");
      $("#panelWidth").val(radiusval * 2);
      $("#panelHeight").val(radiusval * 2);
      $("#panelRadius").val(radiusval);
      $("#panelArea").val(Math.PI * Math.pow(radiusval, 2));
      $("#panelPerimeter").val(2 * Math.PI * radiusval);
    }
    let radiusval = $("#radius").val();
    let randomX = Math.floor(Math.random() * (600 - Number(radiusval * 2)));
    console.log(randomX);
    let randomY = Math.floor(Math.random() * (600 - Number(radiusval * 2)));
    console.log(randomY);

    let div = $("<div>");
    div.id = "circle";
    div.addClass("inside");
    div.css("top", `${randomY}px`);
    div.css("left", `${randomX}px`);
    div.css("height", this.radius * 2);
    div.css("width", this.radius * 2);
    div.css("border-radius", "50%");
    div.css("background", "purple");
    div.appendTo($("#shapes"));
    div.on("click", function () {
      describe();
    });
    div.on("dblclick", function () {
      div.remove();
      $("#panelShape").val("");
      $("#panelWidth").val("");
      $("#panelHeight").val("");
      $("#panelRadius").val("");
      $("#panelArea").val("");
      $("#panelPerimeter").val("");
    });
  }
}
$("#circleBtn").on("click", function () {
  let c1 = new Circle($("#radius").val());

  c1.buildCircle();

  console.log(c1);
});

class Triangle extends Shape {
  constructor(height) {
    super();
    this.height = height;
  }
  makeTriangle() {
    function describe() {
      console.log("describe triangle");
      $("#panelShape").val("Triangle");
      $("#panelWidth").val(heightVal);
      $("#panelHeight").val(heightVal);
      $("#panelRadius").val("N/A");
      $("#panelArea").val(0.5 * heightVal * heightVal);
      $("#panelPerimeter").val(Math.sqrt(heightVal + heightVal));
    }
    let heightVal = $("#triHeight").val();
    let randomX = Math.floor(Math.random() * (600 - Number(heightVal)));
    console.log(randomX);
    let randomY = Math.floor(Math.random() * (600 - Number(heightVal)));
    console.log(randomY);

    let div = $("<div>");
    div.addClass("inside");
    div.css("top", `${randomY}px`);
    div.css("left", `${randomX}px`);
    div.css("height", "0");
    div.css("width", "0");
    div.css("border-bottom", `${this.height}px solid yellow`);
    div.css("border-right", `${this.height}px solid transparent`);
    div.appendTo($("#shapes"));
    div.on("click", function () {
      describe();
    });
    div.on("dblclick", function () {
      div.remove();
      $("#panelShape").val("");
      $("#panelWidth").val("");
      $("#panelHeight").val("");
      $("#panelRadius").val("");
      $("#panelArea").val("");
      $("#panelPerimeter").val("");
    });
  }
}
$("#triBtn").on("click", function () {
  let t1 = new Triangle($("#triHeight").val());
  t1.makeTriangle();

  console.log(t1);
});

class Rectangle extends Shape {
  constructor(height, width) {
    super(height, width);
  }
  makeRectangle() {
    function describe() {
      console.log("describe rectangle");
      $("#panelShape").val("Rectangle");
      $("#panelWidth").val(widthVal);
      $("#panelHeight").val(heightVal);
      $("#panelRadius").val("N/A");
      $("#panelArea").val(heightVal * widthVal);
      $("#panelPerimeter").val(heightVal * 2 + widthVal * 2);
    }
    let heightVal = $("#rHeight").val();
    let widthVal = $("#rWidth").val();
    let randomX = Math.floor(Math.random() * (600 - Number(widthVal)));
    console.log(randomX);
    let randomY = Math.floor(Math.random() * (600 - Number(heightVal)));
    console.log(randomY);

    let div = $("<div>");
    div.addClass("inside");
    div.css("top", `${randomY}px`);
    div.css("left", `${randomX}px`);
    div.css("background", "green");
    div.css("height", this.height);
    div.css("width", this.width);
    div.appendTo($("#shapes"));
    div.on("click", function () {
      describe();
    });
    div.on("dblclick", function () {
      div.remove();
      $("#panelShape").val("");
      $("#panelWidth").val("");
      $("#panelHeight").val("");
      $("#panelRadius").val("");
      $("#panelArea").val("");
      $("#panelPerimeter").val("");
    });
  }
}
$("#rectBtn").on("click", function () {
  let r1 = new Rectangle($("#rHeight").val(), $("#rWidth").val());
  r1.makeRectangle();
  console.log(r1);
});

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }
  makeSquare() {
    function describe() {
      console.log("describe square");
      $("#panelShape").val("Square");
      $("#panelWidth").val(sideVal);
      $("#panelHeight").val(sideVal);
      $("#panelRadius").val("N/A");
      $("#panelArea").val(Math.pow(sideVal, 2));
      $("#panelPerimeter").val(sideVal * 4);
    }

    // let sideVal = $("#sideLength").val();
    let sideVal = Math.floor(Math.random() * 300);
    let randomX = Math.floor(Math.random() * (600 - sideVal));
    console.log(randomX);
    let randomY = Math.floor(Math.random() * (600 - sideVal));
    console.log(randomY);
    let div = $("<div>");
    div.addClass("inside");
    div.appendTo($("#shapes"));

    div.css("top", `${randomY}px`);
    div.css("left", `${randomX}px`);
    div.css("background", "red");
    div.css("height", this.sideLength);
    div.css("width", this.sideLength);

    div.on("click", function () {
      describe();
    });
    div.on("dblclick", function () {
      div.remove();
      $("#panelShape").val("");
      $("#panelWidth").val("");
      $("#panelHeight").val("");
      $("#panelRadius").val("");
      $("#panelArea").val("");
      $("#panelPerimeter").val("");
    });
  }
}
$("#squBtn").on("click", function () {
  let s1 = new Square($("#sideLength").val());

  s1.makeSquare();

  console.log(s1);
});
$("#randomBtn").on("click", function () {
  let randShape = Math.floor(Math.random() * 4);
  switch (randShape) {
    case 0:
      let c1 = new Circle(Math.floor(Math.random() * 150));
      c1.buildCircle();
      console.log(c1);
      break;
    case 1:
      let t1 = new Triangle(Math.floor(Math.random() * 300));
      t1.makeTriangle();
      console.log(t1);
      break;
    case 2:
      let r1 = new Rectangle((Math.floor(Math.random() * 300)),(Math.floor(Math.random() * 300)));
      r1.makeRectangle();
      console.log(r1);
      break;
    case 3:
      let s1 = new Square(Math.floor(Math.random() * 300));
      s1.makeSquare();
      console.log(s1);
      break;
    default:
    // code block
  }
  
  // s1.makeSquare();

  // console.log(s1);
});
