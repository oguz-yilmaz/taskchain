import TaskChain from '@taskchain/TaskChain'
import {
    MockParameterTypeTask1,
    MockParameterTypeTask3,
    MockReturnTypeTask1,
    MockReturnTypeTask3,
    Task1,
    Task2,
    Task3
} from './stubs/index'

test('Runs single task', async () => {
    const task1 = new Task1()

    const chain = new TaskChain<MockParameterTypeTask1>({
        param1: true,
        param2: 'test'
    })
    chain.registerTask(task1)

    const res = chain.processChain<MockReturnTypeTask1>()

    expect(res).toStrictEqual({
        run: true
    })
})

test('Returns the last task`s return value if allowMultipleRun is set to true', async () => {
    const task1 = new Task1()
    const task2 = new Task2()
    const task3 = new Task3()

    const chain = new TaskChain<MockParameterTypeTask3>({
        param1: true,
        param2: 'test'
    })
    chain.registerTask(task1).registerTask(task2).registerTask(task3)

    const res = chain.processChain<MockReturnTypeTask3>()

    expect(res).toStrictEqual({
        returnValueOfTask3: true
    })
})

test('Runs multiple task', async () => {
    const task1 = new Task1()
    const task2 = new Task2()
    const task3 = new Task3()

    const chain = new TaskChain({
        param1: true,
        param2: 'test'
    })

    chain
        .registerTask(task1)
        .registerTask(task2)
        .registerTask(task3)
        .processChain()

    expect(task1.isRun).toBe(true)
    expect(task2.isRun).toBe(true)
    expect(task3.isRun).toBe(true)
})
