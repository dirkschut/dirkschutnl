//Returns the HTML for the given badges array
function getBadgesString(badgesToRender){

    //Sort badges by date in descending order
    let sortable = [];
    for(badgeName in badgesToRender){
        sortable.push([badgeName, badgesToRender[badgeName].awarded]);
    }
    sortable.sort(function(a, b){
        return b[1] - a[1];
    });

    let badgesString = "<div class='card-deck badgesRow'>";
    let colCounter = 0;

    for(tempID in sortable){
        let badgeName = sortable[tempID][0];
        let badgeImg;
        let badgeVerify;
        let badgeSource;
        let badgeSourceURL;

        //Make badges into rows
        if(colCounter == 3){
            colCounter = 0;
            badgesString += "</div><div class='card-deck badgesRow'>";
        }
        colCounter++;

        //Set badge values
        switch(badgesToRender[badgeName].type){
            case TYPE_BADGR_CUSTOM:
                badgeImg = "https://api.badgr.io/public/assertions/" + badgesToRender[badgeName].id + "/image";
                badgeVerify = "https://badgecheck.io?url=https://api.badgr.io/public/assertions/" + badgesToRender[badgeName].id + "?identity__email=" + EMAILFORURL;
                badgeSource = "Badgr";
                badgeSourceURL = "https://badgrteam.badgr.com/public/assertions/" + badgesToRender[badgeName].id + "?identity__email=" + EMAILFORURL;
                break;
            case TYPE_BADGECOLLECT_CUSTOM:
                badgeImg = badgesToRender[badgeName].icon;
                badgeSource = "BadgeCollect";
                badgeSourceURL = "https://badgecollect.app/profile/" + BADGECOLLECTPROFILE + "?assertion=" + badgesToRender[badgeName].id;
                break;
        }

        //Create badge String
        badgesString += "<div class='myBadge card'>";
        badgesString += "<div class='card-header'><h5 class='card-title'>" + badgeName + "</h5></div>";
        badgesString += "<div class='card-body'>";
        badgesString += "<img class='badgeImg' src='" + badgeImg + "'/>";
        badgesString += "<h6 class='card-subtitle'>Awarded: " + new Date(badgesToRender[badgeName].awarded).toDateString() + "</h6>";
        badgesString += "Source: " + badgeSource + "<br />";
        badgesString += "Issuer: <a href='" + badgesToRender[badgeName].issuerURL + "'>" + badgesToRender[badgeName].issuer + "</a><br />";
        badgesString += "</p>";

        badgesString += "</div>";
        badgesString += "<div class='card-footer'>";
        let first = true;
        for(category in badgesToRender[badgeName].categories){
            if(first){
                first = false;
            }else{
                badgesString += ", ";
            }
            badgesString += "<a href='#' onclick='onCategoryClick(\"" + badgesToRender[badgeName].categories[category] + "\")'>" + badgesToRender[badgeName].categories[category] + "</a>";
        }
        
        badgesString += "<div class='btn-group badgeButtons' role='group' aria-label='Basic example'><a class='btn btn-outline-secondary' role='button' target='_blank' href='" + badgeVerify + "'><img class='icon' src='img/cert.svg' /></a>";
        badgesString += "<a class='btn btn-outline-secondary' role='button' target='_blank' href='" + badgeSourceURL + "'><img class='icon' src='img/cloud.svg' /></a></div>";
        badgesString += "</div>";
        badgesString += "</div>";
    }


    badgesString += "</div>";
    return badgesString;
}

//Returns the badges object of the badges with the given category
function getBadgesByCategory(category){
    let tempBadges = {};
    for(badgeName in badgeData){
        if(badgeData[badgeName].categories.includes(category)){
            tempBadges[badgeName] = badgeData[badgeName];
        }
    }
    return tempBadges;
}

//Render the badges of a given category
function renderBadgesCategory(category){
    let pageString = "<h1>" + category + "</h1>";
    pageString += getBadgesString(getBadgesByCategory(category));
    $("main").html(pageString);
}

//Render all the badges without a filter
function renderAllBadges(){
    let pageString = "<h1>All Badges</h1>";
    pageString += getBadgesString(badgeData);
    $("main").html(pageString);
}

//Sets the category and calls the loadPage when a category is clicked
function onCategoryClick(category){
    console.log(category);
    if(checkCategoryHasBadges(category)){
        localStorage.setItem("category", category);
        loadPage("category");
    }
}

//Check to see if a given category has badges
function checkCategoryHasBadges(category){
    for(badgeName in badgeData){
        if(badgeData[badgeName].categories.includes(category)){
            return true;
        }
    }
    return false;
}