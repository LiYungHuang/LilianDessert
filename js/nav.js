window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var navnext
  if (document.getElementById("griditem")){
    navnext = document.getElementById("griditem")
  } else {
    navnext = document.getElementById("mapcontainer")
  }

  if (window.pageYOffset > 120) {
    document.getElementsByTagName("img")[1].src = `image/01_index/LilianDessert.png`;
    document.getElementsByTagName("img")[1].style = `left:12%; max-height:50px; margin-right:50px`;
    document.getElementById("nav").style = `position:fixed;top:0;right:0;`;
    navnext.classList.add("navnext");
  } else {
      document.getElementsByTagName("img")[1].removeAttribute("src");
      document.getElementsByTagName("img")[1].removeAttribute("style");
      document.getElementById("nav").style = `position: sticky;`;
      navnext.classList.remove("navnext");
  }

}
