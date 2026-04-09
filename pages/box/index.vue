<template>
    <div class="box-container" v-if="isMobileView">
        <div class="the-phan-loai-container">
            <template v-for="item in tuDoCategory">
                <div class="the-phan-loai" :class="{ 'active': (activeCategoryId === item.id) }"
                    @click="setActiveCategory(item.id)">
                    <Image src="tudo/the_phan_loai_do.png" alt="the_phan_loai_do" />
                    <span class="category-name">{{ item.name }}</span>
                </div>
            </template>

        </div>
    </div>
    <div v-else>
        Desktop
    </div>
</template>

<script setup>
import { tuDoCategory } from './tuDoCategory';

const { isMobileView } = useDevice()
const activeCategoryId = ref(0);

const setActiveCategory = (id) => {
    activeCategoryId.value = id;
}

</script>

<style src="./index.css"></style>