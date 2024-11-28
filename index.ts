
function hide() {
    let skills = document.getElementById("hide") as HTMLElement;

    if (skills.style.display === 'none') {
        skills.style.display = 'block'; 
    } else {
        skills.style.display = 'none';
    }
}
