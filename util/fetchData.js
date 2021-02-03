"use strict";

export async function fetchData(apiUrl){

    const response = await fetch(apiUrl);
    if (response.ok) {
        const data = await response.json();
        return data;     
    }
    else{
        throw 'error';
    }        
}
