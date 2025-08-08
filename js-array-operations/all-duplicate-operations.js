let data = [1, 2, 2, 3, 4, 9, 9, 10, 5, 7, 4, 5];

//remove duplicates
var fData = data.filter((c,i,a) => a.indexOf(c) == i);

// keep non-duplicates
var fData = data.filter((c,i,a) => a.indexOf(c) == i && a.lastIndexOf(c) == i)

// keep only duplicates
var fData = data.filter((c,i,a) => a.indexOf(c) != a.lastIndexOf(c))

// keep only duplicates, but show them once
var fData = data
.filter((c,i,a) => a.indexOf(c) != a.lastIndexOf(c))
.filter((c,i,a) => a.indexOf(c) == i);


console.log(fData);