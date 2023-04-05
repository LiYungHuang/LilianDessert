window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 119.5 || document.documentElement.scrollTop > 119.5) {
    document.getElementsByTagName("img")[1].src = `image/01_index/LilianDessert.png`;
    document.getElementsByTagName("img")[1].style = `left:12%; max-height:50px; margin-right:50px`;
    document.getElementById("nav").style = `position:fixed;top:0;right:0;background-color: #f7838d;`;
  } else {
    document.getElementsByTagName("img")[1].removeAttribute("src");
    document.getElementsByTagName("img")[1].removeAttribute("style");
    document.getElementById("nav").style = `position: absolute;`;
  }
}

