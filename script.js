// 가능한 메뉴 리스트
const menuList = [
    { name: '스테이크', calories: 500 },
    { name: '파스타', calories: 400 },
    { name: '피자', calories: 600 },
    { name: '샐러드', calories: 250 },
    { name: '랍스터', calories: 700 },
    { name: '리조또', calories: 450 },
    { name: '그라탕', calories: 550 },
    { name: '카프레제 샐러드', calories: 300 },
    { name: '크림 소스 파스타', calories: 550 },
    { name: '비프 부르기뇽', calories: 600 }
];

// 랜덤으로 메뉴 추천 함수
function getRandomMenu() {
    const randomIndex = Math.floor(Math.random() * menuList.length);
    const selectedMenu = menuList[randomIndex];

    // Sweetalert2 팝업으로 메뉴 정보 보여주기
    Swal.fire({
        title: '추천 메뉴',
        html: `
            <div class="text-left">
                <p><strong>메뉴:</strong> ${selectedMenu.name}</p>
                <p><strong>칼로리:</strong> ${selectedMenu.calories} kcal</p>
            </div>
        `,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#4caf50',
        confirmButtonText: '확인',
        cancelButtonText: '다시 추천받기'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('확인', '메뉴를 선택해 주셔서 감사합니다!', 'success');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            getRandomMenu(); // 다시 추천받기
        }
    });
}
