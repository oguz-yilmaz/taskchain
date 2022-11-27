import TaskChain from '@taskchain/TaskChain'
import { MockParameterType, MockReturnType } from './tasks/MockTypes'
import Task1 from './tasks/Task1'
// import Task2 from './tasks/Task2'
// import Task3 from './tasks/Task3'

test('Runs single task', async () => {
	const task1 = new Task1()

	const chain = new TaskChain<MockParameterType>({
		param1: true,
		param2: 'test'
	})
	chain.registerTask(task1)

	const res = chain.processChain<MockReturnType>()
})

test('Runs multiple task', async () => {})
