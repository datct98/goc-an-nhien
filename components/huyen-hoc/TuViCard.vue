<template>
    <div class="dashboard-container">
        <header class="main-header">
            <div class="text-4xl">Báo cáo phân tích vận mệnh</div>
            <div class="header-subtitle">NHÂN TƯỚNG &nbsp; • &nbsp; BÁT TỰ &nbsp; • &nbsp; KINH DỊCH &nbsp; • &nbsp;
                PHONG THỦY</div>
        </header>

        <div class="main-layout">

            <aside class="sidebar">
                <div class="profile-pic">
                    <Image src="/huyenHoc/avatar.png" width="250" />
                </div>
                <div class="info-group text-sm">
                    <FieldSetCustom label="Thông tin cá nhân">
                        <div class="info-item">
                            <span class="info-label">Họ và tên:</span>
                            <span class="info-value">Hoàng Anh</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Giới tính:</span>
                            <span class="info-value">Nam</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Ngày sinh:</span>
                            <span class="info-value">04/10/2025</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Giờ sinh</span>
                            <span class="info-value">06:00</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Nơi sinh</span>
                            <span class="info-value">Hà Nội</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Tuổi</span>
                            <span class="info-value">Nhâm thân</span>
                        </div>
                    </FieldSetCustom>
                </div>
            </aside>

            <main class="content-grid">

                <section class="span-2">
                    <FieldSetCustom label="Tổng quan vận mệnh">
                        <div class="card-body-split text-sm">
                            <div class="sub-block">
                                <div class="w-full text-center font-bold text-green-500">Điểm mạnh</div>
                                <div class="long">
                                    <ul>
                                        <li class="flex justify-center content-center items-center p-2"
                                            v-for="item in 4">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="text-green-500" />
                                            <div>Thông minh, nhanh nhẹn</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sub-block">
                                <div class="w-full text-center font-bold text-red-500">Điểm yếu</div>
                                <div class="long">
                                    <ul>
                                        <li class="flex justify-center content-center items-center p-2"
                                            v-for="item in 4">
                                            <font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-red-500" />
                                            <div>Thông minh, nhanh nhẹn</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="w-full">
                                <FieldSetCustom label="Tổng quan">
                                    <div class="text-center text-sm">Là người có ý chí mạnh mẽ abczyz</div>
                                </FieldSetCustom>
                            </div>
                        </div>
                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="2. Bát tự/ Tứ trụ">

                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="3. Ngũ hành cân bằng">

                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="4. Phân tích nhân tướng">

                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="5. Phân tích chi tiết">

                    </FieldSetCustom>
                </section>

                <section class="span-2">
                    <FieldSetCustom label="6. Hồ sơ tính cách">

                    </FieldSetCustom>
                </section>

                <section class="span-2">
                    <FieldSetCustom label="7. Vận trình cuộc đời">

                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="8. Quẻ kinh dịch chủ đạo">

                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="9. Cảnh báo và lời khuyên">

                    </FieldSetCustom>
                </section>

                <section class="span-3">
                    <FieldSetCustom label="10. Gợi ý phong thuỷ">

                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="11. Lời kết">

                    </FieldSetCustom>
                </section>

            </main>
        </div>
    </div>
</template>

<script setup>
import FieldSetCustom from './FieldSetCustom.vue'
</script>


<style scoped>
/* --- RESET & BASE STYLES --- */
* {
    font-family: Lora;
}

/* --- PLACEHOLDER GENERICS --- */
.line {
    height: 8px;
    background-color: #e0e0e0;
    margin-bottom: 8px;
    border-radius: 4px;
}

.line.short {
    width: 30%;
}

.line.medium {
    width: 60%;
}

.line.long {
    width: 100%;
}

.placeholder-image {
    background-color: #cccccc;
    border-radius: 4px;
}

.placeholder-table {
    background-color: #eaeaea;
    width: 100%;
    height: 120px;
    border-radius: 4px;
}

.placeholder-chart {
    background-color: #dbdbdb;
    width: 100%;
    height: 120px;
    border-radius: 4px;
}

/* --- MAIN LAYOUT STRUCTURE --- */
.dashboard-container {
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: rgba(83, 70, 70, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 20px;
}

.main-header {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.main-layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 20px;
}

/* --- SIDEBAR STYLE --- */
.sidebar {
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.profile-pic {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* --- CONTENT GRID SYSTEM --- */
.content-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 15px;
}

/* --- CARD MODULES --- */
.card {
    border: 2px dashed #b0b0b0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 180px;
}

/* Grid Spanning Classes */
.span-2 {
    grid-column: span 2;
}

.span-3 {
    grid-column: span 3;
}

.card-header {
    height: 20px;
    background-color: #b0b0b0;
    width: 50%;
    border-radius: 2px;
}

/* --- INTERNAL CARD COMPONENT LAYOUTS --- */
.card-body-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.face-analysis-layout {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 15px;
}

.face-box {
    height: 100px;
}

.flex-row-icons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    height: 100%;
    align-items: center;
}

.icon-block {
    background-color: #dbdbdb;
    flex: 1;
    height: 60px;
    border-radius: 4px;
}

.icon-block.circle {
    border-radius: 50%;
    height: 50px;
    max-width: 50px;
}

.icon-block.square {
    max-width: 70px;
    height: 70px;
}

.chart-layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 15px;
}

.hexagram-layout {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 15px;
}

.hex-icon {
    height: 80px;
}

.info-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

/* --- RESPONSIVE BREAKPOINTS --- */
.info-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
}

.info-label {
    color: rgba(255, 255, 255, 0.6);
}

.info-value {
    color: #fff;
    font-weight: 500;
}

@media (max-width: 1200px) {
    .content-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .span-2,
    .span-3 {
        grid-column: span 2;
    }
}

@media (max-width: 900px) {
    .main-layout {
        grid-template-columns: 1fr;
    }

    .content-grid {
        grid-template-columns: 1fr;
    }

    .span-2,
    .span-3 {
        grid-column: span 1;
    }
}
</style>