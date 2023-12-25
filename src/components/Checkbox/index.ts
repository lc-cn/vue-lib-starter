import type { App } from 'vue'
import Checkbox from './Checkbox.vue'
import type { SFCWithInstall } from "grace-ui/types";

Checkbox.install = (app: App) => {
	app.component(Checkbox.name, Checkbox)
}

const _Checkbox: SFCWithInstall<typeof Checkbox> = Object.assign(Checkbox) // 增加类型
export default _Checkbox
