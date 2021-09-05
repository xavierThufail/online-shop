const generatePattern = (num) => {
  for (let i = 0; i < num * 2 - 1; i++) {
    let col = [];
    if(i < num - 1) {
      for (let j = 0; j < num; j++) {
        if(j < num - 1 - i) {
          col.push(' ')
        } else {
          if(col[col.length - 1] === 'X' || col[col.length - 1] === 'O') {
            col.push(' ')
          } else {
            if(col[col.length - 2] === 'X') {
              col.push('O')
            } else {
              col.push('X')
            }
          }
        }
      }
    } else if (i === num - 1) {
      const long = num % 2 === 0 ? (num * 2 - 3) : (num * 2 - 1)
      for (let j = 0; j < long; j++) {
        if(j === 0) {
          col.push('X')
        } else if (num % 2 === 0 && j === num - 2) {
          if ((num / 2) % 2 === 0) {
            col.push('O O')
          } else {
            col.push('X X')
          }
        } else {
          if(col.join('')[col.length - 1] === 'X' || col.join('')[col.length - 1] === 'O') {
            col.push(' ')
          } else {
            if(col[col.length - 2] === 'X') {
              col.push('O')
            } else {
              col.push('X')
            }
          }
        }
      }
    } else {
      for (let j = 0; j < num * 2 - 1; j++) {
        if(j === i - num + 1) {
          col.push('X')
        } else if (j > i - num + 1 && j < num) {
          if (col[col.length - 1] === 'X' || col[col.length - 1] === 'O') {
            col.push(' ')
          } else {
            if(col[col.length - 2] === 'X') {
              col.push('O')
            } else {
              col.push('X')
            }
          }
        } else {
          col.push(' ')
        }
      }
      col.reverse()
    }
    console.log(col.join(''))
  }
};

generatePattern(15)