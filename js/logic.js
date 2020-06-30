//Waits for the page to be loaded
//I could have used a self-executing function or a function with a timeout that checks document.readyState
$(document).ready(function() {
    loadPage(localStorage.getItem("pageID"));
});

//Renders the given badges on the site
function renderHome(){
    let pageString = "<h1>Dirk Schut</h1>";
    pageString += "<p>Welcome to my personal site. Currently you can view the badges I have earned in the open badges system here. In the future I will also feature projects of mine on this site.</p>";
    pageString += "<h2>Featured Badges</h2>";
    pageString += getBadgesString(getBadgesByCategory(CAT_FEATURED));
    pageString += "<h2>Featured Projects</h2>";
    pageString += getProjectsString(getProjectsByCategory(PROJECTCAT_FEATURED));
    //I could have used document.getElementById("main").innerHTML instead
    $("main").html(pageString);
}

//Renders the about page
function renderAbout(){
    let aboutString = "<h1>About</h1>";
    aboutString += "<p>This is a project by me, <a href='https://github.com/mrDLSable'>Dirk Schut</a>, to showcase my <a href='https://openbadges.org/'> Open Badges</a> badges, and to show that I have some competency in web development for the <a href='https://badgecollect.app/badges/28f940d61f913065a2a0aa34c2b3c1cd'>Introductie Web & Mobile</a> (Introduction Web & Mobile) badge.</p>";
    aboutString += "<p>Regarding the test badges: They are there purely so that the system feels a bit more filled and for testing purposes. They will be removed once I earn more proper badges.</p>";
    aboutString += "<h2>Verifying BadgeCollect badges</h2><p>Right now it is not possible to verify <a href='https://badgecollect.app/'>badgecollect</a> badges with the <a href='https://badgecheck.io/'>badgecheck</a> system. I have been in contact with the team from badgecollect and they tell me that this is something they're working on.</p>";
    
    aboutString += "<h2>Attributions:</h2>";
    aboutString += "Icons made by <a href='https://www.flaticon.com/authors/pixel-perfect' title='Pixel perfect'>Pixel perfect</a> from <a href='https://www.flaticon.com/' title='Flaticon'> www.flaticon.com</a>";
    $("main").html(aboutString);
}

//Load the page with the given page ID
function loadPage(pageID){
    console.log("loading page: " + pageID);
    switch(pageID){
        case "home":
            renderHome();
            break;
        case "about":
            renderAbout();
            break;
        case "category":
            if(!checkCategoryHasBadges(localStorage.getItem("category"))){
                localStorage.setItem("category", CAT_FEATURED);
            }
            renderBadgesCategory(localStorage.getItem("category"));
            break;
        case "allBadges":
            renderAllBadges();
            break;
        case "allProjects":
            renderAllProjects();
            break;
        case "projectCategory":
            renderProjectsCategory(localStorage.getItem("projectCategory"));
            break;
        default:
            console.log("Unknown page ID: " + pageID + ".");
            loadPage("home");
            break;
    }
}