const express = require('express')
require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Service is in maintenance mode')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('6045a9d87f4c046d8bb36c12')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('6045a90a2b91136a1487b93c')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()