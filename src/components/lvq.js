function train(inputs, a, epoch) {
    let classType = []
    let w = []
    let vectors = []
    let targets = []
    let bobotAkhir = []

    // inputs ==> classType, w, vectors, targets
    for (const [index, input] of inputs.entries()) {
        if (!classType.includes(input[1])) {
            classType.push(input[1])
            w.push(input[0])
            inputs.splice(index, 1)
        }
    }
    for (const i of inputs) {
        vectors.push(i[0])
        targets.push(i[1])
    }

    while (epoch) {
        var pred = []
        for (let index = 0; index < vectors.length; index++) {
            // w, vectors ==> distances, pred
            var distances = []
            for (const wi of w) {
                let sum = 0
                for (const [i, v] of vectors[index].entries()) {
                    sum += Math.pow(v - wi[i], 2)
                }
                // console.log(parseFloat(Math.sqrt(sum).toFixed(4)));
                distances.push(parseFloat(Math.sqrt(sum).toFixed(4)))
            }
            pred.push(distances.indexOf(Math.min(...distances)) + 1)

            // Update w
            let wOld = w
            for (const [i, old] of wOld[pred[index] - 1].entries()) {
                w[pred[index] - 1][i] = pred[index] === targets[index]
                    ? old + a * (vectors[index][i] - old) : old - a * (vectors[index][i] - old)
            }
        }
        a *= 0.2
        epoch--
    }

    w.forEach(bobotLama => {
        bobotAkhir.push(bobotLama.map(b => b.toFixed(3)))
    });

    return { classType, bobotAkhir, vectors, distances, targets, pred }
}


function test(params) {

}

export { train, test }