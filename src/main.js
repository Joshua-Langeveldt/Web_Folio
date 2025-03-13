import { createApp } from 'vue';
import App from './App.vue';
import $ from "jquery";

const app = createApp(App);
app.mount('#app');

// Cache selectors
var lastId,
  topMenu = $("#navbar-nav"),
  topMenuHeight = topMenu.outerHeight() + 1,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

var sections = [];
$("#navbar-nav li").each(function() {
  sections.push(
    $(this)
      .find("a")
      .attr("href")
  );
});
sections = sections.map((x) => x.slice(1));
console.log("Sections: ", sections);

// Bind to scroll
$(window).on("scroll", function() {
  var fromTop = $(this).scrollTop() + topMenuHeight;
  console.log("From top: ", fromTop);

  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop) return this;
  });
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";
  console.log(`Current section: #${id}`);

  if (id !== "contact") {
    const currentIndex = sections.indexOf(id);
    console.log("Current Index: ", currentIndex);
    if (currentIndex !== -1) {
      var nextIndex = currentIndex + 1;
      var nextSection = sections[nextIndex];
      console.log(`Next section: #${nextSection}`);
      $(".arrow-icon").attr("href", `#${nextSection}`);
    } else {
      console.log("Next section undefined");
    }
  } else {
    $(".arrow-icon").attr("href", "#");
  }

  if (lastId !== id) {
    lastId = id;
    menuItems
      .parent()
      .removeClass("active-nav")
      .end()
      .filter("[href=\\#" + id + "]")
      .parent()
      .addClass("active-nav");
  }
});
