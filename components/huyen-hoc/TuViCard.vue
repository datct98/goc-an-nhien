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
                    <Image src="/huyenHoc/men-line.png" width="250" />
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
                        <div class="four-pillars text-white text-xs">
                            <div class="pillars-grid">
                                <div class="pillar-col">
                                    <div class="cell-head">NĂM</div>
                                    <div class="cell-name">Nhâm Thân</div>
                                    <div class="cell-deity">Chính Tài</div>
                                    <div class="cell-char stem">壬</div>
                                    <div class="cell-elem">(Thủy)</div>
                                    <div class="cell-char branch">申</div>
                                    <div class="cell-elem">(Thân)</div>
                                </div>
                                <div class="pillar-col">
                                    <div class="cell-head">THÁNG</div>
                                    <div class="cell-name">Giáp Tý</div>
                                    <div class="cell-deity">Chính Quan</div>
                                    <div class="cell-char stem text-green-400">甲</div>
                                    <div class="cell-elem">(Mộc)</div>
                                    <div class="cell-char branch">子</div>
                                    <div class="cell-elem">(Tý)</div>
                                </div>
                                <div class="pillar-col">
                                    <div class="cell-head">NGÀY</div>
                                    <div class="cell-name">Kỷ Sửu</div>
                                    <div class="cell-deity">Nhật Chủ</div>
                                    <div class="cell-char stem text-yellow-600">己</div>
                                    <div class="cell-elem">(Thổ)</div>
                                    <div class="cell-char branch">丑</div>
                                    <div class="cell-elem">(Sửu)</div>
                                </div>
                                <div class="pillar-col">
                                    <div class="cell-head">GIỜ</div>
                                    <div class="cell-name">Nhâm Thân</div>
                                    <div class="cell-deity">Chính Tài</div>
                                    <div class="cell-char stem">壬</div>
                                    <div class="cell-elem">(Thủy)</div>
                                    <div class="cell-char branch">申</div>
                                    <div class="cell-elem">(Thân)</div>
                                </div>
                            </div>

                            <div class="pillars-summary text-xs mt-4">
                                <div class="summary-row">
                                    <span class="label">Nhật chủ:</span>
                                    <span class="val">KỶ THỔ (Âm Thổ)</span>
                                </div>
                                <div class="summary-row">
                                    <span class="label">Mệnh cục:</span>
                                    <span class="val">Thổ sinh Kim, Thủy vượng, Mộc khắc Thổ</span>
                                </div>
                                <div class="summary-row flex justify-between gap-2">
                                    <div>
                                        <span class="label">Dụng thần:</span>
                                        <span class="val">HỎA, THỔ</span>
                                    </div>
                                    <div>
                                        <span class="label">Kỵ thần:</span>
                                        <span class="val">MỘC, THỦY, KIM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="3. Ngũ hành cân bằng">
                        <div class="element-balance text-white text-xs">
                            <div class="element-row">
                                <div class="element-info">
                                    <span class="element-icon text-yellow-600">
                                        <font-awesome-icon icon="fa-solid fa-circle-nodes" />
                                    </span>
                                    <span class="element-name">KIM</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill bg-yellow-600/80" style="width: 20%"></div>
                                </div>
                                <div class="element-percent">20%</div>
                            </div>
                            <div class="element-row">
                                <div class="element-info">
                                    <span class="element-icon text-green-600">
                                        <font-awesome-icon icon="fa-solid fa-leaf" />
                                    </span>
                                    <span class="element-name">MỘC</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill bg-green-600/80" style="width: 15%"></div>
                                </div>
                                <div class="element-percent">15%</div>
                            </div>
                            <div class="element-row">
                                <div class="element-info">
                                    <span class="element-icon text-blue-500">
                                        <font-awesome-icon icon="fa-solid fa-droplet" />
                                    </span>
                                    <span class="element-name">THỦY</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill bg-blue-500/80" style="width: 30%"></div>
                                </div>
                                <div class="element-percent">30%</div>
                            </div>
                            <div class="element-row">
                                <div class="element-info">
                                    <span class="element-icon text-red-600">
                                        <font-awesome-icon icon="fa-solid fa-fire" />
                                    </span>
                                    <span class="element-name">HOẢ</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill bg-red-600/80" style="width: 20%"></div>
                                </div>
                                <div class="element-percent">20%</div>
                            </div>
                            <div class="element-row">
                                <div class="element-info">
                                    <span class="element-icon text-amber-800">
                                        <font-awesome-icon icon="fa-solid fa-mountain" />
                                    </span>
                                    <span class="element-name">THỔ</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill bg-amber-800/80" style="width: 15%"></div>
                                </div>
                                <div class="element-percent">15%</div>
                            </div>

                            <div class="summary-text mt-4 text-center">
                                <div class="val">Ngũ hành tương đối cân bằng</div>
                                <div class="label">Ưu tiên bổ sung: <span class="val">HỎA, THỔ</span></div>
                            </div>
                        </div>
                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="4. Phân tích nhân tướng">
                        <div class="face-analysis text-white text-xs">
                            <div class="face-image-container">
                                <Image src="/huyenHoc/men-line.png" width="130" />
                            </div>
                            <div class="face-info-list">
                                <div class="face-item">
                                    <span class="face-icon text-amber-600"><font-awesome-icon
                                            icon="fa-solid fa-circle-user" /></span>
                                    <div class="face-text">
                                        <span class="face-label">Trán:</span>
                                        <span class="face-value">Cao, rộng – tư duy tốt, có tầm nhìn xa</span>
                                    </div>
                                </div>
                                <div class="face-item">
                                    <span class="face-icon text-amber-600"><font-awesome-icon
                                            icon="fa-solid fa-lines-leaning" /></span>
                                    <div class="face-text">
                                        <span class="face-label">Lông mày:</span>
                                        <span class="face-value">Thanh tú – tính quyết đoán, ý chí mạnh</span>
                                    </div>
                                </div>
                                <div class="face-item">
                                    <span class="face-icon text-amber-600"><font-awesome-icon
                                            icon="fa-solid fa-eye" /></span>
                                    <div class="face-text">
                                        <span class="face-label">Mắt:</span>
                                        <span class="face-value">Sáng, có thần – thông minh, nhanh nhạy</span>
                                    </div>
                                </div>
                                <div class="face-item">
                                    <span class="face-icon text-amber-600"><font-awesome-icon
                                            icon="fa-solid fa-caret-up" /></span>
                                    <div class="face-text">
                                        <span class="face-label">Mũi:</span>
                                        <span class="face-value">Sống mũi thẳng – tài vận tốt, có chí tiến thủ</span>
                                    </div>
                                </div>
                                <div class="face-item">
                                    <span class="face-icon text-amber-600"><font-awesome-icon
                                            icon="fa-solid fa-comment" /></span>
                                    <div class="face-text">
                                        <span class="face-label">Miệng:</span>
                                        <span class="face-value">Môi mỏng – nói năng sắc sảo, thẳng thắn</span>
                                    </div>
                                </div>
                                <div class="face-item">
                                    <span class="face-icon text-amber-600"><font-awesome-icon
                                            icon="fa-solid fa-square" /></span>
                                    <div class="face-text">
                                        <span class="face-label">Cằm:</span>
                                        <span class="face-value">Cằm vuông – kiên định, hậu vận vững vàng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="5. Phân tích chi tiết">
                        <div class="detailed-analysis text-white text-xs">
                            <table class="w-full analysis-table">
                                <thead>
                                    <tr>
                                        <th class="text-left">HẠNG MỤC</th>
                                        <th class="text-center">ĐÁNH GIÁ</th>
                                        <th class="text-left">NHẬN XÉT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="category">
                                            <span class="icon text-amber-600"><font-awesome-icon
                                                    icon="fa-solid fa-coins" /></span>
                                            TÀI VẬN
                                        </td>
                                        <td class="rating">
                                            <div class="stars">
                                                <font-awesome-icon icon="fa-solid fa-star" v-for="i in 4" />
                                                <font-awesome-icon icon="fa-regular fa-star" />
                                            </div>
                                        </td>
                                        <td class="comment">Tài vận tốt, có cơ hội tích lũy lớn</td>
                                    </tr>
                                    <tr>
                                        <td class="category">
                                            <span class="icon text-amber-600"><font-awesome-icon
                                                    icon="fa-solid fa-briefcase" /></span>
                                            SỰ NGHIỆP
                                        </td>
                                        <td class="rating">
                                            <div class="stars">
                                                <font-awesome-icon icon="fa-solid fa-star" v-for="i in 4" />
                                                <font-awesome-icon icon="fa-regular fa-star" />
                                            </div>
                                        </td>
                                        <td class="comment">Sự nghiệp ổn định, dễ thăng tiến</td>
                                    </tr>
                                    <tr>
                                        <td class="category">
                                            <span class="icon text-amber-600"><font-awesome-icon
                                                    icon="fa-solid fa-heart" /></span>
                                            TÌNH DUYÊN
                                        </td>
                                        <td class="rating">
                                            <div class="stars">
                                                <font-awesome-icon icon="fa-solid fa-star" v-for="i in 4" />
                                                <font-awesome-icon icon="fa-regular fa-star" />
                                            </div>
                                        </td>
                                        <td class="comment">Tình duyên thuận lợi, gia đạo êm ấm</td>
                                    </tr>
                                    <tr>
                                        <td class="category">
                                            <span class="icon text-amber-600"><font-awesome-icon
                                                    icon="fa-solid fa-shield-heart" /></span>
                                            SỨC KHỎE
                                        </td>
                                        <td class="rating">
                                            <div class="stars">
                                                <font-awesome-icon icon="fa-solid fa-star" v-for="i in 4" />
                                                <font-awesome-icon icon="fa-regular fa-star" />
                                            </div>
                                        </td>
                                        <td class="comment">Chú ý dạ dày, xương khớp, stress</td>
                                    </tr>
                                    <tr>
                                        <td class="category">
                                            <span class="icon text-amber-600"><font-awesome-icon
                                                    icon="fa-solid fa-house" /></span>
                                            GIA ĐẠO
                                        </td>
                                        <td class="rating">
                                            <div class="stars">
                                                <font-awesome-icon icon="fa-solid fa-star" v-for="i in 4" />
                                                <font-awesome-icon icon="fa-regular fa-star" />
                                            </div>
                                        </td>
                                        <td class="comment">Gia đạo hòa thuận, hạnh phúc</td>
                                    </tr>
                                    <tr>
                                        <td class="category">
                                            <span class="icon text-amber-600"><font-awesome-icon
                                                    icon="fa-solid fa-user-check" /></span>
                                            QUÝ NHÂN
                                        </td>
                                        <td class="rating">
                                            <div class="stars">
                                                <font-awesome-icon icon="fa-solid fa-star" v-for="i in 4" />
                                                <font-awesome-icon icon="fa-regular fa-star" />
                                            </div>
                                        </td>
                                        <td class="comment">Được quý nhân phù trợ, giúp đỡ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </FieldSetCustom>
                </section>

                <section class="span-2">
                    <FieldSetCustom label="6. Hồ sơ tính cách">
                        <div class="personality-profile text-white text-xs">
                            <div class="personality-grid">
                                <div class="personality-block">
                                    <div class="icon-wrapper">
                                        <font-awesome-icon icon="fa-solid fa-microchip" class="text-amber-500" />
                                    </div>
                                    <div class="title">TƯ DUY</div>
                                    <div class="desc">Logic, phân tích tốt, thích tìm hiểu bản chất vấn đề</div>
                                </div>
                                <div class="personality-block">
                                    <div class="icon-wrapper">
                                        <font-awesome-icon icon="fa-solid fa-heart-pulse" class="text-red-500" />
                                    </div>
                                    <div class="title">CẢM XÚC</div>
                                    <div class="desc">Nội tâm sâu sắc, sống tình cảm, biết quan tâm</div>
                                </div>
                                <div class="personality-block">
                                    <div class="icon-wrapper">
                                        <font-awesome-icon icon="fa-solid fa-user-tie" class="text-blue-500" />
                                    </div>
                                    <div class="title">HÀNH VI</div>
                                    <div class="desc">Chủ động, quyết đoán, trách nhiệm</div>
                                </div>
                                <div class="personality-block">
                                    <div class="icon-wrapper">
                                        <font-awesome-icon icon="fa-solid fa-shield-halved" class="text-green-500" />
                                    </div>
                                    <div class="title">ĐIỂM MẠNH</div>
                                    <div class="desc">Kỷ luật cao, kiên trì, không ngại khó</div>
                                </div>
                                <div class="personality-block">
                                    <div class="icon-wrapper">
                                        <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles"
                                            class="text-indigo-400" />
                                    </div>
                                    <div class="title">ĐIỂM CẦN CẢI THIỆN</div>
                                    <div class="desc">Kiên nhẫn hơn, kiểm soát cảm xúc, tránh ôm đồm</div>
                                </div>
                            </div>
                        </div>
                    </FieldSetCustom>
                </section>

                <section class="span-2">
                    <FieldSetCustom label="7. Vận trình cuộc đời">
                        <div class="life-path text-white text-xs">
                            <div class="life-table-wrapper">
                                <table class="life-table">
                                    <thead>
                                        <tr>
                                            <th>GIAI ĐOẠN</th>
                                            <th>ĐỘ TUỔI</th>
                                            <th>VẬN TRÌNH</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tiểu vận</td>
                                            <td>0 - 20</td>
                                            <td>Học tập, tích lũy nền tảng</td>
                                        </tr>
                                        <tr>
                                            <td>Thanh niên</td>
                                            <td>21 - 30</td>
                                            <td>Nỗ lực phát triển, nhiều cơ hội</td>
                                        </tr>
                                        <tr>
                                            <td>Trung vận</td>
                                            <td>31 - 45</td>
                                            <td>Sự nghiệp thăng tiến, tài lộc tăng</td>
                                        </tr>
                                        <tr>
                                            <td>Hậu vận</td>
                                            <td>46 - 60</td>
                                            <td>Ổn định, hưởng thành quả</td>
                                        </tr>
                                        <tr>
                                            <td>Viên mãn</td>
                                            <td>61+</td>
                                            <td>An nhàn, phúc lộc bền lâu</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="life-chart-wrapper">
                                <div class="chart-container">
                                    <div class="y-labels">
                                        <span>Thăng tiến</span>
                                        <span>Ổn định</span>
                                        <span>Trung bình</span>
                                        <span>Thử thách</span>
                                        <span>Khó khăn</span>
                                    </div>
                                    <div class="chart-svg-wrapper">
                                        <svg viewBox="0 -10 360 210" class="draw-chart">
                                            <!-- Grid lines -->
                                            <line x1="0" y1="20" x2="350" y2="20" stroke="rgba(255,255,255,0.08)" />
                                            <line x1="0" y1="60" x2="350" y2="60" stroke="rgba(255,255,255,0.08)" />
                                            <line x1="0" y1="100" x2="350" y2="100" stroke="rgba(255,255,255,0.08)" />
                                            <line x1="0" y1="140" x2="350" y2="140" stroke="rgba(255,255,255,0.08)" />
                                            <line x1="0" y1="180" x2="350" y2="180" stroke="rgba(255,255,255,0.08)" />

                                            <!-- Axes -->
                                            <line x1="0" y1="0" x2="0" y2="200" stroke="white" stroke-width="1" />
                                            <line x1="0" y1="200" x2="360" y2="200" stroke="white" stroke-width="1" />

                                            <!-- Line Graph -->
                                            <polyline fill="none" stroke="#d97706" stroke-width="2.5"
                                                points="0,160 50,145 100,100 150,105 200,70 250,75 300,30 350,35" />

                                            <!-- Data points -->
                                            <circle cx="0" cy="160" r="3.5" fill="#d97706" />
                                            <circle cx="50" cy="145" r="3.5" fill="#d97706" />
                                            <circle cx="100" cy="100" r="3.5" fill="#d97706" />
                                            <circle cx="150" cy="105" r="3.5" fill="#d97706" />
                                            <circle cx="200" cy="70" r="3.5" fill="#d97706" />
                                            <circle cx="250" cy="75" r="3.5" fill="#d97706" />
                                            <circle cx="300" cy="30" r="3.5" fill="#d97706" />
                                            <circle cx="350" cy="35" r="3.5" fill="#d97706" />
                                        </svg>
                                        <div class="x-labels">
                                            <span>0</span>
                                            <span>10</span>
                                            <span>20</span>
                                            <span>30</span>
                                            <span>40</span>
                                            <span>50</span>
                                            <span>60</span>
                                            <span>70+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="8. Quẻ kinh dịch chủ đạo">
                        <div class="hexagram-section text-white text-xs">
                            <div class="hexagram-title text-center text-sm font-bold mb-3">
                                QUẺ ĐỊA THIÊN THÁI (11)
                            </div>
                            <div class="hexagram-content">
                                <div class="hexagram-symbol">
                                    <div class="hex-line broken"></div>
                                    <div class="hex-line broken"></div>
                                    <div class="hex-line broken"></div>
                                    <div class="hex-line solid"></div>
                                    <div class="hex-line solid"></div>
                                    <div class="hex-line solid"></div>
                                </div>
                                <div class="hexagram-info">
                                    <div class="info-highlight">
                                        Địa trên đất – Thiên thời địa lợi – Mọi việc hanh thông
                                    </div>
                                    <div class="info-detail">
                                        Biểu thị thời vận tốt đẹp, được người giúp đỡ, thuận lợi phát triển.<br />
                                        Biết nắm bắt cơ hội sẽ đạt được thành công lớn.
                                    </div>
                                </div>
                            </div>
                            <div class="hexagram-advice mt-4 text-center border-t border-white/10 pt-3">
                                <span class="font-bold text-amber-500">Lời khuyên:</span>
                                <div>Giữ tâm chính trực – Hành động đúng lúc</div>
                                <div>Tích đức hành thiện – Vững bước tiến lên.</div>
                            </div>
                        </div>
                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="9. Cảnh báo và lời khuyên">
                        <div class="card-body-split text-sm">
                            <div class="sub-block">
                                <div class="w-full text-center font-bold text-green-500">Cảnh báo</div>
                                <div class="long">
                                    <ul>
                                        <li class="flex justify-center content-center items-center" v-for="item in 4">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="text-green-500" />
                                            <div>Thông minh, nhanh nhẹn</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sub-block">
                                <div class="w-full text-center font-bold text-red-500">Lời khuyên</div>
                                <div class="long">
                                    <ul>
                                        <li class="flex justify-center content-center items-center" v-for="item in 4">
                                            <font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-red-500" />
                                            <div>Thông minh, nhanh nhẹn</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FieldSetCustom>
                </section>

                <section class="span-3">
                    <FieldSetCustom label="10. Gợi ý phong thuỷ">
                        <div class="feng-shui-suggestions text-white text-[10px]">
                            <div class="feng-shui-grid">
                                <!-- Colored Circles -->
                                <div class="feng-shui-block">
                                    <div class="block-title uppercase font-bold mb-3">Màu sắc hợp mệnh</div>
                                    <div class="color-groups">
                                        <div class="color-group">
                                            <div class="circles">
                                                <div class="circle" style="background: #e11d48;"></div>
                                                <div class="circle" style="background: #881337;"></div>
                                            </div>
                                            <div class="label">Đỏ, Hồng, Tím <br /> (Cung Hỏa)</div>
                                        </div>
                                        <div class="color-group">
                                            <div class="circles">
                                                <div class="circle" style="background: #d97706;"></div>
                                                <div class="circle" style="background: #fde047;"></div>
                                            </div>
                                            <div class="label">Vàng, Nâu đất <br /> (Cung Thổ)</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Compass Directions -->
                                <div class="feng-shui-block">
                                    <div class="block-title uppercase font-bold mb-3">Hướng hợp</div>
                                    <div class="compass-layout">
                                        <div class="compass-icon">
                                            <font-awesome-icon icon="fa-regular fa-compass"
                                                class="text-3xl text-white/40" />
                                        </div>
                                        <div class="direction-list">
                                            <div class="dir-item"><span class="name">Nam</span> <span class="desc">(Sinh
                                                    Khí)</span></div>
                                            <div class="dir-item"><span class="name">Tây Nam</span> <span
                                                    class="desc">(Thiên Y)</span></div>
                                            <div class="dir-item"><span class="name">Đông Bắc</span> <span
                                                    class="desc">(Diên Niên)</span></div>
                                            <div class="dir-item"><span class="name">Tây</span> <span class="desc">(Phục
                                                    Vị)</span></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Lucky Numbers -->
                                <div class="feng-shui-block">
                                    <div class="block-title uppercase font-bold mb-3">Con số may mắn</div>
                                    <div class="lucky-numbers">
                                        <div class="number-circle">3</div>
                                        <div class="number-circle">9</div>
                                        <div class="number-circle">2</div>
                                    </div>
                                </div>

                                <!-- Gemstones -->
                                <div class="feng-shui-block">
                                    <div class="block-title uppercase font-bold mb-3">Vật phẩm hợp mệnh</div>
                                    <div class="gem-set-container">
                                        <div class="gem-labels">
                                            <span>Thạch anh hồng</span>
                                            <span>Mắt hổ vàng</span>
                                            <span>Mã não đỏ</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Careers -->
                                <div class="feng-shui-block">
                                    <div class="block-title uppercase font-bold mb-3">Nghề nghiệp hợp</div>
                                    <div class="career-layout">
                                        <div class="career-icon">
                                            <font-awesome-icon icon="fa-solid fa-briefcase"
                                                class="text-3xl text-amber-600/60" />
                                        </div>
                                        <div class="career-list">
                                            <div>Kinh doanh, Quản lý</div>
                                            <div>Tài chính, Công nghệ</div>
                                            <div>Giáo dục, Tư vấn</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FieldSetCustom>
                </section>

                <section>
                    <FieldSetCustom label="11. Lời kết">
                        <div class="conclusion-section text-white text-center">
                            <div class="conclusion-motto text-sm font-bold mb-4">
                                Vận mệnh nằm trong tay bạn – Hiểu mình – Đổi mệnh – Sống an nhiên
                            </div>
                            <div class="conclusion-message text-xs italic opacity-80 max-w-2xl mx-auto">
                                Hãy luôn giữ vững niềm tin, sống thiện lương và không ngừng nỗ lực, <br />
                                thành công và hạnh phúc sẽ đến với bạn.
                            </div>
                        </div>
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
}

/* --- SIDEBAR STYLE --- */
.sidebar {
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: start;
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

/* --- FOUR PILLARS TABLE --- */
.four-pillars {
    width: 100%;
}

.pillars-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    overflow: hidden;
}

.pillar-col {
    display: flex;
    flex-direction: column;
    text-align: center;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.pillar-col:last-child {
    border-right: none;
}

.pillar-col>div {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 6px 2px;
}

.pillar-col>div:last-child {
    border-bottom: none;
}

.cell-head {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.6);
}

.cell-name {
    font-weight: 600;
}

.cell-deity {
    color: rgba(255, 255, 255, 0.7);
}

.cell-char {
    font-size: 2.2rem;
    line-height: normal;
    padding: 10px 0 !important;
}

.cell-elem {
    color: rgba(255, 255, 255, 0.7);
}

.pillars-summary .summary-row {
    margin-bottom: 6px;
    line-height: 1.4;
}

.pillars-summary .label {
    color: rgba(255, 255, 255, 0.5);
    margin-right: 10px;
}

.pillars-summary .val {
    font-weight: bold;
    color: #fff;
}

/* --- ELEMENT BALANCE CHART --- */
.element-balance {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.element-row {
    display: flex;
    align-items: center;
    gap: 10px;
}

.element-info {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 70px;
}

.element-icon {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
}

.element-name {
    font-weight: 500;
    letter-spacing: 0.05em;
}

.progress-bar {
    flex-grow: 1;
    height: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    border-radius: 5px;
    transition: width 0.6s ease-out;
}

.element-percent {
    width: 35px;
    text-align: right;
    font-weight: 600;
}

.summary-text .label {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
}

.summary-text .val {
    font-weight: bold;
    color: #fff;
}

/* --- FACE ANALYSIS SECTION --- */
.face-analysis {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
}

.face-image-container {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
}

.face-info-list {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.face-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
}

.face-icon {
    font-size: 0.85rem;
    width: 18px;
    display: flex;
    justify-content: center;
    padding-top: 3px;
}

.face-text {
    line-height: 1.5;
}

.face-label {
    font-weight: bold;
    margin-right: 4px;
    color: #fff;
    white-space: nowrap;
}

.face-value {
    color: rgba(255, 255, 255, 0.8);
}

/* --- DETAILED ANALYSIS TABLE --- */
.detailed-analysis {
    width: 100%;
}

.analysis-table {
    border-collapse: collapse;
}

.analysis-table th {
    color: rgba(255, 255, 255, 0.6);
    font-weight: bold;
    padding: 10px 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.analysis-table td {
    padding: 12px 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    vertical-align: middle;
}

.analysis-table tr:last-child td {
    border-bottom: none;
}

.analysis-table .category {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    white-space: nowrap;
}

.analysis-table .category .icon {
    font-size: 0.9rem;
    width: 20px;
    display: flex;
    justify-content: center;
}

.analysis-table .rating {
    text-align: center;
}

.analysis-table .stars {
    color: #d97706;
    /* amber-600 */
    display: flex;
    justify-content: center;
    gap: 2px;
}

.analysis-table .comment {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.75rem;
    line-height: 1.4;
}

/* --- PERSONALITY PROFILE SECTION --- */
.personality-profile {
    width: 100%;
}

.personality-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
}

.personality-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px 5px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.personality-block:last-child {
    border-right: none;
}

.personality-block .icon-wrapper {
    font-size: 1.8rem;
    margin-bottom: 12px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.personality-block .title {
    font-weight: bold;
    margin-bottom: 10px;
    color: #fff;
    letter-spacing: 0.1em;
    font-size: 0.8rem;
}

.personality-block .desc {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    font-size: 0.7rem;
    max-width: 130px;
}

/* --- LIFE PATH SECTION --- */
.life-path {
    display: flex;
    gap: 24px;
    width: 100%;
    align-items: flex-start;
}

.life-table-wrapper {
    flex: 1;
}

.life-table {
    width: 100%;
    border-collapse: collapse;
}

.life-table th {
    text-align: left;
    color: rgba(255, 255, 255, 0.6);
    padding: 8px 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.life-table td {
    padding: 10px 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.life-table tr:last-child td {
    border-bottom: none;
}

.life-chart-wrapper {
    flex: 1.2;
    padding-top: 15px;
}

.chart-container {
    display: flex;
    gap: 12px;
    height: 180px;
}

.y-labels {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.6rem;
    color: rgba(255, 255, 255, 0.6);
    text-align: right;
    width: 65px;
    padding-bottom: 15px;
}

.chart-svg-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.draw-chart {
    flex-grow: 1;
    overflow: visible;
}

.x-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.65rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 8px;
    padding-right: 5px;
}

/* --- HEXAGRAM SECTION --- */
.hexagram-section {
    width: 100%;
}

.hexagram-content {
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 10px 0;
}

.hexagram-symbol {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100px;
    flex-shrink: 0;
}

.hex-line {
    height: 10px;
    background: #fff;
    border-radius: 2px;
}

.hex-line.solid {
    width: 100%;
}

.hex-line.broken {
    background: transparent;
    display: flex;
    justify-content: space-between;
}

.hex-line.broken::before,
.hex-line.broken::after {
    content: "";
    width: 44%;
    height: 100%;
    background: #fff;
    border-radius: 2px;
}

.info-highlight {
    font-weight: bold;
    color: #fff;
    margin-bottom: 8px;
}

.info-detail {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
}

.hexagram-advice {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
}

/* --- FENG SHUI SECTION --- */
.feng-shui-suggestions {
    width: 100%;
}

.feng-shui-grid {
    display: grid;
    grid-template-columns: 1.3fr 1.1fr 0.8fr 1.5fr 1.2fr;
    gap: 15px;
}

.feng-shui-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0 5px;
}

.feng-shui-block:last-child {
    border-right: none;
}

.block-title {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.6rem;
    letter-spacing: 0.05em;
}

.color-groups {
    display: flex;
    gap: 12px;
}

.color-group .circles {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-bottom: 6px;
}

.circle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.color-group .label {
    font-size: 0.55rem;
    line-height: 1.3;
    color: rgba(255, 255, 255, 0.8);
}

.compass-layout,
.career-layout {
    display: flex;
    gap: 8px;
    align-items: center;
}

.direction-list,
.career-list {
    text-align: left;
    font-size: 0.6rem;
    line-height: 1.4;
}

.dir-item .desc {
    color: rgba(255, 255, 255, 0.5);
    margin-left: 2px;
}

.lucky-numbers {
    display: flex;
    gap: 6px;
}

.number-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: #fff;
}

.gem-set-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.gem-labels {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 0.5rem;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 4px;
    padding: 0 5px;
}

/* --- CONCLUSION SECTION --- */
.conclusion-section {
    padding: 15px 0;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.conclusion-motto {
    letter-spacing: 0.05em;
    color: #fff;
    line-height: 1.6;
}

.conclusion-message {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
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