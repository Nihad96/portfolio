document.addEventListener("DOMContentLoaded", function () {
  const cookie = document.cookie
    .split("; ")
    .find((r) => r.startsWith("display_mode="));
  const mode = cookie ? cookie.split("=")[1] : "light";
  if (!cookie) {
    let expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie =
      "display_mode=" +
      mode +
      "; expires=" +
      expires.toUTCString() +
      "; path=/";
  }
  document.body.id = mode;
});

function menu(id) {
  document
    .getElementById(id + "_section")
    .scrollIntoView({ behavior: "smooth" });

  let past_active = document.getElementsByClassName("menu_active");
  past_active[0].classList.remove("menu_active");
  document.getElementById(id).classList.add("menu_active");
}

function link(url) {
  if (window.innerWidth > 800) {
    window.open(url);
  }
}

function setDisplayMode(actualDisplayMode) {
  let now = new Date();
  now.setFullYear(now.getFullYear() + 1); // + 1 year

  let setId = document.getElementById(actualDisplayMode);

  let button = document.getElementById("display_mode_button");

  if (actualDisplayMode === "dark") {
    document.cookie =
      "display_mode=light; expires=" + now.toUTCString() + "; path=/";
    setId.id = "light";
    button.setAttribute("onclick", "setDisplayMode('light')");
  } else {
    document.cookie =
      "display_mode=dark; expires=" + now.toUTCString() + "; path=/";
    setId.id = "dark";
    button.setAttribute("onclick", "setDisplayMode('dark')");
  }
}

content = document.getElementById("content");

premier_point = document.getElementById("projects_section").offsetHeight;

content.onscroll = function () {
  /* pos = document.getElementById('about_section').getBoundingClientRect();
  console.log(Math.round(pos.top));

  sections = document.getElementsByClassName('section');
  for(let i = 0; i < sections.length; i++) {
    let position = sections[i].getBoundingClientRect();
    if(position.top < 100) {
      console.log(sections[i].id);
    }
  } */
  /* if(content.scrollTop >= premier_point) {
    console.log('tata');
  } */
  /* if (document.body.scrollTop >= 200 ) {
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");
  } 
  else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");
  } */
};
