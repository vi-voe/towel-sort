
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  let inversion = false;
  if (matrix) throuthArray(matrix);

  function throuthArray(matrix) {
    matrix = (inversion) ? matrix.reverse() : matrix;
    matrix.forEach(function(el, ind){
      if (Array.isArray(el)) {
        inversion = (ind%2) ? true : false
        throuthArray(el)
      } else {
        res.push(el)
      }
    })
  }

  return res;
}
