<script lang="ts" setup>
useHead(() => ({
    title: '預約視光服務信息',
    meta: [
        { name: 'description', content: '預約視光服務信息' },
        { name: 'keywords', content: '預約視光服務信息' },
        {
            name: 'description',
            content: '預約視光服務信息'
        }
    ]
}))
const message = ref({
    name: "",
    tel: "",
    email: "",
    address: "",
    dateV2: "",
    FromMe: "",
    checkServe: [],
    sms: "",
});


const addressList = ref([
    {
        label: '中環 ZEISS VISION EXPERT',
        value: '中環 ZEISS VISION EXPERT'
    },
    {
        label: '旺角',
        value: 'Mong Kok'
    }
    , {
        label: '西環',
        value: 'Sai Wan'
    },
    {
        label: '北角',
        value: 'North Point'
    },
    {
        label: '將軍澳中心',
        value: '將軍澳中心'
    },
    {
        label: '將軍澳寶琳',
        value: '將軍澳寶琳'
    },
    {
        label: '鑽石山',
        value: '鑽石山'
    },
    {
        label: '銅鑼灣',
        value: '銅鑼灣'
    }
])
onMounted(() => {
    message.value = JSON.parse(localStorage.getItem("contactForm") || "{}")
    ElMessage({
        showClose: true,
        message: '已经成功預約，我們將會在10小時內與您聯絡確認預約詳情。',
        type: 'success',
        duration: 0,
        offset: 65,
    })
})

const getLabelByValue = (value: string) => {
    const item = addressList.value.find(item => item.value === value);
    return item ? item.label : '';
};

// 定义一个名为formatTime的箭头函数，明确指定参数isoString的类型为string，返回值类型为string
const formatTime: (isoString: string) => string = (isoString) => {
    const date = new Date(isoString);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const h = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${d} ${h}:${min}`;
}

// 出当前页面的时候 关闭所有的弹窗
onBeforeUnmount(() => {
    ElMessage.closeAll()
})

</script>

<template>
    <div class="messageFrom">
        <div class="message-content">
            <div class="message-title">預約視光服務</div>
            <div class="message-table">
                <div>基本信息</div>
                <div>
                    <div v-if="message.name">
                        <div>姓名:<sup>*</sup></div>
                        <div>{{ message.name }}</div>
                    </div>
                    <div v-if="message.email">
                        <div>郵箱地址:<sup>*</sup></div>
                        <div>{{ message.email }}</div>
                    </div>
                    <div v-if="message.tel">
                        <div>聯絡電話:<sup>*</sup></div>
                        <div>+852 {{ message.tel }}</div>
                    </div>
                    <div v-if="message.dateV2">
                        <div>預約日期:<sup>*</sup></div>
                        <div>{{ formatTime(message.dateV2) }}</div>
                    </div>
                    <div v-if="message.address">
                        <div>選擇門診地點:<sup>*</sup></div>
                        <div>{{ getLabelByValue(message.address) }}</div>
                    </div>
                    <div v-if="message.sms">
                        <div>備注訊息:</div>
                        <div>{{ message.sms }}</div>
                    </div>
                    <div v-if="message.checkServe[0]">
                        <div>選擇服務:<sup>*</sup></div>
                        <div>
                            <span v-for="(e, i) in message.checkServe" :key="i">{{ e }}、</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@media screen and (min-width:768px) {
    :deep(.el-message) {
        transform: translateX(-50%);
        left: 50%;
        right: auto;
    }

    .messageFrom {
        border-radius: 15px;
        border: 1px solid #00a6ce;
        background: var(--Skin, #eafbff);
        box-shadow: 10px 10px 0px 0px #00a6ce;
        max-width: 990px;
        width: 51.5625vw;
        min-width: 990px;
        margin: 200px auto 0;
        box-sizing: border-box;
        padding: 3.02vw 2.34375vw;
        position: relative;
        z-index: 20;
    }

    .message-content {
        display: flex;
        flex-direction: column;
        gap: 2.34375vw;
    }

    .message-title {
        color: var(--Brand-Color, #00a6ce);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 33.75px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px;
        letter-spacing: 1.688px;
        width: -moz-fit-content;
        width: fit-content;
        margin: 0 auto;
    }

    .message-table {
        display: flex;
        flex-direction: column;

        &>div:nth-child(1) {
            color: #00517e;
            font-family: "Noto Sans HK";
            font-size: 21px;
            font-style: normal;
            font-weight: 700;
            line-height: 45.852px;
            width: 100%;
            margin-bottom: 24px;
            margin-top: 24px;
            display: flex;
            gap: 0 10px;
        }

        &>div:nth-child(2) {

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px 50px;

            &>div {
                display: flex;
                align-items: flex-start;
                gap: 0 10px;

                &>div:nth-child(1) {
                    min-width: max-content;
                }

                &>div:nth-child(1) {
                    color: var(--00517-e, #00517e);
                    font-family: "Noto Sans CJK TC";
                    font-size: 21px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 45.852px;
                    display: flex;

                }

                &>div:nth-child(2) {
                    color: #00a6ce;
                    font-family: "Noto Sans CJK TC";
                    display: flex;
                    align-items: center;
                    font-family: "Noto Sans CJK TC";
                    font-size: 21px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 45.852px;
                }
            }

            &>div:last-child {
                // 独占一行
                grid-column: 1 / -1;

                &>div:nth-child(2) {
                    white-space: pre-wrap;
                    display: inline-table;
                }
            }
        }
    }
}

@media screen and (max-width:767px) {
    :deep(.el-message) {
        transform: none;
        left: 5%;
        right: 0;
    }

    .messageFrom {
        border: 1px solid #00a6ce;
        background: #eafbff;
        box-shadow: 2.56vw 2.56vw 0px 0px #00a6ce;
        width: auto;
        max-width: 100%;
        margin: 85px 6.45vw 0;
        border-radius: 1.28vw;
        padding: 6.665vw 5.128vw 10.25vw;
        box-sizing: border-box;

        .message-title {
            color: #00a6ce;
            font-family: Inter;
            font-family: "Noto Sans HK";
            font-size: 6.15vw;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0 auto;
            width: -moz-fit-content;
            width: fit-content;
            position: relative;
        }

        .message-table {
            display: flex;
            flex-direction: column;
            gap: 3.02vw 0;

            &>div:nth-child(1) {
                color: #00517e;
                font-family: "Noto Sans HK";
                font-size: 4.615vw;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                width: 100%;
                margin-bottom: 3.128vw;
                margin-top: 3.128vw;
                display: flex;
                align-items: center;
                gap: 0 1.28vw;
            }

            &>div:nth-child(2) {

                display: flex;
                flex-direction: column;
                gap: 3.02vw 0;

                &>div {
                    display: flex;
                    flex-direction: column;
                    gap: 0 1.28vw;

                    &>div:nth-child(1) {
                        color: var(--00517-e, #00517e);
                        font-family: "Noto Sans CJK TC";
                        font-size: 4.35vw;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 9.7vw;
                    }

                    &>div:nth-child(2) {
                        color: #00a6ce;
                        font-family: "Noto Sans CJK TC";
                        font-size: 4.1vw;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 1;
                    }
                }
            }
        }
    }
}
</style>