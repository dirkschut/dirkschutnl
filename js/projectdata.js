const PROJECTTYPE_PROGRAMMING = 0;

const PROJECTCAT_FEATURED = "Featured";
const PROJECTCAT_PROGRAMMING = "Programming";

const PROJECTCAT_CSHARP = "C#";
const PROJECTCAT_HTML5 = "HTML5";
const PROJECTCAT_CSS = "CSS";
const PROJECTCAT_JS = "JavaScript";
const PROJECTCAT_UNITY = "Unity";

// The data containing all of my projects.
const projectData = {
    "GPS Game": {
        type: PROJECTTYPE_PROGRAMMING,
        categories: [PROJECTCAT_FEATURED, PROJECTCAT_PROGRAMMING, PROJECTCAT_CSHARP, PROJECTCAT_UNITY],
        createddate: "July 05, 2020",
        description: "This project is a game I am making to learn more about Unity3D and GPS, and to encourage me to cycle to more different locations and to learn..",
        source: "https://github.com/mrDLSable/GPS-game",
        releases: {
            "v0.0.1": {
                prerelease: true,
                URL: "https://github.com/mrDLSable/GPS-game/releases/tag/v0.0.1",
                download: "https://github.com/mrDLSable/GPS-game/releases/download/v0.0.1/GPS.Game.v0.0.1.apk",
                releasedate: "July 06, 2020",
                info: "The very first demo of using GPS and map tiles as a basis for a game. In this version, a map is generated around the user as he walks around in the real world. Sometimes the game has to be launched twice for the permission system to work properly.",
            },
            "v0.0.2": {
                prerelease: true,
                URL: "https://github.com/mrDLSable/GPS-game/releases/tag/v0.0.2",
                download: "https://github.com/mrDLSable/GPS-game/releases/download/v0.0.2/GPS.Game.v0.0.2.apk",
                releasedate: "July 07, 2020",
                info: "This release gives you freedom to look around the map by panning and zooming using your fingers. <ul><li>Zoom by pinching two fingers on the screen</li><li>Pan by dragging one finger across the screen</li></ul>",
            },
            "v0.0.3": {
                prerelease: true,
                URL: "https://github.com/mrDLSable/GPS-game/releases/tag/v0.0.3",
                download: "https://github.com/mrDLSable/GPS-game/releases/download/v0.0.3/GPS.Game.v0.0.3.apk",
                releasedate: "July 08, 2020",
                info: "In this release, I have added loading and saving the game. Each tile now also records the last time you have visited. When you visit a tile a time is assigned when you can visit that tile again to gain a point in said tile. Currently, the time between earning points is equal to the points in the tile in hours, so if you have five points, you have to wait five hours to gain another point.",
            },
        },
    },
    "Simple Rock Paper Scissors": {
        type: PROJECTTYPE_PROGRAMMING,
        categories: [PROJECTCAT_PROGRAMMING, PROJECTCAT_CSHARP],
        createddate: "June 24, 2020",
        description: "A very simple Rock Paper Scissors game played in a console window. Made to earn the badge Introductie C# (Introduction C#) which can be found <a target='_blank' href='https://badgecollect.app/badges/ea6269e5d329c62b96f29c1aceddedee'>here</a>.",
        source: "https://github.com/mrDLSable/Simple-RockPaperScissors",
        releases: {
            "v0.1": {
                prerelease: true,
                URL: "https://github.com/mrDLSable/Simple-RockPaperScissors/releases/tag/v0.1",
                download: "https://github.com/mrDLSable/Simple-RockPaperScissors/releases/download/v0.1/RockPaperScissors_v0.1.zip",
                releasedate: "June 25, 2020",
                info: "A very simple Rock Paper Scissors game in the dotnet core console environment.",
            },
            "v0.2": {
                prerelease: true,
                URL: "https://github.com/mrDLSable/Simple-RockPaperScissors/releases/tag/v0.2",
                download: "https://github.com/mrDLSable/Simple-RockPaperScissors/releases/download/v0.2/RockPaperScissors_v0.2.zip",
                releasedate: "June 28, 2020",
                info: "Added some colours and options to automatically start the next turn and quit.",
            },
        },
    },
    "DirkSchut.nl": {
        type: PROJECTTYPE_PROGRAMMING,
        categories: [PROJECTCAT_FEATURED, PROJECTCAT_PROGRAMMING, PROJECTCAT_HTML5, PROJECTCAT_CSS, PROJECTCAT_JS],
        createddate: "June 18, 2020",
        description: "This is my personal website. I plan to use it as a portfolio to show things I have made as well as badges and certificates I have earned. I used my old project Open Badges Portfolio as a base for this site.",
        source: "https://github.com/mrDLSable/dirkschutnl",
        location: "https://dirkschut.nl",
    },
    "Open Badges Portfolio": {
        type: PROJECTTYPE_PROGRAMMING,
        categories: [PROJECTCAT_PROGRAMMING, PROJECTCAT_HTML5, PROJECTCAT_CSS, PROJECTCAT_JS],
        createddate: "May 01, 2020",
        description: "This is a website I created to display the open badges I earn. It was also used as the base for my website.",
        source: "https://github.com/mrDLSable/badges",
        location: "https://mrdlsable.github.io/badges/",
    },
    "Taivu": {
        type: PROJECTTYPE_PROGRAMMING,
        categories: [PROJECTCAT_PROGRAMMING, PROJECTCAT_HTML5, PROJECTCAT_CSS, PROJECTCAT_JS],
        createddate: "Jan 27, 2020",
        description: "Taivu (Trappen In A Void Universe) is the basics of an incremental game to be played in the browser.",
        source: "https://github.com/mrDLSable/taivu",
        location: "https://mrdlsable.github.io/taivu/",
    },
    "MathsApp": {
        type: PROJECTTYPE_PROGRAMMING,
        categories: [PROJECTCAT_PROGRAMMING, PROJECTCAT_CSHARP],
        createddate: "Dec 01, 2018",
        description: "An app that converts decimal to hexadecimal and binary.",
        source: "https://github.com/mrDLSable/MathsApp",
    },
    "Incremental": {
        type: PROJECTTYPE_PROGRAMMING,
        categories: [PROJECTCAT_FEATURED, PROJECTCAT_PROGRAMMING, PROJECTCAT_HTML5, PROJECTCAT_CSS, PROJECTCAT_JS],
        createddate: "Nov 16, 2018",
        description: "An incremental game I made to learn some javascript.",
        source: "https://github.com/mrDLSable/incremental",
        location: "https://mrdlsable.github.io/incremental/",
    },
};