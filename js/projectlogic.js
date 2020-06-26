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
                projectsString += "<div class='col-md-4'><h3>" + projectName + "</h3>";
                projectsString += "<p>Created: " + tempProject.createddate + "</p>";
                projectsString += "<p>" + tempProject.description + "</p>";
                projectsString += "<a class='btn btn-primary' role='button' target='_blank' href='" + tempProject.source + "'>Source Code</a>";

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
                    projectsString += "<h4>" + releases[0][0] + "</h4>"
                    projectsString += "<p>Released: " + tempRelease.releasedate + "</p>";
                    projectsString += "<a class='btn btn-primary' role='button' target='_blank' href='" + tempRelease.download + "'>Download</a>";
                    projectsString += "<a class='btn btn-secondary' role='button' target='_blank' href='" + tempRelease.URL + "'>View</a>";
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