//Returns an HTML string of the given projects, sorted by createddate.
function getProjectsString(projectsToRender){
    let sortable = [];
    for(tempProject in projectsToRender){
        sortable.push([tempProject, projectsToRender[tempProject].createddate]);
    }
    sortable.sort(function(a, b){
        return b[1] - a[1];
    });

    let projectsString = "<div class='row'>";

    for(projectID in sortable){
        let projectName = sortable[projectID][0];
        let tempProject = projectData[projectName];

        switch(tempProject.type){
            case PROJECTTYPE_PROGRAMMING:
                projectsString += "<div class='col-md-4 project'>";
                projectsString += "<div class='buttons'>";
                projectsString += "<a class='btn btn-outline-secondary' role='button' target='_blank' href='" + tempProject.source + "'><img class='icon' src='img/src.svg' /></a>";
                if(tempProject.location != null){
                    projectsString += "<a class='btn btn-outline-secondary' role='button' target='_blank' href='" + tempProject.location + "'><img class='icon' src='img/live.svg' /></a>";
                }
                projectsString += "</div>";
                
                projectsString += "<h3 class='projectTitle'>" + projectName + "</h3>";

                projectsString += "<p>Created: " + tempProject.createddate + "</p>";
                projectsString += "<p>" + tempProject.description + "</p>";

                //Render the Releases
                let releases = [];
                for(tempRelease in tempProject.releases){
                    releases.push([tempRelease, tempProject.releases[tempRelease].releasedate]);
                }
                sortable.sort(function(a, b){
                    return b[1] - a[1];
                });

                if(releases.length > 0){
                    let tempRelease = tempProject.releases[releases[0][0]];
                    projectsString += "<div class='release'>";
                    projectsString += "<div class='buttons'>";
                    projectsString += "<a class='btn btn-outline-secondary' role='button' target='_blank' href='" + tempRelease.download + "'><img class='icon' src='img/down.svg' /></a>";
                    projectsString += "<a class='btn btn-outline-secondary' role='button' target='_blank' href='" + tempRelease.URL + "'><img class='icon' src='img/info.svg' /></a>";
                    projectsString += "</div>";
                    projectsString += "<h4>" + releases[0][0] + "</h4>"
                    projectsString += "<p>Released: " + tempRelease.releasedate + "</p>";
                    projectsString += "</div>";
                }

                //Render the categories
                projectsString += "<div class='projectCategories'>";
                let first = true;
                for(category in tempProject.categories){
                    if(first){
                        first = false;
                    }else{
                        projectsString += ", ";
                    }
                    projectsString += "<a href='#' onclick='onProjectCategoryClick(\"" + tempProject.categories[category] + "\")'>" + tempProject.categories[category] + "</a>";
                }

                projectsString += "</div>";
                projectsString += "</div>";
                break;
        }
    }

    projectsString += "</div>";
    return projectsString;
}

//Returns all the projects with a given category.
function getProjectsByCategory(category){
    let tempProjects = {};
    for(tempProject in projectData){
        if(projectData[tempProject].categories.includes(category)){
            tempProjects[tempProject] = projectData[tempProject];
        }
    }
    return tempProjects;
}

//Render all the projects without a filter
function renderAllProjects(){
    let pageString = "<h1>All Projects</h1>";
    pageString += getProjectsString(projectData);
    $("main").html(pageString);
}

//Renders all the projects of a given category as a page
function renderProjectsCategory(category){
    console.log(category);
    let pageString = "<h1>" + category + "</h1>";
    pageString += getProjectsString(getProjectsByCategory(category));
    $("main").html(pageString);
}

//Sets the category and calls the loadPage when a category is clicked
function onProjectCategoryClick(category){
    console.log(category);
    localStorage.setItem("projectCategory", category);
    loadPage("projectCategory");
}