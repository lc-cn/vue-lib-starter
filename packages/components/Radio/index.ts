import type { App } from 'vue'
import Radio from './Radio.vue'
import type { SFCWithInstall } from "grace-ui/types";

Radio.install = (app: App) => {
	app.component(Radio.name, Radio)
}

const _Radio: SFCWithInstall<typeof Radio> = Object.assign(Radio) // 增加类型
export default _Radio
