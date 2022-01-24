<template>
  <div class="container-slider">
    <div class="slider" id = "slider">
        <div class="slider_section">
            <img src="../assets/img/img1.jpg" alt="" class="slider_img"/>
        </div>
        <div class="slider_section">
            <img src="../assets/img/img2.jpg" alt="" class="slider_img"/>
        </div>
        <div class="slider_section">
            <img src="../assets/img/img3.jpg" alt="" class="slider_img"/>
        </div>
        <div class="slider_section">
            
            <img src="../assets/img/img4.jpg" alt="" class="slider_img"/>
        </div>
    </div>
    
    <div class="slider_btn slider_btn-right" id="btn-right"><i class="fas fa-chevron-right"></i></div>
    <div class="slider_btn slider_btn-left" id="btn-left"><i class="fas fa-chevron-left"></i></div>
  </div>
</template>

<script>

export default {
    data: () => ({
    
    }),
    mounted() {
      const slider = document.querySelector("#slider");
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    const btnLeft = document.querySelector("#btn-left");
    const btnRight = document.querySelector("#btn-right");

    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    
    function Next(){
        let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
        slider.style.marginLeft ="-200%";
        slider.style.transition ="all 0.5s";
        setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend',sliderSectionFirst);
            slider.style.marginLeft = "-100%";
        },500);
    }

    function Prev(){

        let sliderSection = document.querySelectorAll(".slider_section");
        let sliderSectionLast = sliderSection[sliderSection.length -1];
        slider.style.marginLeft ="0";
        slider.style.transition ="all 0.5s";
        setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin',sliderSectionLast);
            slider.style.marginLeft = "-100%";
        },500);
    }

    btnRight.addEventListener('click', function(){
        Next();
    });
    btnLeft.addEventListener('click', function(){
        Prev();
    });
    setInterval(function(){
        Next
    }, 5000);
    },
    methods: {

    }
  }
    

</script>

<style>

.container-slider{
    width: 100%;
    margin: 100px 0 0;
    overflow: hidden;
    box-shadow: 0 0 0 10px #fff, 0 15px 50px;
    
}
.slider{
    display: flex;
    width: 400%;
    height: 450px;
    margin-left: -100%;
}
.slider_section{
    width: 100%;
}
.slider_img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.slider_btn{
    position: absolute;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.7);
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    font-weight: bold;
    font-family: monospace;
    text-align:center;
    border-radius: 50%;
    cursor: pointer;
   
}
.slider_btn:hover{
    background: #fff;
}
.slider_btn-left{
    left: 10px;
}
.slider_btn-right{
    right: 10px;
}
</style>