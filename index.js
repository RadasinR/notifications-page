function markRead() {
    let notifications = document.querySelectorAll(".unread");
    for ( let n of notifications) {
        n.classList.remove("unread");
        n.querySelector(".red-dot").remove();
    }
}