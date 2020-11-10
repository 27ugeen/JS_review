console.log('Start')

console.log('Start 2')

setTimeout(() => console.log('timeout 0!'), 0)

window.setTimeout(() => {
    console.log('timeout 5sec')
}, 5000)

window.setTimeout(() => {
    console.log('timeout 2sec')
}, 2000)

console.log('end')

