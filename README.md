[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

### Response

The worst-case runtime for my mergesort implementation is $T(n) \in \Theta(n^2\log{n})$.
There exist two major parts of the algorithms to break down: Splitting the array by
multiples of 2, and merging the split arrays.

Splitting the array set multiple variables in constant time alongside calling the merge
function in a nested for-loop. The mergesort function runs a while-loop to have splits of size
$2^{i{_n}}$ for each iteration of the loop, where $2^{i{_n}} = n \implies i{_n} = \log{_2}{n}.$

Nested in the while-loop exists a for-loop that iterates through the splits of the array.
For each split, the merge function gets called alongside constant time variables being set.

The merge function iterates through the low bound to the middle bound of each split. 
In the worst case scenario, however, each element would get shifted
half of the array when merging. When combining the splits, the merge function works with the whole array
for each iteration in the quicksort's while-loop. The merge function thus takes 
$T(n) = (\frac{n}{2})^2$ time in its worst case complexity - $\frac{n}{2}$ for iterating
through half of the elements in the each array splits, and $\frac{n}{2}$ for shifting each
element across half of the array.

Combining these factors together, the total runtime complexity is equal to
$T(n) =  \frac{n}{2} \cdot \frac{n}{2} \cdot log{_2}{n} = \frac{1}{4}n^2\log{_2}{n} \in \Theta(n^2\log{n})$.

Therefore, this implementation of the algorithm has a time complexity of $\Theta(n^2\log{n})$.
