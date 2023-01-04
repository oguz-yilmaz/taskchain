# taskchain

### Installation

`npm install @o.yilmaz/taskchain`

### Creating Tasks

```typescript
import { AbstractTask } from '@o.yilmaz/taskchain'

export class Task1 extends AbstractTask {
	isRun = false

	// determines if this task's run method will be called
	shouldRun(parameters): boolean {
		return true
	}

	run(parameters) {
		this.isRun = true

		return {
			run: true
		}
	}
}
```

### Processing Tasks

The `TaskChain` constructor will take object parameter which in turn  
will be passed to each tasks each task's `shouldRun` and `run` methods.

```typescript
const task1 = new Task1()
const task2 = new Task2()
const task3 = new Task3()

// the parameters will be passed to 
// each task's `shouldRun` and `run` methods
const chain = new TaskChain({
	param1: true,
	param2: 'test'
})

chain
	.registerTask(task1)
	.registerTask(task2)
	.registerTask(task3)
	.processChain()
```
