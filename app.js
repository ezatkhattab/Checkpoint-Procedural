let v1 = [
    [2,3],
    [5,3],
    [6,4],
    [7,-8],
];

let v2 = [
    [4,5],
    [5,5],
    [7,6],
    [8,7],
]
let dotProduct = 0 ;
let results=[];

for (let i = 0; i < v1.length; i++) {

      dotProduct = (v1[i][0] * v2[i][0]) + (v1[i][1] * v2[i][1]);
      results.push(dotProduct);
      
  }  
    



console.log(results);