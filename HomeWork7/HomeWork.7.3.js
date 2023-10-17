const fibonachi = (n, m) => {
    let fibRow = [0, 1]; 
    for (let i = 2; i < n + m; i++) { 
      fibRow[i] = fibRow[i - 1] + fibRow[i - 2]; 
    }
    return fibRow.slice(n, n + m); 
  }

console.log(fibonachi(5, 8)); 
