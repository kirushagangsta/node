window.onload = function () {
    document.getElementById("search").addEventListener("click", search, false);
    // function CookieParse(){
    //     let cookie=document.cookie;
    //     let pos;
    //     for (let i=0;i<cookie.length;i++){
    //         if (cookie[i]==="="){
    //              pos=i;
    //         }
    //     }
    //     let cookieParsed=cookie.substring(pos+1,cookie.length);
    //     return cookieParsed;
    // }
    function newImg(src) {
        let img;
        img = new Image();
        img.src = src;
        return img.src;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function snowGenerate() {
        let snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        let snowX = getRandomInt(0, 1500);
        snowflake.style.position = "absolute";
        snowflake.style.top = "-5px";
        snowflake.style.left = snowX + "px";
        snowflake.style.zIndex = "1";
        document.body.append(snowflake);
    }

    function parseCoords(item) {
        for (let j = 0; j < item.length; j++) {
            if (item[j] === "p" || item[j] === "%") {
                return parseInt(item.substring(0, j));
            }
        }
    }

    let counter = 0;
    let directions=[];
    let counterSnow=[];
    function snowAnimate() {
        let snowflakes = document.getElementsByClassName("snowflake");
        let xChange=getRandomInt(50,76);
        if (counter % xChange === 0) {
            for (let i = 0; i < snowflakes.length; i++) {
                counterSnow[i]=1;
                let snowflakeX = parseCoords(snowflakes[i].style.left);
                let snowflakeY = parseCoords(snowflakes[i].style.top);
                let direction = getRandomInt(0, 3);

                if (direction === 0) {
                    directions[i] = "left";
                    // snowflakeX++;
                    snowflakeY++;
                }
                if (direction === 1) {
                    directions[i] = "right";
                    // snowflakeX--;
                    snowflakeY++;
                }
                if (snowflakeY < 1000) {
                    snowflakes[i].style.left = snowflakeX + "px";
                    snowflakes[i].style.top = snowflakeY + "px";
                } else {
                    document.body.removeChild(snowflakes[i]);
                }

            }
        }
        if (counter%xChange!==0) {
            for (let i=0;i<snowflakes.length;i++){
                counterSnow[i]++;
                let snowflakeX = parseCoords(snowflakes[i].style.left);
                let snowflakeY = parseCoords(snowflakes[i].style.top);
                if (directions[i]==="left"){
                    // snowflakeX=snowflakeX+0.8+(counterSnow[i]%50)*0.003;
                    snowflakeY=snowflakeY+1.2-(counterSnow[i]%50)*0.0005;
                }
                if (directions[i]==="right"){

                    // snowflakeX=snowflakeX+0.8+(counterSnow[i]%50)*0.003;
                    snowflakeY=snowflakeY+1.2-(counterSnow[i]%50)*0.0005;
                }
                if (snowflakeY < 1000) {
                    snowflakes[i].style.left = snowflakeX + "px";
                    snowflakes[i].style.top = snowflakeY + "px";
                } else {
                    document.body.removeChild(snowflakes[i]);
                }
            }
        }
        counter++;
    }

    let imgCosmos = newImg('img/KOSMOS1.jpg');
    let imgPanda = newImg('img/PANDA1.jpg');
    let imgUlduar = newImg('img/ulduar.jpg');
    let imgLandscape = newImg('img/landscape1.jpg');
    let backCosmic = document.getElementById("background-cosmic");
    let backPanda = document.getElementById("background-panda");
    let backUlduar = document.getElementById("background-ulduar");
    let backLandscape = document.getElementById("background-landscape");
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    let link = document.getElementById("link");
    let styles = document.getElementById("styles");
    let query = document.getElementById("requestText");
    let VKId = document.getElementById("VKId");
    let snow = setInterval(snowGenerate, 200);
    let snowAni=setInterval(snowAnimate,10);
    // window.onblur= function(){
    //   clearInterval(snow);
    //   clearInterval(snowAni);
    // };
    // window.onfocus=function () {
    //     snow=setInterval(snowGenerate, 300);
    //     snowAni=setInterval(snowAnimate, 10);
    // }
    function setColor(color) {
        header.style.color = color;
        footer.style.color = color;
        link.style.color = color;
        styles.style.color = color;
    }
    backUlduar.onclick = function () {
        document.body.style.backgroundImage = "url('img/ulduar.jpg')";
        setColor("deepskyblue");
        localStorage.setItem("background", "ulduar");
        query.placeholder = "Куда направимся сегодня?";
        VKId.placeholder = "Ваш ID в VK";
        clearInterval(snow);
        clearInterval(snowAni);
        snow=setInterval(snowGenerate, 300);
        snowAni=setInterval(snowAnimate, 10);
    };
    backCosmic.onclick = function () {
        document.body.style.backgroundImage = "url('img/KOSMOS1.jpg')";
        setColor("white");
        localStorage.setItem("background", "cosmos");
        query.placeholder = "Куда летим, командир?";
        VKId.placeholder = "ID нашего судна";
        clearInterval(snow);
    };
    backPanda.onclick = function () {
        document.body.style.backgroundImage = "url('img/PANDA1.jpg')";
        setColor("lawngreen");
        localStorage.setItem("background", "panda");
        query.placeholder = "Куда направимся сегодня?";
        VKId.placeholder = "Ваш ID в VK";
        clearInterval(snow);
    };

    backLandscape.onclick = function () {
        document.body.style.backgroundImage = "url('img/landscape1.jpg')";
        header.style.color = "#1F00B6";
        footer.style.color = "deepskyblue";
        link.style.color = "deepskyblue";
        styles.style.color = "#1F00B6";
        localStorage.setItem("background", "landscape");
        query.placeholder = "Куда направимся сегодня?";
        VKId.placeholder = "Ваш ID в VK";
        clearInterval(snow);
    };
    if (localStorage.getItem("background") === "cosmos" || localStorage.getItem("background") === null) {
        backCosmic.checked = true;
        setColor("white");
        document.body.style.backgroundImage = "url('img/KOSMOS1.jpg')";
        query.placeholder = "Куда летим, командир?";
        VKId.placeholder = "ID нашего судна";
        clearInterval(snow);
    }
    if (localStorage.getItem("background") === "panda") {
        backPanda.checked = true;
        setColor("lawngreen");
        document.body.style.backgroundImage = "url('img/PANDA1.jpg')";
        query.placeholder = "Куда направимся сегодня?";
        VKId.placeholder = "Ваш ID в VK";
        clearInterval(snow);
    }
    if (localStorage.getItem("background") === "ulduar") {
        backUlduar.checked = true;
        setColor("deepskyblue");
        document.body.style.backgroundImage = "url('img/ulduar.jpg')";
        query.placeholder = "Куда направимся сегодня?";
        VKId.placeholder = "Ваш ID в VK";
    }
    if (localStorage.getItem("background") === "landscape") {
        backLandscape.checked = true;
        header.style.color = "#1F00B6";
        footer.style.color = "deepskyblue";
        link.style.color = "deepskyblue";
        styles.style.color = "#1F00B6";
        document.body.style.backgroundImage = "url('img/landscape1.jpg')";
        query.placeholder = "Куда направимся сегодня?";
        VKId.placeholder = "Ваш ID в VK";
        clearInterval(snow);
    }

    document.getElementById("VKId").value = localStorage.getItem("id");

    function search() {
        let searchText = document.getElementById("requestText").value;
        if (searchText === '') return false;
        searchText = encodeURIComponent(searchText);
        window.open("https://yandex.ru/search?text=" + searchText, "_blank");
    }

    document.getElementById("GoogleSearch").addEventListener("click", GoogleSearch, false);

    function GoogleSearch() {
        let searchText = document.getElementById("requestText").value;
        if (searchText === '') return false;
        searchText = encodeURIComponent(searchText);
        window.open("https://www.google.com/search?q=" + searchText, "_blank");
    }

    document.getElementById("FriendDialog").addEventListener("click", VKDialog, false);

    function VKDialog() {
        let searchText = document.getElementById("requestText").value;
        if (searchText === '') return false;
        if (searchText.toLowerCase() === "евреи") {
            window.open("https://vk.com/im?sel=c83", "_blank");
            return true;
        }
        if (searchText.toLowerCase() === "зяблы") {
            window.open("https://vk.com/im?sel=c113", "_blank");
            return true;
        }
        if (searchText.toLowerCase() === "кодтим") {
            window.open("https://vk.com/im?sel=c103", "_blank");
            return true;
        }
        let searchTextEncoded = encodeURIComponent(searchText.toLowerCase());
        let userID = document.getElementById("VKId").value;
        // document.cookie="id="+userID+";expires=Tue, 19 Jan 2020 03:14:07 GMT";
        localStorage.setItem("id", userID);
        $.ajax({
            url: "https://api.vk.com/method/friends.get?v=5.52&user_id=" + userID + "&fields=FirstName&access_token=8c7eb8d18c7eb8d18c7eb8d1508c12b27e88c7e8c7eb8d1d13a71e9366e9300c05e35f6",
            method: "GET",
            dataType: "JSONP",
            success: function (data) {
                for (let i = 0; i < data.response.items.length; i++) {
                    let friends = data.response.items[i];
                    let friendData = friends.first_name.toLowerCase() + " " + friends.last_name.toLowerCase();
                    let friendsEncoded = encodeURIComponent(friendData);
                    if (searchTextEncoded === friendsEncoded) {
                        window.open("https://vk.com/im?sel=" + friends.id, "_blank");
                        break;
                    }
                    let flag = false;
                    localStorage.getItem(localStorage.key(1));
                    for (let j = 0; j < localStorage.length; j++) {
                        if (searchText.toLowerCase() === localStorage.key(j)) {
                            window.open("https://vk.com/im?sel=" + localStorage.getItem(localStorage.key(j)), "_blank");
                            flag = true;
                            break;
                        }
                    }
                    if (flag === true) {
                        break;
                    }
                    let pattern = /\D+[^!]\s?\=\s?\D+\s\D+/;
                    let patternDelete = /\D+\s?\!\=\s?\D+\s\D+/;
                    if (pattern.test(searchText)) {
                        let userName = nameParse(searchText);
                        let friends = data.response.items[i];
                        let friendData = friends.first_name.toLowerCase() + " " + friends.last_name.toLowerCase();
                        let userData = userName.firstName.toLowerCase() + " " + userName.lastName.toLowerCase();
                        if (friendData === userData) {
                            let userSavedID = friends.id;
                            localStorage.setItem(userName.shortName.toLowerCase(), userSavedID);
                            alert("Успешно! Теперь для перехода в диалог к " + userName.firstName + " " + userName.lastName + " Вы можете использовать слово " + userName.shortName);
                            break;
                        }
                    } else if (patternDelete.test(searchText)) {
                        let userName = nameDeleteParse(searchText);
                        let friends = data.response.items[i];
                        let friendData = friends.first_name.toLowerCase() + " " + friends.last_name.toLowerCase();
                        let userData = userName.firstName.toLowerCase() + " " + userName.lastName.toLowerCase();
                        if (friendData === userData) {
                            let userSavedID = friends.id;
                            let userDeleteId = localStorage.getItem(userName.shortName.toLowerCase());
                            if (userSavedID == userDeleteId) {
                                localStorage.removeItem(userName.shortName.toLowerCase());
                                setTimeout(alertDelay, 100);

                                function alertDelay() {
                                    alert("Успешно! Для пользователя " + userName.firstName + " " + userName.lastName + " было удалено ключевое слово " + userName.shortName);
                                }

                                break;
                            }
                        }
                    }
                }
            },
        });

    }

    function nameParse(search) {
        let posEq;
        let nameStart;
        let userShortName;
        let userFirstName;
        let posSpace;
        let userLastName;
        for (let i = 0; i < search.length; i++) {
            if (search[i] === "=") {
                if (search[i - 1] === " ") {
                    posEq = i - 1;
                } else {
                    posEq = i;

                }
                userShortName = search.substring(0, posEq);
                if (search[i + 1] === " ") {
                    nameStart = i + 2;
                } else {
                    nameStart = i + 1;
                }
                break;
            }
        }
        for (let i = nameStart; i < search.length; i++) {
            if (search[i] === " ") {
                userFirstName = search.substring(nameStart, i);
                posSpace = i;
                break;
            }
        }
        userLastName = search.substring(posSpace + 1,);
        let user = new Object();
        user.shortName = userShortName;
        user.firstName = userFirstName;
        user.lastName = userLastName;
        return user;

    }

    function nameDeleteParse(search) {
        let posEq;
        let nameStart;
        let userShortName;
        let userFirstName;
        let posSpace;
        let userLastName;
        for (let i = 0; i < search.length; i++) {
            if (search[i] === "!") {
                if (search[i - 1] === " ") {
                    posEq = i - 1;
                } else {
                    posEq = i;

                }
                userShortName = search.substring(0, posEq);
                if (search[i + 2] === " ") {
                    nameStart = i + 3;
                } else {
                    nameStart = i + 2;
                }
                break;
            }
        }
        for (let i = nameStart; i < search.length; i++) {
            if (search[i] === " ") {
                userFirstName = search.substring(nameStart, i);
                posSpace = i;
                break;
            }
        }
        userLastName = search.substring(posSpace + 1,);
        let user = new Object();
        user.shortName = userShortName;
        user.firstName = userFirstName;
        user.lastName = userLastName;
        return user;

    }

    document.getElementById("VKFeed").addEventListener("click", vk, false);

    function vk() {
        window.open("https://vk.com", "_blank");
    }

    document.getElementById("VKMessages").addEventListener("click", vkMes, false);

    function vkMes() {
        window.open("https://vk.com/im", "_blank");
    }

    document.getElementById("BootsTrapGrid").addEventListener("click", BootsTrapGrid, false);

    function BootsTrapGrid() {
        window.open("https://getbootstrap.com/docs/4.3/getting-started/introduction/", "_blank");
    }

};
