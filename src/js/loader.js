const loader = () => {
    const main = document.querySelector(".main");
    main.style.display = "none";
    let markup = `<div class="loader"></div>`;
    main.insertAdjacentHTML("afterend", markup);
    const loader = document.querySelector('.loader');
    
    setTimeout(() => {
        main.style.display = "block";
        loader.style.display = "none";
    },500)
};

loader()