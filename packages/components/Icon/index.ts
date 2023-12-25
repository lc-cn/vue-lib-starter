import type { App } from 'vue'
import Icon from './Icon.vue'
import type { SFCWithInstall } from "grace-ui/types";

Icon.install = (app: App) => {
	app.component(Icon.name, Icon)
}

const _icon: SFCWithInstall<typeof Icon> = Object.assign(Icon) // 增加类型
export default _icon
