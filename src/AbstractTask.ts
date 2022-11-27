export default abstract class AbstractTask<RunReturnType = void> {
	protected nextTask: AbstractTask | null = null

	abstract shouldRun(parameters): boolean

	abstract run(parameters): RunReturnType

	public registerNextTask(task: AbstractTask): this {
		if (this.nextTask instanceof AbstractTask) {
			this.nextTask.registerNextTask(task)
		} else {
			this.nextTask = task
		}

		return this
	}

	public process<ParameterType>(parameters: ParameterType): RunReturnType {
		if (this.shouldRun(parameters)) {
			return this.run(parameters)
		}

		return this.nextTask?.run(parameters)
	}
}
