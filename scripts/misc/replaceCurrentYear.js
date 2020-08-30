
// Function to replace the current year in the footer and other locations.
function ReplaceCurrentYear() {
    let currentYearEls = document.getElementsByClassName('current-year-replace');

    for (let element of currentYearEls){
        element.innerHTML = new Date().getFullYear();
    }
}

export {ReplaceCurrentYear};