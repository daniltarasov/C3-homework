 area.value = localStorage.getItem('area');
    area.oninput = () => {
      localStorage.setItem('area', "Ваш город-"+""+area.value)
      
    };



    [].slice.call(document.querySelectorAll(".check")).forEach(function(el) {
  el.onchange = function() {
     localStorage.setItem(el.id, el.checked);
  };
  if (localStorage.getItem(el.id) === "true") {
    el.checked = true;
    el.disabled = "disabled";
  }

})