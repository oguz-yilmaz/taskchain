import AbstractTask from './AbstractTask'

export default class TaskChain<ParameterType> {
	private entryPoint: AbstractTask | null = null

	constructor(parameters: ParameterType) {
		this.parameters = parameters
	}

	public registerTask(task: AbstractTask): this {
		if (this.entryPoint instanceof AbstractTask) {
			this.entryPoint.registerNextTask(task)
		} else {
			this.entryPoint = task
		}
	}

	public processChain<T>(): T {
		return this.entryPoint.process<ParameterType>(this.parameters)
	}
}
