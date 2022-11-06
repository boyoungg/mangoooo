let backGround = document.getElementById('ani-back');
let character = document.getElementById('ani-cha');
let bottomImg = document.getElementById('ani-bottom');
let mainSection = document.getElementById('mainApp-img');
let mainLogo = document.getElementById('mainPos');
let aniText = document.getElementById('ani-text');

let target = document.querySelector('#section-back-03');
let targetRect = target.getBoundingClientRect().top;

let overview = document.querySelector('.mean-section');
let overviewRect = overview.getBoundingClientRect().top;

let videoSection = document.querySelector('#sec01');


/*갓생망생 의미 애니메이션 */


window.addEventListener('scroll', function(){
    var scrollTopValue = $(document).scrollTop();

    if(scrollTopValue > 10){
        character.classList.add('move');
    }

    if(scrollTopValue <= 2800){
        mainSection.style.display ='block';
        mainLogo.style.display ='block';

        backGround.style.display ='block';
        backGround.style.left = scrollTopValue*-0.3+'px';
    
        character.style.display ='block';
        character.style.left = scrollTopValue*0.64+'px';

    }
    else if(scrollTopValue <= 3000){
        backGround.style.display ='none';
        character.style.display ='none';
        mainSection.style.display ='none';
        mainLogo.style.display ='none';
        
    }

    if(scrollTopValue <= 2500){
        aniText.style.display ='none';
        aniText.style.left = scrollTopValue*0.63+'px';
    } else if(scrollTopValue <= 2700){
        aniText.style.display ='block';
        
    }else{
        aniText.style.display ='none';
        backGround.style.display ='none';
        character.style.display ='none';
        mainSection.style.display ='none';
        mainLogo.style.display ='none';
    }

    const service01 = $(".todoSv").offset();
    const service02 = $("#mangomap").offset();
    const service03 = $("#mangodiary").offset();
    console.log("top: " + service01.top + 'px'+ service02.top +'px'+ service03.top+'px');
    console.log(scrollTopValue);

    if(scrollTopValue >= service03.top-500){
        $('.circleY').removeClass('yellow-circle second-circle')
        $('.circleY').addClass('third-circle')
            console.log('3');
    }
    else if(scrollTopValue >= service02.top-700 ){
        $('.circleY').removeClass('yellow-circle third-circle')
        $('.circleY').addClass('second-circle')
        console.log('2');
    }else if(scrollTopValue >= service01.top-200){
        $('.circleY').removeClass('second-circle third-circle')
        $('.circleY').addClass('yellow-circle')
        $('.app-img-frame').
        console.log('1');
    }else{
        $('.circleY').removeClass('yellow-circle')
    }

});
