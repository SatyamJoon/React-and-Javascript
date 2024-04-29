function fib(num) {
    var a = 0;
    var b  = 1;
    var cout;

    for (var i = 0; i <= num; i++) {
      console.log(a);
      cout = a + b;
      a = b;
      b = cout;

    }

  }
  var n1 = fib(10);