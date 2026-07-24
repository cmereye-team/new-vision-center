/*
 * @Author: 谭洁莹
 * @Date: 2026-07-24 15:05:12
 * @LastEditTime: 2026-07-24 15:05:34
 * @FilePath: /tailwind.config.ts
 * @Description: tailwind配置文件
 */
export default {
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        // 主题深蓝色
        primary: {
          DEFAULT: "#00a6ce",
        },
        kid: {
          orange: "#FF9701",
        },
      },
      // fontFamily: {
      //   sans: ['"Noto Sans HK"', "sans-serif"],
      //   en: ["Poppins", "sans-serif"],
      // },
      spacing: {
        13: "3.25rem", //52px
        15: "3.75rem", //60px
        16: "4rem", //64px
        17: "4.25rem", //68px
        18: "4.5rem", //72px
        23: "5.75rem", //92px
        25: "6.25rem", //100px
        28: "7rem", //112px
        30: "7.5rem", //120px
        50: "12.5rem", //200px
      },
      borderRadius: {
        "4xl": "2rem", // 32px
      },
    },
  },
};
