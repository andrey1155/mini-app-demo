<template>
  <section class="showcase third">
    <div class="red-stripe"></div>

    <div class="content-wrapper">

      <div class="product-card">
        <img src="/shoe.jpg" alt="Sneaker" class="shoe-image" />

        <div class="sizes">
          <button v-for="size in sizes" :key="size" class="size-btn">{{ size }}</button>
        </div>

        <button class="add-to-cart">В корзину</button>
      </div>

      <div class="text-block">
          <h2 class="title">Разработка 
            
          <span style="color: blue;">
          telegram 
          </span>

          mini app</h2>
        <p class="subheadline">Мини-приложение может показывать товар и собирать заявки. Как сайт, но в телеграме</p>
      </div>

    </div>
  </section>
</template>

<script setup>
const sizes = ['38', '39', '40', '41', '42']
</script>


<style scoped>

.third {
  position: relative;
  background-color: #f3f3f3;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.red-stripe {
  position: absolute;
  bottom: 5%;
  left: -100px;
  width: 150vw;
  height: 53px;
  background-color: #0511F2;
  border: 7px solid #222126;
  transform: rotate(-7deg);
  z-index: 1;
}

.product-card {
  position: relative;
  z-index: 2;
  width: 55%;
  aspect-ratio: 1 / 1;
  background-color: #f0f0f0;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 1000px) {
  
.product-card {
  margin-top: 7%;
}
}

.shoe-image {
  width: 100%;
  max-height: 40%;
  object-fit: contain;
}

.sizes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
}

.size-btn {
  width: 60px;
  height: 40px;
  background-color: #F2F2F2;
  border: 2px solid #040FD9;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
}

.add-to-cart {
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background-color: #0511F2;
  color: #F2F2F2;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
}

.text-block {
  text-align: center;
  max-width: 90vw;
}

.headline {
  font-size:  clamp(1.15rem, 4% + 0.7rem, 3rem) ;
  font-weight: 700;
  color: #222126;
  margin-bottom: 0.5rem;
}

.subheadline {
  font-size: clamp(1rem, 4% + 0.5rem, 2.5rem) ;
  color: #222126;
}

.content-wrapper {
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0rem;

  margin-bottom: 10vw;
}

</style>