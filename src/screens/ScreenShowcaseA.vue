<template>
  <section class="showcase-2">
    <div class="diagonal-line red-line"></div>

    <div class="content">
      <div class="image-block">
        <div class="vertical-text">Бот с кнопками и автоответами: </br> принимает заявки, отвечает клиентам, экономит время</div>
        <div class="image-wrapper move">
          <img src="/BOT.jpg" alt="Placeholder" class="main-image" />
        </div>
      </div>

      <div class="text-block">
          <h2 class="title">Разработка 
            
          <span style="color: blue;">
          telegram 
          </span>

          ботов</h2>
        <p class="subtitle"></p>
      </div>
    </div>
  </section>
</template>

<style scoped>


@import '../style.css';

.showcase-2 {
  position: relative;

  height: 100vh;
  background-color: #E0E0E0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.diagonal-line.red-line {
  position: absolute;
  top: 85%;
  left: -20%;
  width: 150%;
  height: 53px;
  background-color: #D90479;
  transform: rotate(-6deg);
  border: 7px solid #222126;
  z-index: 1;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  padding: 80px 2rem;
  position: relative;
  z-index: 2;

  margin-bottom: 6rem;
}

.vertical-text {
  writing-mode: vertical-rl;

  margin-bottom: 1rem;

  transform: rotate(-180deg);
  font-weight: bold;
  color: #222126;
  white-space: nowrap;

  font-size:  clamp(1rem, 2vw + 0.7rem, 2rem) ;

  max-height: 45vh;
  overflow-wrap: break-word;
  white-space: normal;
}

.image-block {
  display: flex;
  align-items: flex-end; /* <-- выравнивание по нижнему краю */
  gap: 1rem;

    margin-left: 10vw;
}

@media (min-width: 1200px) {
  .image-block {
    margin-left: -1vw;
  }
}

.text-block {
  margin-top: 0rem;
  margin-bottom: 6rem;

  margin-left: 6rem;
  margin-right: 0rem;

  transform: rotate(-0deg);

  text-align: left;
  max-width: 280px;
}





</style>