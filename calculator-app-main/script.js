console.log("b");
var checktheme = document.getElementsByClassName("checktheme");
var resultbox = document.querySelector(".resultbox");
var calcbox = document.querySelector(".calcbox");
var reset = document.getElementById("reset");
var del = document.getElementById("del");
var equalto = document.getElementById("equalto");
var listitems = document.getElementsByClassName("digits1");
var colortheme = document.getElementsByClassName("colortheme1");
var headingp = document.getElementsByTagName("p");
var headinglabel = document.getElementsByTagName("label");
var buttons = document.getElementsByTagName("li");
var operator = document.getElementById("operator");
var OP = "=";
var y;
var x;
var ans = true;

// THEME

for (let c of checktheme) {
  c.addEventListener("click", function (e) {
    console.log(e.target.value);
    let c = e.target.value;
    if (c == "theme1") {
      document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
      document.body.style.color = "hsl(0, 0, 100%)";
      resultbox.style.backgroundColor = "hsl(224, 36%, 15%)";
      resultbox.style.color = "white";
      calcbox.style.backgroundColor = "hsl(223, 31%, 20%)";
      for (let l of listitems) {
        l.classList.remove("colortheme3");
        l.classList.remove("colortheme2");
        l.classList.add("colortheme1");
      }
      for (let p of headingp) p.style.color = "white";
      for (let h of headinglabel) h.style.color = "white";
      equalto.classList.remove("equaltocolortheme2", "equaltocolortheme3");
      reset.classList.remove("colorbuttontheme2", "colorbuttontheme3");
      del.classList.remove("colorbuttontheme2", "colorbuttontheme3");
      equalto.classList.add("equaltocolor");
      reset.classList.add("colorbutton");
      del.classList.add("colorbutton");
    } else if (c == "theme2") {
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
      document.body.style.color = "hsl(60, 10%, 19%)";
      resultbox.style.backgroundColor = "hsl(0, 0%, 93%)";
      resultbox.style.color = "hsl(60, 10%, 19%)";
      calcbox.style.backgroundColor = "hsl(0, 5%, 81%)";
      for (let l of listitems) {
        l.classList.remove("colortheme1");
        l.classList.remove("colortheme3");
        l.classList.add("colortheme2");
      }
      for (let p of headingp) p.style.color = "hsl(60, 10%, 19%)";
      for (let h of headinglabel) h.style.color = "hsl(60, 10%, 19%)";
      equalto.classList.remove("equaltocolor", "equaltocolortheme3");
      reset.classList.remove("colorbutton", "colorbuttontheme3");
      del.classList.remove("colorbutton", "colorbuttontheme3");
      equalto.classList.add("equaltocolortheme2");
      reset.classList.add("colorbuttontheme2");
      del.classList.add("colorbuttontheme2");
    } else {
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
      document.body.style.color = "hsl(52, 100%, 62%)";
      resultbox.style.backgroundColor = "hsl(268, 71%, 12%)";
      resultbox.style.color = "hsl(52, 100%, 62%)";
      calcbox.style.backgroundColor = "hsl(268, 71%, 12%)";
      for (let l of listitems) {
        l.classList.remove("colortheme1");
        l.classList.remove("colortheme2");
        l.classList.add("colortheme3");
      }
      for (let p of headingp) p.style.color = "hsl(52, 100%, 62%)";
      for (let h of headinglabel) h.style.color = "hsl(52, 100%, 62%)";
      equalto.classList.remove("equaltocolortheme2", "equaltocolor");
      reset.classList.remove("colorbuttontheme2", "colorbutton");
      del.classList.remove("colorbuttontheme2", "colorbutton");
      equalto.classList.add("equaltocolortheme3");
      reset.classList.add("colorbuttontheme3");
      del.classList.add("colorbuttontheme3");
    }
  });
}

// LOGIC
for (let b of buttons) {
  b.addEventListener("click", function (e) {
    // var regex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // var regex2 = ["+", "-", "/", "x"];

    if (ans == true) {
      y = "";
      x = "";
      OP = "";
      resultbox.innerHTML = "";
      ans = true;
    }

    if (e.target.innerHTML == "=") {
      console.log(y, x);
      if (OP == "+") {
        resultbox.innerHTML = parseFloat(x) + parseFloat(y);
      } else if (OP == "-") {
        resultbox.innerHTML = y - x;
      } else if (OP == "x") {
        resultbox.innerHTML = y * x;
      } else if (OP == "/") {
        resultbox.innerHTML = y / x;
      }
      if (isNaN(resultbox)) {
        ans = true;
        operator.innerHTML = "=";
      }
    } else if (e.target.innerHTML == "RESET") {
      y = "";
      x = "";
      OP = "";
      resultbox.innerHTML = "";
      operator.innerHTML = "=";
      ans = true;
    } else if (e.target.value != 88) {
      if (e.target.innerHTML == "DEL") {
        resultbox.innerHTML = resultbox.innerHTML.substring(0, x.length - 1);
        x = resultbox.innerHTML;
        ans = false;
      } else {
        resultbox.innerHTML += e.target.innerHTML;
        x = resultbox.innerHTML;
        ans = false;
      }
    } else if (e.target.value == 88) {
      OP = e.target.innerHTML;
      console.log(OP);
      y = x;
      resultbox.innerHTML = "";
      operator.innerHTML = OP;
    }

    if (resultbox.innerHTML.length >= 18) {
      resultbox.innerHTML = "Overflow";
      ans = true;
    }
  });
}
