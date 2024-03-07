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

The worst-case runtime for my mergesort implementation is $T(n) \in \Theta(n\log{n})$.
There exist two major parts of the algorithms to break down: Splitting the array by
multiples of 2, and merging the split arrays.

Splitting the array set multiple variables in constant time alongside calling the merge
function. The mergesort function calls the merge function $2^{\log{_2}{n} - i}$ for each
iteration of the loops, where $2^{i{_n}} = n \implies i{_n} = \log{_2}{n}.$ Given this
information, we can infer that the function iterates $\frac{n}{2^i}$ for each $i$.
This ultimately results in $nT_1(0) + \frac{n}{2}T_1(1) + \frac{n}{4}T_1(2) + ... + \frac{n}{2^{i_n}}T_1(i_n)$,
where the mergesort complexity is multiplied by the complexity of the merge function, $T_1(i)$.

The merge function iterates through the low bound to the middle bound of the array
in the worst case scenario. The mergesort function determines the split of the array,
as a power of 2, so as $i$ increases in the mergesort, so does the size of the split. 
Because the array iterates only through half of the split, $T_1(i)$ is equal to $2^{i - 1}$.

In the base cases, where $i = 0$ or $i = 1$, both cases are constant time. Therefore, $T_1(0) = T_1(1) = 1$.

When combining the functions, we get<br>
$nT_1(0) + \frac{n}{2}T_1(1) + \frac{n}{4}T_1(2) + ... + \frac{n}{2^{i_n}}T_1(i_n)$<br>
$= n(1) + \frac{n}{2}(1) + \frac{n}{4}(2^1) + ... + \frac{n}{2^{i_n}}(2^{i_n - 1})$<br>
$= n + \frac{n}{2} + \frac{n}{2} + ... + \frac{n}{2}$<br>

We previously defined $i_n$ to be $log{_2}{n}$, so we know that there are $log{_2}{n}$
terms in this equation.<br>

$= 2(\frac{n}{2}) + \frac{n}{2} + \frac{n}{2} + ... + \frac{n}{2}$<br>
$= (\frac{n}{2} + \frac{n}{2}) + \frac{n}{2} + \frac{n}{2} + ... + \frac{n}{2}$<br>
$= \frac{n}{2} + \frac{n\log{_2}{n}}{2} \in \Theta(n\log{_n})$<br>

Therefore, this implementation of the algorithm has a time complexity of $\Theta(n\log{_n})$.
