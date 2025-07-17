<template>
  <div class="hero-wrapper">
    <!-- Декоративные полосы (вынесены за пределы section) -->
    <div class="diagonal-line red-line"></div>
    <div class="diagonal-line blue-line"></div>

    <!-- Сам экран -->
    <section class="hero-screen">
      <div class="hero-content">
        <h1 class="text-4xl sm:text-5xl font-bold text-[#682B70] 
        hero-title"> 
        
        <span style="color: #040FD9;">
        Telegram 
        </span>
        боты <br> и 
        Mini Apps</h1>
        <p class="text-lg sm:text-xl mt-4 text-[#422646]
        hero-subtitle">Для фрилансеров <br>и предпринимателей</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import '../style.css';

.hero-title{
  font-size: clamp(1.15rem, 3vh + 0.7rem, 3rem) ;
  font-weight: bold;
  color: #222126;
  padding-right: 1rem;
  margin-left: 3%;
}

.hero-subtitle{
  font-size: clamp(1.15rem, 2vh + 0.7rem, 3rem) ;
  font-weight: normal;
  color: #222126;
  margin-left: 3%;
  margin-top: -4vh;
  padding-top: 1vh;

}

.hero-wrapper {
  position: relative;
}

.hero-screen {
  height: 100vh;
  background-color: #F2F2F2;
  display: flex;
  align-items: center;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: left;
  margin-left: auto;

  margin-right: 2.5rem;
  margin-left: 1rem;

  max-width: 28rem;
  margin-top: -10vh;
}
</style>