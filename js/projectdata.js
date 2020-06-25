const PROJECTTYPE_PROGRAMMING = 0;

const PROJECTCAT_FEATURED = 0;
const PROJECTCAT_PROGRAMMING = 1;

const PROGRAMMINGLANGUAGE_CSHARP = 0;

// The data containing all of my projects.
const projectData = {
    "Simple Rock Paper Scissors": {
        type: PROJECTTYPE_PROGRAMMING,
        categories: [PROJECTCAT_FEATURED, PROJECTCAT_PROGRAMMING],
        createddate: "June 24, 2020",
        description: "A very simple Rock Paper Scissors game played in a console window. Made to earn the badge Introductie C# (Introduction C#) which can be found <a target='_blank' href='https://badgecollect.app/badges/ea6269e5d329c62b96f29c1aceddedee'>here</a>.",
        programminglanguages: [PROGRAMMINGLANGUAGE_CSHARP],
        source: "https://github.com/mrDLSable/Simple-RockPaperScissors",
        releases: {
            "v0.1": {
                prerelease: true,
                URL: "https://github.com/mrDLSable/Simple-RockPaperScissors/releases/tag/v0.1",
                download: "https://github.com/mrDLSable/Simple-RockPaperScissors/releases/download/v0.1/RockPaperScissors_v0.1.zip",
                releasedate: "June 25, 2020",
            }
        },
    },
};