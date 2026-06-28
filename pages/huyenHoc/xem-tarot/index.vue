<template>
    <div v-if="isMobileView" class="container-huyenhoc-mobile">

    </div>
    <div v-else class="container-huyenHoc">
        <StarOverlay />

        <DesktopTitle title="Xem tarot" sub="Thấu hiểu bản thân qua dòng chảy của số mệnh" />

        <div class="wizard flex justify-center items-center">
            <div class="w-full max-w-4xl">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">Xem tarot</div>
                        <div class="card-subtitle">Hãy để các lá bài dẫn lối cho bạn</div>
                    </div>
                    <div class="card-body">
                        <div class="form-section">
                            <div class="form-group">
                                <label class="form-label">Chọn loại trải bài</label>
                                <div class="radio-group">
                                    <div class="radio-option" :class="{ active: selectedSpread === 'oneCard' }"
                                        @click="selectSpread('oneCard')">
                                        <div class="radio-dot"></div>
                                        <div class="radio-label">Một lá bài</div>
                                    </div>
                                    <div class="radio-option" :class="{ active: selectedSpread === 'threeCard' }"
                                        @click="selectSpread('threeCard')">
                                        <div class="radio-dot"></div>
                                        <div class="radio-label">Ba lá bài</div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Nhập câu hỏi của bạn</label>
                                <textarea class="form-input" v-model="question" rows="3"
                                    placeholder="Ví dụ: Tình yêu của tôi trong 3 tháng tới sẽ như thế nào?"
                                    :class="{ 'input-error': questionError }"></textarea>
                                <div v-if="questionError" class="error-message">{{ questionError }}</div>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Chọn ngày sinh</label>
                                <div class="date-group">
                                    <div class="date-input">
                                        <input type="number" v-model.number="day" placeholder="Ngày" min="1" max="31"
                                            :class="{ 'input-error': dateError }">
                                    </div>
                                    <div class="date-input">
                                        <input type="number" v-model.number="month" placeholder="Tháng" min="1" max="12"
                                            :class="{ 'input-error': dateError }">
                                    </div>
                                    <div class="date-input">
                                        <input type="number" v-model.number="year" placeholder="Năm" min="1900"
                                            max="2100" :class="{ 'input-error': dateError }">
                                    </div>
                                </div>
                                <div v-if="dateError" class="error-message">{{ dateError }}</div>
                            </div>
                        </div>

                        <div class="button-section">
                            <button class="btn-action" @click="handleDrawCards()" :disabled="isProcessing">
                                <span v-if="!isProcessing">Rút bài</span>
                                <span v-else>Đang xử lý...</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const router = useRouter();
const { $common } = useNuxtApp();
const { isMobileView } = useDevice();
</script>
<style src="../index.css"></style>
<style lang="css" scoped></style>