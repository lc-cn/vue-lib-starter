import type { App } from 'vue'
import Input from './Input.vue'
import type { SFCWithInstall } from "grace-ui/types";

Input.install = (app: App) => {
	app.component(Input.name, Input)
}

const _Input: SFCWithInstall<typeof Input> = Object.assign(Input) // 增加类型
export default _Input
