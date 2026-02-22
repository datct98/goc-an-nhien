import { useToast } from "primevue/usetoast";
import Cookies from "js-cookie";
import dayjs from "dayjs";

export default defineNuxtPlugin({
  name: "common",
  setup() {
    const toast = useToast();
    const showSuccess = (msg: string) => {
      toast.add({
        severity: "success",
        summary: "Thành công",
        detail: msg,
        life: 3000,
      });
    };
    const showError = (msg: string) => {
      toast.add({
        severity: "error",
        summary: "Thất bại",
        detail: msg,
        life: 3000,
      });
    };
    const showWarning = (msg: string, summary: string = "Cảnh báo") => {
      toast.add({
        severity: "warn",
        summary: summary,
        detail: msg,
        life: 3000,
      });
    };
    const isLogin = () => {
      return Cookies.get("jwt");
    };
    /**
     * Reset token cookies
     * @param token
     * @param minute
     */
    const resetCookies = (token: string, minute: number) => {
      const one_minute = 60000;
      const now = new Date();
      const expired = new Date(now.getTime() + minute * one_minute);
      console.log('expired : ', expired);
      Cookies.set("jwt", token, { expires: expired });
    };
    const setAdmin = (isAdmin: string, minute: number) => {
      const one_minute = 60000;
      const now = new Date();
      const expired = new Date(now.getTime() + minute * one_minute);
      Cookies.set("isAdmin", isAdmin, { expires: expired });
    };
    const setRole = (role: string, minute: number) => {
      const one_minute = 60000;
      const now = new Date();
      const expired = new Date(now.getTime() + minute * one_minute);
      Cookies.set("role", role, { expires: expired });
    };
    const getRole = () => {
      return Cookies.get("role");
    };
    const getAdmin = () => {
      return Cookies.get("isAdmin");
    };
    /**
     * Generate random value 1 - 100
     * @returns 
     */
    const generateRandomValue = () => {
      return Math.floor(Math.random() * 100) + 1;
    };
    /**
     * 
     * @param path navigate to page
     * @param status 
     * @param router 
     */
    const navigateTo = (path: string, status: string, router: any) => {
      if (status === 'process') {
        showWarning('Tính năng đang phát triển 🙏')
      } else {
        router.push(path)
      }
    }
    return {
      provide: {
        common: {
          showSuccess,
          showError,
          showWarning,
          // cookies
          isLogin,
          resetCookies,
          setAdmin,
          setRole,
          getRole,
          getAdmin,
          generateRandomValue,
          navigateTo
        },
      },
    };
  },
});
