"use strict"
/*fake globs*/
var loggedUser = false;
/*___*/
boot();
function boot() {
    //get video id
    var urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has("v")) {
        alert("no video specified!");
        // window.location = "/";
        return;
    }
    var videoId = urlParams.get("v");
    //set infos


    //__ADD EVENTS
    document.body.addEventListener("click", evt => {
        commentsParametersWindow.classList.add("none");
        guestPostInfoBox.classList.add("none");
    });
    //parameters window
    commentsParametersButton.addEventListener("click", evt => {
        evt.stopPropagation();
        commentsParametersWindow.classList.remove("none");
    });
    commentsParametersWindow.addEventListener("click", evt => { evt.stopPropagation(); })
    //comment form
    newCommentForm.addEventListener("submit", onCommentSubmit);
    guestPostInfoBox.addEventListener("click", evt => { evt.stopPropagation(); });
    anonymousInfoButton.addEventListener("click", evt => {
        alert(`Anonymous comments are more likely to be hidden to prevent spam.`);
    });

    //__API_CALL
    loadComments();
}
function onCommentSubmit(evt) {
    evt.preventDefault();
    if (!loggedUser) {
        guestPostInfoBox.classList.remove("none");
    }
}
async function loadComments(){
    
}