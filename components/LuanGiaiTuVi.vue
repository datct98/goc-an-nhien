<template>
  <div class="luan-giai-tu-vi">
    <!-- First Row -->
    <div class="tu-vi-row">
      <div v-for="n in [0, 1, 2, 3]" :key="n" class="tu-vi-card">
        <div class="tu-vi-card-inner">
          <div class="tu-vi-card-top">
            <div class="tu-vi-header">
              <span class="tiny-text">{{ data.palaces[n].heavenlyStem }} {{ data.palaces[n].earthlyBranch }}</span>
              <span class="tiny-text">{{ data.palaces[n].decadal.range[0] }}</span>
            </div>
            <div class="cungChuc">
              <span>{{ data.palaces[n].name }}</span>
            </div>
            <div class="tu-vi-body">
              <div class="tu-vi-content">
                <div class="tu-vi-list">
                  <p
                    v-for="(star, i) in data.palaces[n].majorStars"
                    :key="'major-' + i"
                    class="majorStar"
                    :style="`color: ${getColor(star)}`"
                  >
                    {{ star }}
                  </p>
                  <p class="star-separator">★</p>
                  <p
                    class="tiny-text"
                    v-for="(star, i) in data.palaces[n].minorStars"
                    :key="'minor-' + i"
                  >
                    {{ star }}
                  </p>
                  <p
                    class="adjective-text"
                    v-for="(star, i) in data.palaces[n].adjectiveStars"
                    :key="'adj-' + i"
                  >
                    {{ star }}
                  </p>
                  <p v-if="data.palaces[n].boshi12" class="adjective-text">
                    {{ data.palaces[n].boshi12 }}
                  </p>
                  <p v-if="data.palaces[n].thaiTue12" class="adjective-text">
                    {{ data.palaces[n].thaiTue12 }}
                  </p>
                  <p v-if="data.palaces[n].tuongQuan12" class="adjective-text">
                    {{ data.palaces[n].tuongQuan12 }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="tu-vi-footer">
            <span class="footer-branch">{{ data.palaces[n].earthlyBranch }}</span>
            <span class="footer-changsheng">{{ data.palaces[n].changsheng12 }}</span>
            <span class="footer-month">{{ getMonth(data.palaces[n].earthlyBranch) }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Second and Third row -->
    <div class="tu-vi-row">
      <div class="tu-vi-col" style="flex: 1">
        <div v-for="n in [4, 5]" :key="n" class="tu-vi-card">
          <div class="tu-vi-card-inner">
            <div class="tu-vi-card-top">
              <div class="tu-vi-header">
                <span class="tiny-text">{{ data.palaces[n].heavenlyStem }} {{ data.palaces[n].earthlyBranch }}</span>
                <span class="tiny-text">{{ data.palaces[n].decadal.range[0] }}</span>
              </div>
              <div class="cungChuc">
                <span>{{ data.palaces[n].name }}</span>
              </div>
              <div class="tu-vi-body">
                <div class="tu-vi-content">
                  <div class="tu-vi-list">
                    <p
                      v-for="(star, i) in data.palaces[n].majorStars"
                      :key="'major-' + i"
                      class="majorStar"
                      :style="`color: ${getColor(star)}`"
                    >
                      {{ star }}
                    </p>
                    <p class="star-separator">★</p>
                    <p
                      class="tiny-text"
                      v-for="(star, i) in data.palaces[n].minorStars"
                      :key="'minor-' + i"
                    >
                      {{ star }}
                    </p>
                    <p
                      class="adjective-text"
                      v-for="(star, i) in data.palaces[n].adjectiveStars"
                      :key="'adj-' + i"
                    >
                      {{ star }}
                    </p>
                    <p v-if="data.palaces[n].boshi12" class="adjective-text">
                      {{ data.palaces[n].boshi12 }}
                    </p>
                    <p v-if="data.palaces[n].thaiTue12" class="adjective-text">
                      {{ data.palaces[n].thaiTue12 }}
                    </p>
                    <p v-if="data.palaces[n].tuongQuan12" class="adjective-text">
                      {{ data.palaces[n].tuongQuan12 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="tu-vi-footer">
              <span class="footer-branch">{{ data.palaces[n].earthlyBranch }}</span>
              <span class="footer-changsheng">{{ data.palaces[n].changsheng12 }}</span>
              <span class="footer-month">{{ getMonth(data.palaces[n].earthlyBranch) }}</span>
            </div>
          </div>
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
      </div>
      <div class="tu-vi-col" style="flex: 1">
        <div v-for="n in [6, 7]" :key="n" class="tu-vi-card">
          <div class="tu-vi-card-inner">
            <div class="tu-vi-card-top">
              <div class="tu-vi-header">
                <span class="tiny-text">{{ data.palaces[n].heavenlyStem }} {{ data.palaces[n].earthlyBranch }}</span>
                <span class="tiny-text">{{ data.palaces[n].decadal.range[0] }}</span>
              </div>
              <div class="cungChuc">
                <span>{{ data.palaces[n].name }}</span>
              </div>
              <div class="tu-vi-body">
                <div class="tu-vi-content">
                  <div class="tu-vi-list">
                    <p
                      v-for="(star, i) in data.palaces[n].majorStars"
                      :key="'major-' + i"
                      class="majorStar"
                      :style="`color: ${getColor(star)}`"
                    >
                      {{ star }}
                    </p>
                    <p class="star-separator">★</p>
                    <p
                      class="tiny-text"
                      v-for="(star, i) in data.palaces[n].minorStars"
                      :key="'minor-' + i"
                    >
                      {{ star }}
                    </p>
                    <p
                      class="adjective-text"
                      v-for="(star, i) in data.palaces[n].adjectiveStars"
                      :key="'adj-' + i"
                    >
                      {{ star }}
                    </p>
                    <p v-if="data.palaces[n].boshi12" class="adjective-text">
                      {{ data.palaces[n].boshi12 }}
                    </p>
                    <p v-if="data.palaces[n].thaiTue12" class="adjective-text">
                      {{ data.palaces[n].thaiTue12 }}
                    </p>
                    <p v-if="data.palaces[n].tuongQuan12" class="adjective-text">
                      {{ data.palaces[n].tuongQuan12 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="tu-vi-footer">
              <span class="footer-branch">{{ data.palaces[n].earthlyBranch }}</span>
              <span class="footer-changsheng">{{ data.palaces[n].changsheng12 }}</span>
              <span class="footer-month">{{ getMonth(data.palaces[n].earthlyBranch) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Last Row -->
    <div class="tu-vi-row">
      <div v-for="n in [8, 9, 10, 11]" :key="n" class="tu-vi-card">
        <div class="tu-vi-card-inner">
          <div class="tu-vi-card-top">
            <div class="tu-vi-header">
              <span class="tiny-text">{{ data.palaces[n].heavenlyStem }} {{ data.palaces[n].earthlyBranch }}</span>
              <span class="tiny-text">{{ data.palaces[n].decadal.range[0] }}</span>
            </div>
            <div class="cungChuc">
              <span>{{ data.palaces[n].name }}</span>
            </div>
            <div class="tu-vi-body">
              <div class="tu-vi-content">
                <div class="tu-vi-list">
                  <p
                    v-for="(star, i) in data.palaces[n].majorStars"
                    :key="'major-' + i"
                    class="majorStar"
                    :style="`color: ${getColor(star)}`"
                  >
                    {{ star }}
                  </p>
                  <p class="star-separator">★</p>
                  <p
                    class="tiny-text"
                    v-for="(star, i) in data.palaces[n].minorStars"
                    :key="'minor-' + i"
                  >
                    {{ star }}
                  </p>
                  <p
                    class="adjective-text"
                    v-for="(star, i) in data.palaces[n].adjectiveStars"
                    :key="'adj-' + i"
                  >
                    {{ star }}
                  </p>
                  <p v-if="data.palaces[n].boshi12" class="adjective-text">
                    {{ data.palaces[n].boshi12 }}
                  </p>
                  <p v-if="data.palaces[n].thaiTue12" class="adjective-text">
                    {{ data.palaces[n].thaiTue12 }}
                  </p>
                  <p v-if="data.palaces[n].tuongQuan12" class="adjective-text">
                    {{ data.palaces[n].tuongQuan12 }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="tu-vi-footer">
            <span class="footer-branch">{{ data.palaces[n].earthlyBranch }}</span>
            <span class="footer-changsheng">{{ data.palaces[n].changsheng12 }}</span>
            <span class="footer-month">{{ getMonth(data.palaces[n].earthlyBranch) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const majorStarColorMapping = {
  yellow: ["Tử Vi", "Thiên Phủ"],
  red: ["Liêm Trinh", "Thái Dương"],
  gray: ["Vũ Khúc", "Thất Sát"],
  green: ["Thiên Cơ", "Thiên Lương"],
  black: [
    "Thiên Đồng",
    "Thái Âm",
    "Tham Lang",
    "Cự Môn",
    "Thiên Tướng",
    "Phá Quân",
  ],
};

// Mapping tháng âm lịch theo địa chi cung (fallback nếu backend chưa trả month)
const branchToMonth = {
  "Dần": "T.1", "Mão": "T.2", "Thìn": "T.3", "Tỵ": "T.4",
  "Ngọ": "T.5", "Mùi": "T.6", "Thân": "T.7", "Dậu": "T.8",
  "Tuất": "T.9", "Hợi": "T.10", "Tý": "T.11", "Sửu": "T.12"
};

const getMonth = (earthlyBranch) => {
  return branchToMonth[earthlyBranch] || "";
};

const getColor = (color) => {
  let result = color.replace(/\(.*\)/, "").trim();
  if (majorStarColorMapping.yellow.includes(result)) {
    return "yellow";
  }
  if (majorStarColorMapping.red.includes(result)) {
    return "coral";
  }
  if (majorStarColorMapping.gray.includes(result)) {
    return "lightgray";
  }
  if (majorStarColorMapping.green.includes(result)) {
    return "lightgreen";
  }
  if (majorStarColorMapping.black.includes(result)) {
    return "black";
  }
  return "lightgray";
};

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
  height: 225px;
  background-image: url("../assets/zodiac/tuvi-border-lotus.png");
  background-size: cover;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-color: #bfb98d8c;
}

.tu-vi-card-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.tu-vi-card-top {
  flex: 1;
  overflow: hidden;
}

.tu-vi-header {
  display: flex;
  justify-content: space-between;
}

.tu-vi-body {
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

.tu-vi-list p {
  margin: 0;
  padding: 0;
}

.star-separator {
  line-height: 1.2;
}

/* Footer giống Altuvi: Địa chi (trái) + Trường sinh (giữa, vàng cam) + Tháng (phải) */
.tu-vi-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3px;
  margin-top: 2px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-branch {
  font-size: 9px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
}

.footer-changsheng {
  font-size: 10px;
  color: #f0a500;
  font-weight: 700;
}

.footer-month {
  font-size: 9px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
}

.tu-vi-title {
  padding: 5px 0 5px 0;
  font-weight: 600;
}

.tu-vi-main {
  font-size: 12px;
  font-family: Lora;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-image: url("../assets/zodiac/main-border.png");
  background-size: cover;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-color: #bac7998c;
  padding-left: 5px;
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
  width: 80px;
  flex-shrink: 0;
  font-weight: 900;
  text-align: start;
}

.tiny-text {
  font-size: 10px;
}

.adjective-text {
  font-size: 8px;
  line-height: 1.2;
  opacity: 0.7;
}

.majorStar {
  font-size: 11px;
  width: 100%;
  text-align: center;
}

.cungChuc {
  color: #eed2ff;
}
</style>
