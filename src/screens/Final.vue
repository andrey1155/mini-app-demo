<template>
  <section class="final-window">
    <div class="content">
      <button class="cta-button" @click="handleClick">
        Обсудить проект
      </button>
    </div>
  </section>
</template>

<script setup>
const handleClick = async () => {
  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;

  if (!user || !user.id) {
    // Если Mini App открыта не из Telegram или пользователь не определён
    window.open("https://t.me/msa_assistant_bot?start=discuss_project", "_blank");
    return;
  }

  // Отправка на backend
  const data = {
    action: "ai",
    payload: {
      userId: Telegram.WebApp.initDataUnsafe.user?.id,
      time: Date.now()
    }
  };

  window.Telegram.WebApp.sendData(JSON.stringify(data));
  // Закрытие мини-приложения
  window.Telegram.WebApp.close();
};
</script>

<style scoped>
.final-window {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  padding: 1rem;
}

.cta-button {
  background-color: #0511F2;
  color: #F2F2F2;
  padding: 1.5rem 2.5rem;
  font-size: clamp(1rem, 2vw + 0.7rem, 2rem);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;
}

.cta-button:hover {
  background-color: #4a1e50;
}
</style>