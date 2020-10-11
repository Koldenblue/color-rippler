const colors = ["red", "white", "blue", "green", "yellow"]

const makeGrids = n => [...Array(n)].map(b => [...Array(n)].map(a => colors[~~(Math.random()*5)]));

const grids = makeGrids(5);
console.log(grids)


// accepting a 2d array, d for the max delta, o for the current delta, row and column
const changeColor = (grids, d, o = 1, r,c) => {
  const currentGrid = grids.map(a=> a.map(b=> b))
    setTimeout(()=> {
      const ranges = [0];
      for(let i = 1; i<= o; i++){
        ranges.unshift(-i);
        ranges.push(i);
      };
      ranges.forEach(a=> ranges.map(b=> {
        if(Math.abs(b) === o || Math.abs(a) === o){
          currentGrid[a+r][b+c] = "N";
        }
      }));
      console.log(currentGrid);
      o < d && changeColor(grids, d, o+1, r,c)
    }, 2000)
}

// const findAdjacent = (r,c,d) => {
//   const ranges = [0];
//   for(let i = 1; i<= d; i++){
//     ranges.unshift(-i);
//     ranges.push(i);
//   };
//   const outer = ranges.map(a=> ranges.map(b=> {
//     return [ Math.abs(b) === d || Math.abs(a) === d ? "C" : "NC"]
//   }))
//   console.log(outer)
// }
changeColor(grids, 2, 1, 2,2)
console.log(grids[0][0])