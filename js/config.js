// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "Manehattan Project 2.0";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = false;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = false;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = false;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Enjoy your stay!",
  "This loading screen is made by Exsite."
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "mhls1.png";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
