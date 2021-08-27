console.log("image resizing.js is loaded")

function ResizeImage() {
    const filesToUpload = document.getElementById('imageFile').files;
    const file = filesToUpload[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    // 파일이 읽혀지면 아래 함수가 실행됩니다
    reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        img.addEventListener('load',()=>{
            const canvas = document.getElementById('output');
            
            // canvas 크기를 변경해 줍니다.
            canvas.width = document.getElementById("width").value;
            canvas.height = document.getElementById("height").value;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
        })
    }
}