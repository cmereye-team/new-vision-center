

// 导入@vueuse
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();
function getWindowSize() {
  if (width.value > 768) {
    return { widthState: true, width: width.value }
  } else {
    return { widthState: false, width: width.value }
  }
}
// 导出公共方法
export default getWindowSize