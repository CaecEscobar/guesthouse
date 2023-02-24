document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("menu[role=tablist]");

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    const tabButtons = tab.querySelectorAll("menu[role=tablist] > button");

    tabButtons.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        tabButtons.forEach((button) => {
          if (
            button.getAttribute("aria-controls") ===
            e.target.getAttribute("aria-controls")
          ) {
            button.setAttribute("aria-selected", true);
            openTab(e, tab);
          } else {
            button.setAttribute("aria-selected", false);
          }
        });
      })
    );
  }
});

function openTab(event, tab) {
  const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
  articles.forEach((p) => {
    p.setAttribute("hidden", true);
  });
  const article = tab.parentNode.querySelector(
    `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
  );
  article.removeAttribute("hidden");
}

function ShowDiv() {
  document.getElementById("startMenu").style.width = "300px";
  document.getElementById("startMenu").style.display = "block";
  document.getElementById("startMenu").style.position = "absolute";
  document.getElementById("show").style.display = "none";
  document.getElementById("hide").style.display = "block";
}

function HideDiv() {
  document.getElementById("startMenu").style.display = "none";
  document.getElementById("hide").style.display = "none";
  document.getElementById("show").style.display = "block";
}

function ShowWinamp() {
  // document.getElementById("app").style.display = "block";
  const app = document.getElementById("app");
  const webamp = new Webamp({
    initialTracks: [
      {
        metaData: {
          artist: "Guest House",
          title: "Selfless",
        },
        url: "./assets/music/01_guest_house_selfless_master.mp3",
        duration: 5.322286,
      },
      {
        metaData: {
          artist: "Guest House",
          title: "By Myself",
        },
        url: "./assets/music/02_guest_house_by_myself_master.mp3",
        duration: 5.322286,
      },
      {
        metaData: {
          artist: "Guest House",
          title: "No Longer Human",
        },
        url: "./assets/music/03_guest_house_no_longer_human_master.mp3",
        duration: 5.322286,
      },
      {
        metaData: {
          artist: "Guest House",
          title: "Glass Cannon '97",
        },
        url: "./assets/music/04_guest_house_glass_cannon_master.mp3",
        duration: 5.322286,
      },
      {
        metaData: {
          artist: "Guest House",
          title: "One Day",
        },
        url: "./assets/music/05_guest_house_one_day_master.mp3",
        duration: 5.322286,
      },
      {
        metaData: {
          artist: "Guest House",
          title: "Like Me",
        },
        url: "./assets/music/06_guest_house_like_me_master.mp3",
        duration: 5.322286,
      },
      {
        metaData: {
          artist: "Guest House",
          title: "I Shall Be Nothing",
        },
        url: "./assets/music/07_guest_house_i_shall_be_nothing_master.mp3",
        duration: 5.322286,
      },
      {
        metaData: {
          artist: "Guest House",
          title: "New Self",
        },
        url: "./assets/music/08_guest_house_new_self_master.mp3",
        duration: 5.322286,
      },
      {
        metaData: {
          artist: "Guest House",
          title: "Guest House",
        },
        url: "./assets/music/09_guest_house_guest_house_master.mp3",
        duration: 5.322286,
      },
      {
        metaData: {
          artist: "Guest House",
          title: "Don't Go",
        },
        url: "./assets/music/10_guest_house_dont_go_master.mp3",
        duration: 5.322286,
      },
    ],
    __butterchurnOptions: {
      importButterchurn: () => Promise.resolve(window.butterchurn),
      getPresets: () => {
        const presets = window.butterchurnPresets.getPresets();
        return Object.keys(presets).map((name) => {
          return {
            name,
            butterchurnPresetObject: presets[name],
          };
        });
      },
      butterchurnOpen: true,
    },
    __initialWindowLayout: {
      main: { position: { x: 0, y: 0 } },
      equalizer: { position: { x: 0, y: 116 } },
      playlist: { position: { x: 0, y: 232 }, size: [0, 4] },
      milkdrop: { position: { x: 275, y: 0 }, size: [7, 12] },
    },
  });

  webamp.renderWhenReady(app);
}

$(document).ready(function () {
  var url = $("#video-frame-1").attr("src");

  $("#selflessModal").on("hide.bs.modal", function () {
    $("#video-frame-1").attr("src", "");
    console.log("Unloaded");
  });

  $("#selflessModal").on("shown.bs.modal", function () {
    $("#video-frame-1").attr("src", url);
    console.log("Loaded");
  });
});

$(document).ready(function () {
  var url = $("#video-frame-2").attr("src");

  $("#bymyselfModal").on("hide.bs.modal", function () {
    $("#video-frame-2").attr("src", "");
    console.log("Unloaded");
  });

  $("#bymyselfModal").on("shown.bs.modal", function () {
    $("#video-frame-2").attr("src", url);
    console.log("Loaded");
  });
});

$(document).ready(function () {
  var url = $("#video-frame-3").attr("src");

  $("#nolongerhumanModal").on("hide.bs.modal", function () {
    $("#video-frame-3").attr("src", "");
    console.log("Unloaded");
  });

  $("#nolongerhumanModal").on("shown.bs.modal", function () {
    $("#video-frame-3").attr("src", url);
    console.log("Loaded");
  });
});

$(document).ready(function () {
  var url = $("#video-frame-4").attr("src");

  $("#glasscannonModal").on("hide.bs.modal", function () {
    $("#video-frame-4").attr("src", "");
    console.log("Unloaded");
  });

  $("#glasscannonModal").on("shown.bs.modal", function () {
    $("#video-frame-4").attr("src", url);
    console.log("Loaded");
  });
});

$(document).ready(function () {
  var url = $("#video-frame-5").attr("src");

  $("#onedayModal").on("hide.bs.modal", function () {
    $("#video-frame-5").attr("src", "");
    console.log("Unloaded");
  });

  $("#onedayModal").on("shown.bs.modal", function () {
    $("#video-frame-5").attr("src", url);
    console.log("Loaded");
  });
});

$(document).ready(function () {
  var url = $("#video-frame-6").attr("src");

  $("#likemeModal").on("hide.bs.modal", function () {
    $("#video-frame-6").attr("src", "");
    console.log("Unloaded");
  });

  $("#likemeModal").on("shown.bs.modal", function () {
    $("#video-frame-6").attr("src", url);
    console.log("Loaded");
  });
});

$(document).ready(function () {
  var url = $("#video-frame-7").attr("src");

  $("#nothingModal").on("hide.bs.modal", function () {
    $("#video-frame-7").attr("src", "");
    console.log("Unloaded");
  });

  $("#nothingModal").on("shown.bs.modal", function () {
    $("#video-frame-7").attr("src", url);
    console.log("Loaded");
  });
});

$(document).ready(function () {
  var url = $("#video-frame-8").attr("src");

  $("#newselfModal").on("hide.bs.modal", function () {
    $("#video-frame-8").attr("src", "");
    console.log("Unloaded");
  });

  $("#newselfModal").on("shown.bs.modal", function () {
    $("#video-frame-8").attr("src", url);
    console.log("Loaded");
  });
});

$(document).ready(function () {
  var url = $("#video-frame-9").attr("src");

  $("#guesthouseModal").on("hide.bs.modal", function () {
    $("#video-frame-9").attr("src", "");
    console.log("Unloaded");
  });

  $("#guesthouseModal").on("shown.bs.modal", function () {
    $("#video-frame-9").attr("src", url);
    console.log("Loaded");
  });
});

$(document).ready(function () {
  var url = $("#video-frame-10").attr("src");

  $("#dontgoModal").on("hide.bs.modal", function () {
    $("#video-frame-10").attr("src", "");
    console.log("Unloaded");
  });

  $("#dontgoModal").on("shown.bs.modal", function () {
    $("#video-frame-10").attr("src", url);
    console.log("Loaded");
  });
});

// function download() {
//   // document.getElementsByClassName("progreso").value = 30;
//   document.getElementsById("progreso").setAttribute("width", "1000px");
// }
