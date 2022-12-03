import type { Options } from './TaskChain'

export default abstract class AbstractTask<RunReturnType = any> {
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

	public process<ParameterType>(
		params: ParameterType,
		options: Options
	): RunReturnType {
		if (this.shouldRun(params)) {
			const res = this.run(params)

			if (!options.allowMultipleRun || !this.nextTask) {
				return res
			}
		}

		return this.nextTask?.process(params, options)
	}
}
