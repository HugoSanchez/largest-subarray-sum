let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array){
    let value = 0;
    let result = null;

    if (array.length < 1) return null;
    if (array.length === 1) return array[0];

    // For each element in the array,
    for (index = 0; index < array.length; index++) {
        // We crate a sub array with the remaining items. 
        let subArray = [];
        for (let i = array.length - 1; i > index -1; i--){
            subArray.unshift(array[i])
        }
        
        // We compute the sum of all the value for that subarray.
        // This will serve as a baseline.
        let currentValue = subArray.reduce((a, b) => a + b, 0)
        let currentResult = null
        
        // Then, for each sub array, we slice the last item, 
        // One at a time and compute its value.
        // If its greater than in the previous iteration 
        // we update currentValue and currentResults;
        for (let i = subArray.length - 1; i > 0; i--){
            let sum = subArray.slice(0, i).reduce((a, b) => a + b, 0)
            if (sum >= currentValue) {currentValue = sum; currentResult = subArray.slice(0, i)}
        }

        // We finally compare the currentValue with the higgest overall value so far
        // and update them if necesarry.
        if (currentValue >= value){
            value = currentValue
            result = currentResult
        }
    }
    return value
}

largestSubarraySum(array)
// 16