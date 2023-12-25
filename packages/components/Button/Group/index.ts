import type { App } from 'vue'
import ButtonGroup from './ButtonGroup.vue'
import type { SFCWithInstall } from "grace-ui/types";

ButtonGroup.install = (app: App) => {
	app.component(ButtonGroup.name, ButtonGroup)
}

const _buttonGroup: SFCWithInstall<typeof ButtonGroup> = Object.assign(ButtonGroup) // 增加类型
export default _buttonGroup
