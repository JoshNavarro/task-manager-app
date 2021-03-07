require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('5f05744bede76d29246c3cc5').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('604445d8d4ea421d3d71e74a').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})