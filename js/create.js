const movie = [
    ["월플라워", "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTBfMTUw%2FMDAxNjkxNjQzMjkwMDc0.eFI5SdxZ6bcS3Rjq1zNKEsa3_ZveHCx5pk2XoPh4NKIg.S9fufrYafWUKerW1Sw7K77Bk33dwyJBxI_l-h6OCX9Qg.PNG.ahjcome%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2023-08-10_%25BF%25C0%25C8%25C4_1.50.33.png&type=a340", "말 못할 트라우마를 가지고 자신만의 세계에 갇혀있던 ‘찰리’는 고등학교 신입생이 돼서도 친구들과 어울리지 못한 채 방황한다. 그러던 어느 날, 타인의 시선 따위는 신경 쓰지 않고 삶을 즐기는 ‘샘’과 ‘패트릭’ 남매를 만나 인생의 새로운 전환을 맞이한다.", "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=1816796&qvt=0&query=%EC%98%81%ED%99%94%20%EC%9B%94%ED%94%8C%EB%9D%BC%EC%9B%8C%20%EC%A0%95%EB%B3%B4"],
    ["미비포유", "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMTBfMjc2%2FMDAxNjM5MDkzNzI5ODYw.o6rH9BSroRO9NQuDrMBvcfb8KVsOVfk_FA_9vkxIQKsg.aom8dintVgXzGsLidgjUgP1XEG0xn36H-R5jlUqKBLIg.PNG.i-83-love%2F1.PNG&type=a340", "이별을 준비하는 마지막에 나타난 짜증나는 여자 내 평생 최고의 6개월을 선물했다 6년 동안이나 일하던 카페가 문을 닫는 바람에 백수가 된 루이자(에밀리아 클라크)는 새 직장을 찾던 중 촉망 받던 젊은 사업가였던 전신마비 환자 윌(샘 클라플린)의 6개월 임시 간병인이 된다.", "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=2485325&qvt=0&query=%EC%98%81%ED%99%94%20%EB%AF%B8%EB%B9%84%ED%8F%AC%EC%9C%A0%20%EC%A0%95%EB%B3%B4"],
    ["클래식", "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMTFfMTUy%2FMDAxNzAyMjI5MDMxNDI1.coT1zloajJTb0MDeTIVkV58MaPAWG7cKuW88L3v1M6Yg.dDRHFVsN-3v-JWOyijN7diSYkdw4jQAMYm5QyCEewaAg.PNG.qkskskshtmdqh%2F%25C5%25AC%25B7%25A1%25BD%25C4.PNG&type=a340", "같은 대학에 다니는 지혜(손예진)와 수경은 연극반 선배 상민(조인성)을 좋아한다. 하지만 호들갑스런 수경이 상민에게 보낼 편지의 대필을 부탁하고, 지혜는 수경의 이름으로 상민을 향한 자신의 감정을 고백한다.", "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=1773900&qvt=0&query=%EC%98%81%ED%99%94%20%ED%81%B4%EB%9E%98%EC%8B%9D%20%EC%A0%95%EB%B3%B4"],
    ["빅피쉬", "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTNfNDAg%2FMDAxNjk5ODg2NzAyOTIy.PHYhQmIe-EkmVOocVoGe4PJCE-4va8HnZkhJH9LxEFwg.aaURn_rX_g5A7uo64V-SXFzKOO9-YSKXK3CsJs8uH1Ug.JPEG.caleb0917%2F%25C6%25F7%25BD%25BA%25C5%25CD_copy_2.jpg&type=a340", "“때로는 초라한 진실보다 환상적인 거짓이 더 나을 수도 있단다. 더구나 그것이 사랑에 의한 것이라면!” 운명을 보는 마녀, 집채만 한 거인, 시간이 멈춘 유령마을까지… 믿을 수 없는 모험으로 가득한 에드워드 블룸의 이야기. 당신도 믿나요?", "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=1775839&qvt=0&query=%EC%98%81%ED%99%94%20%EB%B9%85%ED%94%BC%EC%89%AC%20%EC%A0%95%EB%B3%B4"],
    ["소울", "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMjZfMTk3%2FMDAxNjExNTg3MTk4Njkz.WdOrdpiJOxarCO69kdk3IMpChsHSNFigNBLh2j49lLUg.emJGGpdUsJUaM55GRKNON9XT2uKQu7PTeYv78qFxycwg.PNG.s1nk0ng%2Fimage.png&type=a340", "뉴욕에서 음악 선생님으로 일하던 ‘조’는 꿈에 그리던 최고의 밴드와 재즈 클럽에서 연주하게 된 그 날, 예기치 못한 사고로 영혼이 되어 ‘태어나기 전 세상’에 떨어진다.", "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=10076265&qvt=0&query=%EC%98%81%ED%99%94%20%EC%86%8C%EC%9A%B8%20%EC%A0%95%EB%B3%B4"]
];

window.onload = init;

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('guest_form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 동작(페이지 새로고침) 방지
        viewAlert();
    });

    form.addEventListener('reset', function(event) {
        event.preventDefault(); // 기본 동작(페이지 새로고침) 방지
        resetForm();
    });
});

function init() {
    initMovieTable();
    initMovieCheckBox();
}

function initMovieTable() {
    const table = document.getElementById("movie_table");

    for (let i = 0; i < 5; i++) {
        const tr = document.createElement('tr');

        const ranking = document.createElement('th');
        ranking.innerText = i+1;

        const name = document.createElement('td');
        name.innerText = movie[i][0];
        name.className = "movie_name";

        const poster = document.createElement('td');
        const image = new Image();
        image.src = movie[i][1];
        image.className = "movie_image";
        poster.append(image);

        const content = document.createElement('td');
        content.innerText = movie[i][2];
        content.className = "movie_content";

        const link_td = document.createElement('td');
        link_td.className = "movie_link";
        const link = document.createElement('a');
        link.href = movie[i][3];
        link.innerText = "클릭";
        link_td.append(link);

        tr.append(ranking, name, poster, content, link_td);
        table.append(tr);
    }
}

function initMovieCheckBox() {
    const checkBoxForm = document.getElementById("guest_like_movie");
    for (let i = 0; i < 5; i++) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "movie";
        checkbox.value = movie[i][0];

        const label = document.createElement("label");
        label.className = "movie_checkbox";
        label.textContent = movie[i][0];

        label.prepend(checkbox);
        checkBoxForm.append(label);
    }
}

function viewAlert() {
    const name = document.getElementById("guest_name").value;
    const like_movie = document.getElementById("guest_like_movie");
    const checkboxes = like_movie.querySelectorAll('input[type="checkbox"]');

    let like_movie_count = 0;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            like_movie_count++;
        }
    });
    
    alert(`${name}님, 저와 ${like_movie_count}개의 취향이 같으시네요!`);
}

function resetForm() {
    document.getElementById("guest_name").value = "";
    const like_movie = document.getElementById("guest_like_movie");
    const checkboxes = like_movie.querySelectorAll('input[type="checkbox"]');

    let like_movie_count = 0;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    });
}
