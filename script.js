const accessKey = "7I_0Q0_BIByIikqAZ_V6hEkRS3E6RMvtJBGKI7QloIE";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=15`;

    const response = await fetch(url);
    const data  = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }


    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";

}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})



let modeBtn = document.querySelector(".mode-btn");
let btn = document.querySelector(".mode");
let screen = document.querySelector("body");
let headname = document.querySelector("h1");

var flag = 1;

modeBtn.addEventListener("click",()=>{

    if(flag === 1){
        btn.style.right = 0;
        btn.style.backgroundColor = "#000";
        modeBtn.style.border = "1px solid #000";
        screen.style.backgroundColor = "#fff";
        screen.style.transition = "0.3s";
        headname.style.color = "#000";

        flag = 0;
    }else{
        btn.style.right = "60%";
        btn.style.backgroundColor = "#fff";
        modeBtn.style.border = "1px solid #fff";
        screen.style.backgroundColor = "#181818";
        screen.style.transition = "0.3s";
        headname.style.color = "#fff";
        flag = 1;
    }

})