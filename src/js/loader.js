const loader = () => {
    const main = document.querySelector(".main");
    const loader = document.querySelector('.loader');
    loader.style.height = "360px"
    main.style.display = "none";

    setTimeout(() => {
        main.style.display = "block";
        loader.style.display = "none";
    }, 1000)
};

loader()