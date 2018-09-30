module.exports = function solveEquation(equation) {
  
  var eq = equation.split(" ");

  if (eq[3] == '-') b = eq[4]*(-1);
  else b = eq[4];
  if (eq[7] == '-') {
    c = eq[8]*(-1);}
  else {
    c = eq[8];}

   d = Math.sqrt((b*b)-(4*eq[0]*c));
   x1 = Math.round(((-1)*b-d)/(2*eq[0]));
   x2 = Math.round(((-1)*b+d)/(2*eq[0]));

  if (Number(x1)<Number(x2)) return [x1, x2];
  else return [x2, x1];
  
}
