import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Import các icon cụ thể bạn muốn sử dụng (để giảm kích thước bundle)
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Điều này rất quan trọng để CSS của FontAwesome không bị lỗi khi render SSR
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
    library.add(fas, far, fab)
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
