const analyzeArray = (inputArray) => {
    let object = {};
    object['average'] = (Math.round((inputArray.reduce((total, curr) => {
        return total + curr;
    }, 0))/inputArray.length));
    object['min'] = Math.min(...inputArray);
    object['max'] = Math.max(...inputArray);
    object['length'] = inputArray.length;
    return object;
};

export { analyzeArray };
