"use strict";

import {addAppStructure} from './util/appStructure.js';
import {fetchData} from './util/fetchData.js';
import {changeRepository} from './util/changeRepository.js';
import {addRepositoryNamesToDOM, addFailedToDOM} from './util/operationsDOM.js';

async function main(){
    try {
        //add HTML/APP structure
        addAppStructure();

        //fetch repositories name
        const apiUrl = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
        const repositoriesObj = await fetchData(apiUrl);

        //add the repositories name to DOM
        addRepositoryNamesToDOM(repositoriesObj);

        //add event when 'change' the repository
        const repoList = document.getElementById("app-header-list");
        repoList.addEventListener('change', () =>{
            const repoID = repoList.selectedIndex -1;
            const contributorsUrl = repositoriesObj[repoID].contributors_url;
            changeRepository(contributorsUrl, repositoriesObj);
        });
    } 
    catch (error) {
        addFailedToDOM();
        console.log(error);
    }
}

window.addEventListener("load", main);

    