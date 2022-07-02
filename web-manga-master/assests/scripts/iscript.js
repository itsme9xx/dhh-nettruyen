import comic from "./manga.js"

const btnMore = document.querySelector(".i-more");
const btnChapter = document.querySelector(".i-chapter-more");
const tab = document.querySelector(".i-comic__nav__comment__tab");
const textArea = document.querySelector(".text-area");
const btnComment = document.querySelector(".submit-comment");
const areaComment = document.querySelector(".i-comment-card");


window.onload = () => {
    const url = location.href.split('?')[1].split("=")[1];
    let getId = comic.find((item) => {
        return item.id === url;
    })
    document.querySelector(".i-img").setAttribute("src", getId.urlImg);
    document.querySelector(".i-viewer").innerHTML = getId.view;
    document.querySelectorAll(".i-name").forEach(item => {
        item.innerText = getId.name;
    });
    
    const showChapter = (data) => {
        let result = "";
        if(Number.isInteger(data)) {
            for(let i = data; i > 0; i--) {
                result += `
                    <li>
                        <p class="i-chapter">Chapter ${i}</p>
                        <p class="i-update">5 phút trước</p>
                        <p class="i-view">221.000</p>
                    </li>`
            }
        }else {
            for(let j = data; j >= 1; j -= 0.1) {
                console.log();
                result += `
                <li>
                    <p class="i-chapter">Chapter ${j.toFixed(1)}</p>
                    <p class="i-update">5 phút trước</p>
                    <p class="i-view">221.000</p>
                </li>`
            }
        }
        return result;
    }

    let htmls = `
    <ul>
        <li class="i-chapter__title">
            <p>Số chương</p>
            <p>Cập nhật</p>
            <p>Lượt xem</p>
        </li>
        ${showChapter(+getId.chapter)}
    </ul>
    `
    document.querySelector(".i-comic-chapter").innerHTML = htmls;
    if(document.querySelector(".i-comic-chapter").scrollHeight > 660) {
        btnChapter.onclick = () => {
            document.querySelector(".i-comic-chapter").classList.remove("show-chapter");
            btnChapter.style.display= "none";
        }
    }else {
        document.querySelector(".i-comic-chapter").classList.remove("show-chapter");
        btnChapter.style.display= "none";
    }
}

tab.onclick = (e) => {
    if(!e.target.closest(".tab__item").classList.contains("tab__item--active")) {
        tab.querySelector(".tab__item--active").classList.remove("tab__item--active");
        e.target.closest(".tab__item").classList.add("tab__item--active");
    }
}

if(document.querySelector(".i-comic-content__desc").scrollHeight > 60) {
    btnMore.onclick = () => {
        document.querySelector(".i-comic-content__desc").classList.toggle("short-text");
        if(!document.querySelector(".i-comic-content__desc").classList.contains("short-text")) {
            btnMore.querySelector("p").innerHTML = "Thu gọn";
        }else {
            btnMore.querySelector("p").innerHTML = "Xem thêm";
        }
    }
}else {
    document.querySelector(".i-comic-content__desc").classList.remove("short-text");
    btnMore.style.display= "none";
}

btnComment.onclick = () => {
    let getValueCommnet = textArea.value;
    let htmls = `
    <li>
        <div class="i-comment-img">
            <img src="./assests/image/hinh-anh-hot-girl-xinh-han-quoc-wap102-com (1).jpg" alt="">
            <span class="answer">Trả lời</span>
        </div>
        <div class="i-comment-infor">
            <p class="comic-infor__name">Hoàng Hải</p>
            <p class="comic-member">Thành viên</p>
            <span class="comic-infor__time"><i class="far fa-clock"></i> Vừa đăng</span>
            <span class="comic-read__chapter">Chapter 369</span>
            <p class="comment">${getValueCommnet}</p>
        </div>
    </li>
    `;
    areaComment.insertAdjacentHTML("afterbegin", htmls);
    textArea.value = "";
}
