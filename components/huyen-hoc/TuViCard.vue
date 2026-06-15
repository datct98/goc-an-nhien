<template>
    <div class="dashboard-container">
        <header class="main-header">
            <div class="line short"></div>
            <div class="line medium"></div>
            <div class="line long"></div>
        </header>

        <div class="main-layout">

            <aside class="sidebar">
                <div class="placeholder-image profile-pic"></div>
                <div class="info-group">
                    <div class="line long"></div>
                    <div class="line medium"></div>
                    <div class="line short"></div>
                    <div class="line long"></div>
                </div>
                <div class="placeholder-image decorative-illustration"></div>
            </aside>

            <main class="content-grid">

                <section class="card span-2">
                    <div class="card-header"></div>
                    <div class="card-body-split">
                        <div class="sub-block">
                            <div class="line short"></div>
                            <div class="line long"></div>
                        </div>
                        <div class="sub-block">
                            <div class="line short"></div>
                            <div class="line long"></div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="line long"></div>
                    </div>
                </section>

                <section class="card">
                    <div class="card-header"></div>
                    <div class="placeholder-table"></div>
                </section>

                <section class="card">
                    <div class="card-header"></div>
                    <div class="placeholder-chart"></div>
                </section>

                <section class="card">
                    <div class="card-header"></div>
                    <div class="face-analysis-layout">
                        <div class="placeholder-image face-box"></div>
                        <div class="info-lines">
                            <div class="line short"></div>
                            <div class="line short"></div>
                            <div class="line short"></div>
                        </div>
                    </div>
                </section>

                <section class="card">
                    <div class="card-header"></div>
                    <div class="placeholder-table column-rows"></div>
                </section>

                <section class="card span-2">
                    <div class="card-header"></div>
                    <div class="flex-row-icons">
                        <div class="icon-block"></div>
                        <div class="icon-block"></div>
                        <div class="icon-block"></div>
                        <div class="icon-block"></div>
                    </div>
                </section>

                <section class="card span-2">
                    <div class="card-header"></div>
                    <div class="chart-layout">
                        <div class="placeholder-table mini"></div>
                        <div class="placeholder-chart line-graph"></div>
                    </div>
                </section>

                <section class="card">
                    <div class="card-header"></div>
                    <div class="hexagram-layout">
                        <div class="placeholder-image hex-icon"></div>
                        <div class="info-lines">
                            <div class="line long"></div>
                            <div class="line medium"></div>
                        </div>
                    </div>
                </section>

                <section class="card">
                    <div class="card-header"></div>
                    <div class="card-body-split">
                        <div class="sub-block">
                            <div class="line short"></div>
                            <div class="line long"></div>
                        </div>
                        <div class="sub-block">
                            <div class="line short"></div>
                            <div class="line long"></div>
                        </div>
                    </div>
                </section>

                <section class="card span-3">
                    <div class="card-header"></div>
                    <div class="flex-row-icons elements-row">
                        <div class="icon-block circle"></div>
                        <div class="icon-block circle"></div>
                        <div class="icon-block circle"></div>
                        <div class="icon-block square"></div>
                        <div class="icon-block square"></div>
                    </div>
                </section>

                <section class="card">
                    <div class="card-header"></div>
                    <div class="line medium"></div>
                    <div class="line long"></div>
                </section>

            </main>
        </div>
    </div>
</template>

<style scoped>
/* --- RESET & BASE STYLES --- */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: sans-serif;
    background-color: #ffffff;
    padding: 20px;
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
    gap: 20px;
}

.main-header {
    border: 2px dashed #b0b0b0;
    padding: 20px;
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
    border: 2px dashed #b0b0b0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.profile-pic {
    width: 100%;
    height: 250px;
}

.decorative-illustration {
    width: 100%;
    height: 150px;
    margin-top: auto;
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

/* --- RESPONSIVE BREAKPOINTS --- */
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