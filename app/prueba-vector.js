
exports.handler = async (event) => {
    let vector = [15, 7, 3, 2, 4, 1, 8, 23, 12, 100];

    vector_ordenado = vector.slice().sort();

    return {
        statusCode: 200,
        body: 'Vector antes de ordenar: ' + vector + '\n Vector tras ordenacion: ' + vector_ordenado,
      }
}