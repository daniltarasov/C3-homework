function start(){

  area.value = getCookie('area');
  if (getCookie("saved") === "true") {
      let checkArr = document.querySelectorAll(".check");
      checkArr.forEach(function(elem){
        if (getCookie(elem.id) === "true"){
          elem.checked = true;
        }
        else {
          elem.checked = false;
        }
        elem.disabled = "disabled";
      });
  }
  console.log(document.cookie);
}

function getCookie(c_name) {
    console.log(document.cookie);
    let matches = document.cookie.match(new RegExp("(?:^|; )" + c_name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : "";
}

function setCookie(name, value, age) {
    value = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; max-age=' + age;
    console.log(value);
    // document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';max-age=' + age;
    document.cookie = value;
}

function deleteCookie(name) {
    setCookie(name, "", "-1");
}

area.oninput = () => {
  setCookie('area', "Ваш город-"+""+area.value, 3600)
};

document.getElementById('save').onclick = function () {
  deleteCookie("area");
  area.value = "";
  console.log(document.cookie);
}

document.getElementById('saveChkbox').onclick = function () {
      let checkArr = document.querySelectorAll(".check");
      checkArr.forEach(function(elem){
          setCookie(elem.id, elem.checked, 3600);
      });
      setCookie("saved", "true")
      console.log(document.cookie);
}
