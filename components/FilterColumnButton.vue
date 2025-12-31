
<template>
    <div v-if="table != undefined">
        <!-- Show modal -->
        <button :data-modal-target="modalId" :data-modal-toggle="modalId"
            class="hover_blue w-8 h-8 rounded-lg text-center shadow">
            <i class="fa-solid fa-filter"></i>
        </button>
        <!-- Modal Container -->
        <ModalContainer :modalId="modalId" size="lg">
            <ModalHeader :modalId="modalId" head="Hiển thị cột"></ModalHeader>
            <div class="p-4 flex flex-wrap">
                <div v-for="(item, index) in table.head" :key="index">
                    <!-- <InputField styleClass="w-52" :inputIndex="index" typeInput="checkbox" :label="item.name"
                        id="mission-all" :isCheck="item.show" @click-checkbox="handleShowOrHideColumn"></InputField> -->
                </div>
            </div>
        </ModalContainer>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    name: "FilterColumnButtonComponent",
    computed: {
        modalId() {
            return '_FilterColumnButtonComponent' + uuidv4()
        }
    },
    data() {
        return {}
    },
    props: {
        table: {},
        cookiesName: "",
    },
    methods: {
        handleShowOrHideColumn(data) {
            this.$emit("show-or-hide-column", data)
        }
    },
    created() {
        if(this.cookiesName !== '') {
            let cookie = Common.getCookie(this.cookiesName);
            if (cookie) {
                var arr = cookie.split("").map(Number);
                arr.forEach((element, index) => {
                    if (element === 1) {
                        this.table.head[index].show = true;
                    } else {
                        this.table.head[index].show = false;
                    }
                });
            }
        }

    }
}
</script>

<style scoped>
.hover_blue {
    background-color: white;
    color: black;
}

.hover_blue:hover {
    background-color: #1a56db;
    color: white;
}
</style>





