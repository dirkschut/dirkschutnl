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

    let badgesString = "<div class='row'>";

    for(tempID in sortable){
        let badgeName = sortable[tempID][0];
        switch(badgesToRender[badgeName].type){
            case TYPE_BADGR:
                badgesString += "<div class='col-md-4 myBadge'><iframe class='badgrBadge' src='" + badgesToRender[badgeName].src + "' title='" + badgeName + "'></iframe>";
                break;
            case TYPE_LOCAL:
                badgesString += "<div class='col-md-4 myBadge testBadge'><h3>" + badgeName + "</h3>";
                badgesString += "<p>Awarded: " + new Date(badgesToRender[badgeName].awarded).toDateString() + "</p>";
                break;
            case TYPE_BADGR_CUSTOM:
                badgesString += "<div class='col-md-4 myBadge'>";
                badgesString += "<img class='badgeImg' src='https://api.badgr.io/public/assertions/" + badgesToRender[badgeName].id + "/image'>";
                badgesString += "<h3>" + badgeName + "</h3>";
                badgesString += "<p>Awarded: " + new Date(badgesToRender[badgeName].awarded).toDateString() + "</p>";
                badgesString += "<a class='btn btn-primary' role='button' target='_blank' href='https://badgecheck.io?url=https://api.badgr.io/public/assertions/" + badgesToRender[badgeName].id + "?identity__email=" + EMAILFORURL + "'>Verify</a>";
                badgesString += "<a class='btn btn-secondary' role='button' target='_blank' href='https://badgrteam.badgr.com/public/assertions/" + badgesToRender[badgeName].id + "?identity__email=" + EMAILFORURL + "'>Badgr</a>";
                break;
            case TYPE_BADGECOLLECT_CUSTOM:
                badgesString += "<div class='col-md-4 myBadge'>";
                badgesString += "<img class='badgeImg' src='" + badgesToRender[badgeName].icon + "'>";
                badgesString += "<h3>" + badgeName + "</h3>";
                badgesString += "<p>Awarded: " + new Date(badgesToRender[badgeName].awarded).toDateString() + "</p>";
                badgesString += "<a class='btn btn-primary' role='button' target='_blank'>Verify</a>";
                badgesString += "<a class='btn btn-secondary' role='button' target='_blank' href='https://badgecollect.app/profile/" + BADGECOLLECTPROFILE + "?assertion=" + badgesToRender[badgeName].id + "'>BadgeCollect</a>";
                break;
        }

        badgesString += "<div class='badgesCategories'>";
        let first = true;
        for(category in badgesToRender[badgeName].categories){
            if(first){
                first = false;
            }else{
                badgesString += ", ";
            }
            badgesString += "<a href='#' onclick='onCategoryClick(\"" + badgesToRender[badgeName].categories[category] + "\")'>" + badgesToRender[badgeName].categories[category] + "</a>";
        }
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