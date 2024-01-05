/* <ul class="quizz-info">
            <li class="info-name">Q</li>
            <li class="info-author">Carlos De la Rosa</li>
            <li class="info-play"><button>Play</button></li>
          </ul> */

console.log(localStorage);

const addQuizzes = () => {
    let container = document.getElementById("quizz-browser");
    for(let i = 0; i < localStorage.length; i++){
        let JsonItem = localStorage.getItem(localStorage.key(i));
        let item = JSON.parse(JsonItem);
        let htmlStructure = `
        <ul class = "quizz-info">
            <li class = "info-name">${item.name}</li>
            <li class = "info-author">Unknown</li>
            <li class = "info-play"><button>Play</button></li>
        </ul>
        `
        container.innerHTML += htmlStructure
    }
};