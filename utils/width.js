

// 导入@vueuse
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();
function getWindowSize() {
  if (width.value > 768) {
    return true
  } else {
    return false
  }
}
// 导出公共方法
export default getWindowSize