export function paginationArr(pages, currentPage) {
  let arr = [];
  if(pages > 10) {
    // 一个省略号得情况
    if(currentPage <= 5) {
      for(let i = 0; i < 10; i++) {
        if(i === 8) {
          arr.push(0);
        } else {
          if(i === 9) arr.push(pages);
          else arr.push(i + 1);
        }
      }
      return arr;
    } else if(currentPage >= pages - 4) {
      for(let i = 0; i < 10; i++) {
        if(i === 1) {
          arr.push(0);
        } else {
          if(i === 0) arr.push(1);
          else arr.push(pages - 9 + i);
        }
      }
      return arr;
    } else {
      // 两个省略号的情况
      for(let i = 0; i < 11; i++) {
        if(i === 1 || i === 9) {
          arr.push(0);
        } else if(i === 0) {
          arr.push(1);
        } else if(i === 10) {
          arr.push(pages);
        } else {
          arr.push(currentPage - (5 - i));
        }
      }
      return arr;
    }
  } else {
    // 页数不超过十
    arr = new Array(pages).fill(1);
    return arr;
  }
}