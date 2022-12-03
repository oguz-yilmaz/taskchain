// eslint-disable-next-line max-classes-per-file
import AbstractTask from '@taskchain/AbstractTask'

export interface MockReturnTypeTask1 {
    run: boolean
}

export interface MockReturnTypeTask2 {
    run: boolean
}

export interface MockReturnTypeTask3 {
    returnValueOfTask3: boolean
}

export interface MockParameterTypeTask1 {
    param1: boolean
    param2: string
}

export interface MockParameterTypeTask2 {
    param1: boolean
    param2: string
}

export interface MockParameterTypeTask3 {
    param1: boolean
    param2: string
}

export class Task1 extends AbstractTask {
    isRun = false

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
    shouldRun(parameters): boolean {
        return true
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
    run(parameters): MockReturnTypeTask1 {
        this.isRun = true

        return {
            run: true
        }
    }
}

export class Task2 extends AbstractTask {
    isRun = false

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
    shouldRun(parameters): boolean {
        return true
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
    run(parameters): MockReturnTypeTask2 {
        this.isRun = true

        return {
            run: true
        }
    }
}

export class Task3 extends AbstractTask {
    isRun = false

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
    shouldRun(parameters): boolean {
        return true
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
    run(parameters): MockReturnTypeTask3 {
        this.isRun = true

        return {
            returnValueOfTask3: true
        }
    }
}
