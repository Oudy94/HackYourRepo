"use strict";

import {changeRepoInfoToDOM, changeContributorsToDOM, addFailedToDOM} from './operationsDOM.js';
import {addPaginationToDOM } from './pagination.js';
import {fetchData} from './fetchData.js';

export async function changeRepository(contributorsUrl, repositoriesObj){
    try {
        const contributorsObj = await fetchData(contributorsUrl); //fetch the contributors 
        changeRepoInfoToDOM(repositoriesObj); //add the contributors to DOM
        changeContributorsToDOM(contributorsObj, 1); //add the contributors to DOM
        addPaginationToDOM(contributorsObj); //set contributors pages numbers if contributors more than 5
    } 
    catch (error) {
        addFailedToDOM();
        console.log(error);
    }
}
