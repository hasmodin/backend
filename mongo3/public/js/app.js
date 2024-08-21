



const deleteBtn = document.querySelector("#deletebtn");


deleteBtn.addEventListener("click", (e) => {
    let confirm = document.querySelector(".confirm");
    confirm.style.display = "block";
    let yesBtn = document.querySelector(".yes");
    let noBtn = document.querySelector(".no");
    if(e.target.yesBtn) {
       
    }else {
        res.redirect("/chats");
    }


});