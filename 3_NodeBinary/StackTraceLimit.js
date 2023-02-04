function whateverCalc (n = 99) {
  if (n === 0) throw Error()
  whateverCalc(n - 1)
}

whateverCalc()