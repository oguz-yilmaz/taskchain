import AbstractTask from '@taskchain/AbstractTask'
import { MockReturnType } from './MockTypes'

export default class Task1 extends AbstractTask {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
	shouldRun(parameters): boolean {
		return true
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
	run(parameters): MockReturnType {
		return {
			run: true
		}
	}
}
