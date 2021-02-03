"use strict";

export {addPaginationToDOM}; 
import {changeContributorsToDOM} from './operationsDOM.js';

function addPaginationToDOM(contributorsObj){

    //pagination
    let pageNumber = 1;
    const paginationArea = document.getElementById("app-container-contributors-pagination");

    if(contributorsObj.length > 5){

        const pageNum = Math.ceil(contributorsObj.length / 5);

        //add pagination DOM
        let page = `<button id="app-container-contributors-pagination-previous">&laquo;</button>`;
        for (let i = 1; i <= pageNum; i++){
            page += `<button id="app-container-contributors-pagination-${i}">${i}</button>`;
        }
        page += `<button id="app-container-contributors-pagination-next">&raquo;</button>`;
        paginationArea.innerHTML = page;

        //add active to page number 1
        activeHandler(document.getElementById(`app-container-contributors-pagination-1`));

        //add "click" events to previous button
        document.getElementById(`app-container-contributors-pagination-previous`).addEventListener("click", () =>{
            if (pageNumber-1 <= 0){
                return;
            }
            pageNumber -= 1;
            changeContributorsToDOM(contributorsObj, pageNumber);
            activeHandler(document.getElementById(`app-container-contributors-pagination-${pageNumber}`));
        });

        //add "click" events to next button
        document.getElementById(`app-container-contributors-pagination-next`).addEventListener("click", () =>{
            if (pageNumber + 1 > pageNum){
                return;
            }
            pageNumber += 1;
            changeContributorsToDOM(contributorsObj, pageNumber);
            activeHandler(document.getElementById(`app-container-contributors-pagination-${pageNumber}`));
        });

        //add "click" events to page numbers
        for (let i = 1; i <= pageNum; i++){
            document.getElementById(`app-container-contributors-pagination-${i}`).addEventListener("click", () =>{
                pageNumber = i;
                changeContributorsToDOM(contributorsObj, i);
                activeHandler(document.getElementById(`app-container-contributors-pagination-${i}`));
            });
        }
    }
    else{
        //remove pagination
        let page = '';
        paginationArea.innerHTML = page;
    }
}

function activeHandler(target) {
    target.parentElement.querySelectorAll(".active").forEach(target =>
        target.classList.remove("active"));

    target.classList.add("active");
};
