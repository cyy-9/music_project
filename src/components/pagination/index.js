import React, {useState} from 'react';
import {YYPaginationStyle} from './style';

import {paginationArr} from '../../utils/pagination-arr';

// pageSize 每页数据数量
//    total 数据总数
// onChange 切换页码的回调

export default function YYPagination(props) {
  const {pageSize, total, onChange} = props;
  // 分页总数
  let pages = Math.ceil(total / pageSize);
  // 当前页码
  const [currentPage, setCurrentPage] = useState(1);

  // 点击改变页数
  const handleClickChangePage = (page, flag) => {
    // console.log(page);
    if(page === currentPage) return;
    if(flag === 'page-item') {
      // 直接点击页码切换
      setCurrentPage(page);
      onChange(page);
    } else if(flag === 'pre') {
      // 点击上一页切换
      if(currentPage === 1) return;
      setCurrentPage(currentPage - 1)
      onChange(currentPage - 1);
    } else if(flag === 'next') {
      // 点击下一页切换
      if(currentPage === pages) return;
      setCurrentPage(currentPage + 1);
      onChange(currentPage + 1);
    }
  }

  return (
    <YYPaginationStyle>
      <div className="container">
        <div 
          className={`sprite_button2 change-page-btn ${currentPage === 1 ? "change-pre-unClick" : "change-pre"}`}
          onClick={() => handleClickChangePage(null, 'pre')}
        >上一页</div>
        {
          paginationArr(pages, currentPage).map((item, index) => {
            if(item) {
              return (
                <div 
                  key={index}
                  className={`page-item ${currentPage === item ? "active-page sprite_button2" : ''}`}
                  onClick={() => handleClickChangePage(item, 'page-item')}
                >{item}</div>
              ) 
            } else if(item === 0) {
              return '...';
            }
            return '';
          })
        }
        <div 
          className={`sprite_button2 change-page-btn ${currentPage === Math.ceil(total/pageSize) ? "change-next-unClick" : "change-next"}`}
          onClick={() => handleClickChangePage(null, 'next')}
        >下一页</div>
      </div>
    </YYPaginationStyle>
  )
}
