"use strict";

export function addAppStructure(){
    //add app structure
    const app = `
    <div id="app">
        <section id="app-header">
            <h1>HYF Repositories...</h1>
            <select name="Repo List" id="app-header-list">

            </select>
        </section>

        <section id="app-container">
            <div id="app-container-repo">
                <h2>Information</h2>
                <div id="app-container-repo-box">
                    <table>
                        <tr>
                          <th><h3>Name:</h3></th>
                          <td><h4 id="app-container-repo-box-name"></h4></td>
                        </tr>
                        <tr>
                          <th><h3>Description:</h3></th>
                          <td><h4 id="app-container-repo-box-description"></h4></td>
                        </tr>
                        <tr>
                            <th><h3>Forks:</h3></th>
                            <td><h4 id="app-container-repo-box-forks"></h4></td>
                        </tr>
                        <tr>
                            <th><h3>Updated:</h3></th>
                            <td><h4 id="app-container-repo-box-updated"></h4></td>
                        </tr>
                      </table>
                </div>
            </div>

            <div id="app-container-contributors">
                <h2>Contributors</h2>
                <div id="app-container-contributors-box"></div>
                <div id="app-container-contributors-pagination">
                </div>
            </div>

            <div id="app-container-failed"></div>
        </section>

        <section id="app-footer">
            <h6>By: Saoud Salem Ba-khmais</h6>
        </section>
    </div>   
    `;
    document.body.innerHTML = app;
}
