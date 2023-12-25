import type { App } from 'vue'
import GrButton from './Button.vue'
import GrButtonGroup from './Group'
import type { SFCWithInstall } from "grace-ui/types";

GrButton.install = (app: App) => {
	app.component(GrButton.name, GrButton)
	app.use(GrButtonGroup)
}

const InMeAccordionItem: SFCWithInstall<typeof GrButton> = Object.assign(GrButton) // 增加类型
export default InMeAccordionItem
