"use sctrict";

var isGmod = false;
var isTest = false;
var totalFiles = 50;

/**
 * Gmod Called functions
 */
var GameDetails = (
  servername,
  serverurl,
  mapname,
  maxplayers,
  steamid,
  gamemode
) => {
  isGmod = true;
  if (!isTest) {
    loadAll();
  }

  if (Config.title) {
    $("#title").html(Config.title);
  } else {
    $("#title").html(servername);
  }
  $("#title").fadeIn();

  if (Config.enableMap) {
    $("#map").append(mapname);
    $("#map").fadeIn();
  } else {
    $("#map").hide();
  }

  if (Config.enableSteamID) {
    $("#steamid").html(steamid);
  }
  $("#steamid").fadeIn();
};

var SetFilesTotal = total => {
  totalFiles = total;
};

const SetFilesNeeded = needed => {
  let percentage = 100 - Math.round((needed / totalFiles) * 100);
  //   console.log(percentage);
  $(".overhaul").css("left", `${percentage}vw`);
};

let fileCount = 0;
const DownloadingFile = filename => {
  $("#history").prepend(`<div class="history-item">${filename}</div>`);
  $(".history-item").each((i, el) => {
    if (i > 10) {
      $(el).remove();
    }
    $(el).css("opacity", `${1 - i * 0.1}`);
  });
};

const SetStatusChanged = status => {
  console.log(status);
};

/**
 * External Functions
 */
const loadAll = () => {
  $("nav").fadeIn();
  $("main").fadeIn();
};
const loadBackground = () => {
  if (Config.backgroundImage) {
    $(".background").css(
      "background-image",
      `url("images/${Config.backgroundImage}")`
    );
  }
};

/**
 * Initial function
 */
$(document).ready(function() {
  loadBackground();
  // if it isn't loaded by gmod load manually
  setTimeout(() => {
    if (!isGmod) {
      isTest = true;
      loadAll();

      GameDetails(
        "Servername",
        "Serverurl",
        "Mapname",
        "Maxplayers",
        "SteamID",
        "Gamemode"
      );

      let totalFiles = 100;
      SetFilesTotal(totalFiles);

      let needed = totalFiles;
      setInterval(() => {
        if (needed > 0) {
          needed = needed - 1;
          SetFilesNeeded(needed);
          DownloadingFile(`Filename${needed}`);
        }
      }, 500);

      SetStatusChanged("Testing..");
    }
  }, 2000);
});
