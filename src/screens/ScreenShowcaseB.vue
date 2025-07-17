<template>
  <section class="showcase-2">
    <div class="diagonal-line red-line"></div>

    <div class="content">
      <div class="image-block">
        <div class="image-wrapper">
          <img src="/AI.jpg" alt="Placeholder" class="main-image" />
        </div>
        <div class="vertical-text">При помощи GPT бот может сам отвечать на некоторые развернутые вопросы</div>
      </div>

      <div class="text-block">
        <h2 class="title">Интеграция GPT</h2>
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
  background-color: #e3e3e3;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0;
}

.diagonal-line.red-line {
  position: absolute;
  top: 85%;
  left: -20%;
  width: 150%;
  height: 53px;
  background-color: #D90479;
  transform: rotate(4deg);
  border: 7px solid #222126;
  z-index: 1;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  padding: 80px 0rem;
  position: relative;
  z-index: 2;

  margin-left: 3vw;
  margin-bottom: 20vh;
  margin-top: 17%;
}

.vertical-text {
  writing-mode: vertical-rl;

  margin-bottom: 1rem;

  transform: rotate(-180deg);
  font-weight: bold;
  color: #222126;
  white-space: nowrap;

  font-size:  2.5vh ;

  max-height: 45vh;
  overflow-wrap: break-word;
  white-space: normal;
}

.image-block {
  display: flex;
  align-items: flex-end; /* <-- выравнивание по нижнему краю */
  justify-content: flex-start;
  gap: 1rem;
}

@media (min-width: 1200px) {
  .image-block {
    margin-right: 1vw;
  }
}

.text-block {
  margin-top: 0rem;
  margin-bottom: 6rem;

  margin-left: 0rem;
  margin-right: 6rem;

  transform: rotate(-0deg);

  text-align: left;
  max-width: 280px;
}


</style>