function hide() {
    var skills = document.getElementById("hide");
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
}

const downloadBtn = document.querySelector("input[type='button']");

downloadBtn.addEventListener("click", function() {
    window.print();

    
});
