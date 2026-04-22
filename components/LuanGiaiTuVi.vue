<template>
  <div class="luan-giai-tu-vi">
    <!-- First Row -->
    <div class="tu-vi-row">
      <div v-for="n in [0, 1, 2, 3]" :key="n" class="tu-vi-card">
        <div class="tu-vi-header">
          <span class="tiny-text">{{data.palaces[n].heavenlyStem}} {{data.palaces[n].earthlyBranch}}</span>
          <span class="tiny-text">{{data.palaces[n].decadal.range[0]}}</span>
        </div>
        <div>
          <span>{{ data.palaces[n].name }}</span>
        </div>
        <div class="tu-vi-body">
          <!-- <div class="tu-vi-title">Thái Dương (M)</div> -->
          <div class="tu-vi-content">
            <div class="tu-vi-list">
              <p class="text-yellow-500">Chính tinh:</p>
              <p
                class="tiny-text"
                v-for="(star, i) in data.palaces[n].majorStars"
                :key="i"
              >
                {{ star }}
              </p>
              <br />
              <p class="text-yellow-500">Phụ tinh:</p>
              <p
                class="tiny-text"
                v-for="(star, i) in data.palaces[n].minorStars"
                :key="i"
              >
                {{ star }}
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="tu-vi-footer">
          <span>Ngọ</span>
          <span>Bệnh</span>
          <span>T5</span>
        </div> -->
      </div>
    </div>
    <!-- Second and Third row  -->
    <div class="tu-vi-row">
      <div class="tu-vi-col" style="flex: 1">
        <div v-for="n in [4, 5]" :key="n" class="tu-vi-card">
          <div class="tu-vi-header">
            <span class="tiny-text">{{data.palaces[n].heavenlyStem}} {{data.palaces[n].earthlyBranch}}</span>
            <span class="tiny-text">{{data.palaces[n].decadal.range[0]}}</span>
          </div>
          <div>
            <span>{{ data.palaces[n].name }}</span>
          </div>
          <div class="tu-vi-body">
            <!-- <div class="tu-vi-title">Thái Dương (M)</div> -->
            <div class="tu-vi-content">
              <div class="tu-vi-list">
                <p class="text-yellow-500">Chính tinh:</p>
                <p
                  class="tiny-text"
                  v-for="(star, i) in data.palaces[n].majorStars"
                  :key="i"
                >
                  {{ star }}
                </p>
                <br />
                <p class="text-yellow-500">Phụ tinh:</p>
                <p
                  class="tiny-text"
                  v-for="(star, i) in data.palaces[n].minorStars"
                  :key="i"
                >
                  {{ star }}
                </p>
              </div>
            </div>
          </div>
          <!-- <div class="tu-vi-footer">
            <span>Ngọ</span>
            <span>Bệnh</span>
            <span>T5</span>
          </div> -->
        </div>
      </div>
      <!-- Luan giai chinh -->
      <div class="tu-vi-main" style="flex: 2">
        <div class="tu-vi-main-title">Lá số tử vi</div>
        <div class="info-row">
          <span class="label">Họ tên:</span>
          <span class="value">{{ data.name }}</span>
        </div>
        <div class="info-row">
          <span class="label">Năm sinh:</span>
          <span class="value">{{ data.birthDate.split("-")[0] }}</span>
        </div>
        <div class="info-row">
          <span class="label">Tháng sinh:</span>
          <span class="value">{{ data.birthDate.split("-")[1] }}</span>
        </div>
        <div class="info-row">
          <span class="label">Ngày sinh:</span>
          <span class="value">{{ data.birthDate.split("-")[2] }}</span>
        </div>
        <!-- <div class="info-row">
          <span class="label">Giờ sinh:</span>
          <span class="value">Bổ sung</span>
        </div>
        <div class="info-row">
          <span class="label">Âm dương:</span>
          <span class="value">Test</span>
        </div>
        <div class="info-row">
          <span class="label">Bán mệnh:</span>
          <span class="value">Test</span>
        </div>
        <div class="info-row">
          <span class="label">Cục mệnh:</span>
          <span class="value">Test</span>
        </div>
        <div class="info-row">
          <span class="label">Chủ mệnh:</span>
          <span class="value">Test</span>
        </div>
        <div class="info-row">
          <span class="label">Chủ thân:</span>
          <span class="value">Test</span>
        </div>
        <div class="info-row">
          <span class="label">Cân lượng:</span>
          <span class="value">Test</span>
        </div>
        <div class="info-row">
          <span class="label">Lai nhân:</span>
          <span class="value">Test</span>
        </div>
        <div class="info-row">
          <span class="label">Năm xem:</span>
          <span class="value">Test</span>
        </div>
        <div class="info-row">
          <span class="label">Tháng xem:</span>
          <span class="value">Test</span>
        </div> -->
      </div>
      <div class="tu-vi-col" style="flex: 1">
        <div v-for="n in [6, 7]" :key="n" class="tu-vi-card">
          <div class="tu-vi-header">
            <span class="tiny-text">{{data.palaces[n].heavenlyStem}} {{data.palaces[n].earthlyBranch}}</span>
            <span class="tiny-text">{{data.palaces[n].decadal.range[0]}}</span>
          </div>
          <div>
            <span>{{ data.palaces[n].name }}</span>
          </div>
          <div class="tu-vi-body">
            <!-- <div class="tu-vi-title">Thái Dương (M)</div> -->
            <div class="tu-vi-content">
              <div class="tu-vi-list">
                <p class="text-yellow-500">Chính tinh:</p>
                <p
                  class="tiny-text"
                  v-for="(star, i) in data.palaces[n].majorStars"
                  :key="i"
                >
                  {{ star }}
                </p>
                <br />
                <p class="text-yellow-500">Phụ tinh:</p>
                <p
                  class="tiny-text"
                  v-for="(star, i) in data.palaces[n].minorStars"
                  :key="i"
                >
                  {{ star }}
                </p>
              </div>
            </div>
          </div>
          <!-- <div class="tu-vi-footer">
            <span>Ngọ</span>
            <span>Bệnh</span>
            <span>T5</span>
          </div> -->
        </div>
      </div>
    </div>
    <!-- Last Row -->
    <div class="tu-vi-row">
      <div v-for="n in [8, 9, 10, 11]" :key="n" class="tu-vi-card">
        <div class="tu-vi-header">
          <span class="tiny-text">{{data.palaces[n].heavenlyStem}} {{data.palaces[n].earthlyBranch}}</span>
          <span class="tiny-text">{{data.palaces[n].decadal.range[0]}}</span>
        </div>
        <div>
          <span>{{ data.palaces[n].name }}</span>
        </div>
        <div class="tu-vi-body">
          <!-- <div class="tu-vi-title">Thái Dương (M)</div> -->
          <div class="tu-vi-content">
            <div class="tu-vi-list">
              <p class="text-yellow-500">Chính tinh:</p>
              <p
                class="tiny-text"
                v-for="(star, i) in data.palaces[n].majorStars"
                :key="i"
              >
                {{ star }}
              </p>
              <br />
              <p class="text-yellow-500">Phụ tinh:</p>
              <p
                class="tiny-text"
                v-for="(star, i) in data.palaces[n].minorStars"
                :key="i"
              >
                {{ star }}
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="tu-vi-footer">
          <span>Ngọ</span>
          <span>Bệnh</span>
          <span>T5</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Lá số tử vi */
.luan-giai-tu-vi {
  width: 100%;
  /* background-color: #fffbf2; */
  color: white;
}

.tu-vi-row {
  width: 100%;
  display: flex;
}

.tu-vi-col {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.tu-vi-card {
  font-size: 10px;
  font-family: Lora;
  width: 100%;
  padding: 5px;
  height: 200px;
  background-image: url("../assets/zodiac/tuvi-border-lotus.png");
  background-size: cover;
  border-radius: 5px;
}

.tu-vi-header,
.tu-vi-footer {
  display: flex;
  justify-content: space-between;
}

.tu-vi-footer {
  position: relative;
  bottom: -100px;
}

.tu-vi-title {
  padding: 5px 0 5px 0;
  font-weight: 600;
}

.tu-vi-content {
}

.tu-vi-list {
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 100%;
  align-items: start;
  text-align: start;
}

.tu-vi-main {
  font-size: 10px;
  font-family: Lora;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-image: url("../assets/zodiac/main-border.png");
  background-size: cover;
  border-radius: 5px;
}

.tu-vi-main-title {
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #e6ca77;
}

.info-row {
  display: flex;
  margin-left: 15px;
  margin-bottom: 4px;
}

.label {
  width: 80px; /* Bắt buộc phải có chiều rộng cố định để thẳng hàng */
  flex-shrink: 0; /* Không cho phép tiêu đề bị co lại */
  font-weight: 900;
  text-align: start;
}

.tiny-text {
  font-size: 8px;
}
</style>
