

const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const photoText = document.querySelector(".photo-text");

fileInput.addEventListener("change",function(e){

    const file = e.target.files[0];

    if(file){
        preview.src =
        URL.createObjectURL(file);
        preview.style.display = "block";
        photoText.style.display = "none";
    }

    const removeBtn = document.getElementById("removePhoto");

    removeBtn.addEventListener("click",function(){

        preview.src = "";
        preview.style.display = "none";

        photoText.style.display = "block";
        photoInput.value ="";
    });

});