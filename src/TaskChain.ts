import { AbstractTask } from './AbstractTask'

export interface Options {
    allowMultipleRun: boolean
}

export class TaskChain<ParameterType = any> {
    private entryPoint: AbstractTask | null = null

    constructor(
        private parameters: ParameterType,
        private options: Options = {
            allowMultipleRun: true
        }
    ) {}

    get allowMultipleRun() {
        return this.options.allowMultipleRun
    }

    get params() {
        return this.parameters
    }

    public registerTask(task: AbstractTask): this {
        if (this.entryPoint instanceof AbstractTask) {
            this.entryPoint.registerNextTask(task)
        } else {
            this.entryPoint = task
        }

        return this
    }

    public processChain<T = any>(): T | undefined {
        return this.entryPoint?.process<ParameterType>(
            this.parameters,
            this.options
        )
    }
}
