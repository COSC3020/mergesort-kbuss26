/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Feb. 09 2024
    Sources: 
    - Class Mergesort Slides
*/

// In-place array bounds
function mergesort(array) {
    len = array.length;

    // For iterative definitions
    var splitSize = 1;
    var splitHi;
    var splitLo;

    // Splitting arrays by multiples of 2 to know which arrays are sorted, then merging the arrays
    while (splitSize < len){
        for (var i = 0; i < Math.ceil(len/splitSize); i++) {

            splitLo = i * splitSize;
            splitHi = splitLo + (splitSize - 1); // Inital assignment
            splitHi = (splitHi > (len - 1)) ? len - 1 : splitHi; // Prevent overflow

            merge(array, splitLo, ave(splitLo, splitHi), splitHi);
            // console.log(splitLo, splitHi, array)
        }
        splitSize *= 2;
    }

    // Final merge, using the last split as the midpoint (that divided the array into 2)
    merge(array, 0, splitSize / 2 - 1, len - 1);
    
    return array;
}

// Merge function -- actual sorting algorithm begins here
function merge(array, lo, mid, hi) {
    switch (hi - lo) {
        case 0:
            return; // Already sorted, for there exists one element
        case 1:
            if (array[lo] < array[hi]) {return;} // Two elements sorted already
            else {shift(array, hi, lo); return;} // Swap two unsorted elements
        default:
            if (array[mid] <= array[mid + 1]) {return;} // Improves best case scenario
            var a = lo; // First half
            var b = mid + 1; // Second half
            for(var i = lo; i <= mid; i++) {
                // console.log(i, lo, mid, hi, array);
                if(a < mid + 1 && (array[a] < array[b] || b > hi)) {
                    // No need to shift, lesser element already in place
                    a++;
                } else if (b <= hi) {
                    // Shift the lesser element to the ith position
                    shift(array, b, i);
                    a++;
                    mid++;
                    // a, b, and the split between the subarrays must be shifted with the element
                    b++;
                }
            }
    }
    return;
}

// Average (floor) function
function ave(n1, n2) { return Math.floor((n1 + n2) / 2)}

// Shift function
function shift(arr, start, end) {
    var temp = arr[start];
    for (var i = start; i > end; i--) {
        arr[i] = arr[i-1];
    }
    arr[end] = temp;
    return;
}
