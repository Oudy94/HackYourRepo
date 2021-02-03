"use strict";

export {addRepositoryNamesToDOM, changeRepoInfoToDOM, changeContributorsToDOM, addFailedToDOM}; 

function addRepositoryNamesToDOM(data){

    //add repositories name
    let repositoryName = `<option value="select-repo" selected disabled>Select a repository</option>`;
    for (const repository of data){
        repositoryName += `<option value="${repository.name}">${repository.name}</option>`;
    }
    const repoList = document.getElementById("app-header-list");
    repoList.innerHTML = repositoryName;
}

function changeRepoInfoToDOM(repositoriesObj){
    //change the repository information
    const repoName = document.getElementById("app-container-repo-box-name");
    const repoDescription = document.getElementById("app-container-repo-box-description");
    const repoForks = document.getElementById("app-container-repo-box-forks");
    const repoUpdated = document.getElementById("app-container-repo-box-updated");
    const repoList = document.getElementById("app-header-list");
    const repoID = repoList.selectedIndex - 1;

    if (repoID < 0)
        return
    repoName.textContent = repositoriesObj[repoID].name;
    repoDescription.textContent = repositoriesObj[repoID].description;
    repoForks.textContent = repositoriesObj[repoID].forks;
    repoUpdated.textContent = repositoriesObj[repoID].updated_at.replace(/[ tz]/gi, ' ');
}

function changeContributorsToDOM(contributorsObj, pageNumber){
    //add the contributors
    const contributorList = document.getElementById("app-container-contributors-box");
    let output = "";
    
    const contributorsObjPage = contributorsObj.slice((pageNumber - 1) * 5, pageNumber * 5);

    for (const contributor of contributorsObjPage){

        output += `
        <div class="app-container-contributors-box-list">
            <img src="${contributor.avatar_url}" class="app-container-contributors-box-list-img">
            <h5 class="app-container-contributors-box-list-name">${contributor.login}</h5>
            <h5>${contributor.contributions}</h5>
        </div>  
        `;
    };
    contributorList.innerHTML = output;
}

function addFailedToDOM(){

    const repoInfoArea = document.getElementById("app-container-repo");
    repoInfoArea.style.display = "none"; //hide repoInfoArea

    const repoContributorsArea = document.getElementById("app-container-contributors");
    repoContributorsArea.style.display = "none"; //hide repoContributorsArea

    const repositoryFailedArea = document.getElementById("app-container-failed");
    const repositoryFailed = `<h2>Netwrork request failed.</h2>`;
    repositoryFailedArea.innerHTML = repositoryFailed;
}
