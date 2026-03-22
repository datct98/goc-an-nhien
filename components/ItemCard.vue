<script setup>
const props = defineProps({
  rank: {
    type: String,
    default: "common"
  },
  title: String,
  subtitle: String,
  price: String,
  icon: String,
  imagePath: String,
})
</script>

<template>
  <div class="card" :class="rank">

    <div class="rank-label">
      {{ rank }}
    </div>

    <!-- <div class="icon">
      {{ icon }}
    </div> -->

    <div class="image">
      <Image :src="imagePath" alt="Item" />
    </div>

    <div class="title">
      {{ title }}
    </div>

    <div class="subtitle">
      {{ subtitle }}
    </div>

    <div class="price">
      {{ price }}
    </div>

  </div>
</template>

<style scoped>
.card {
  /* width:200px; */
  padding: 20px 10px;
  border-radius: 18px;
  text-align: center;
  position: relative;

  background: linear-gradient(#3a1e08, #1a0c03);
  border: 2px solid rgba(255, 255, 255, 0.1);

  color: white;
}

/* rank label */

.rank-label {
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);

  padding: 0px 10px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: bold;

  background: #333;
}

.icon {
  /* font-size:50px;
  margin:20px 0; */
}

.title {
  font-size: 10px;
  font-weight: bold;
}

.subtitle {
  font-size: 10px;
  opacity: 0.7;
}

.price {
  margin-top: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 10px;
}

/* ================= */
/* COMMON */
/* ================= */

.common {
  border-color: #9e7b5c;
}

.common .rank-label {
  background: #6d4a2f;
}

.common .price {
  background: #4a2d17;
}

/* ================= */
/* UNCOMMON */
/* ================= */

.uncommon {
  border-color: #85d284;
}

.uncommon .rank-label {
  background: #2bdf3a;
}

.uncommon .price {
  background: #0a4c0b;
}


/* ================= */
/* RARE */
/* ================= */

.rare {
  border-color: #8d5cff;

  box-shadow:
    0 0 10px rgba(140, 90, 255, 0.7);
}

.rare .rank-label {
  background: #7d5cff;
}

.rare .price {
  background: #5036a6;
}

/* ================= */
/* LEGENDARY */
/* ================= */

.legendary {
  border-color: #ffd46b;

  box-shadow:
    0 0 10px rgba(255, 210, 100, 0.9),
    0 0 30px rgba(255, 210, 100, 0.4);
}

.legendary .rank-label {
  background: #f3c55a;
  color: #4a2a00;
}

.legendary .price {
  background: #5c3b0a;
}
</style>