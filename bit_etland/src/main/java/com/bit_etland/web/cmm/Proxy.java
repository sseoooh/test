package com.bit_etland.web.cmm;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy 
public class Proxy {
	private int pageNum, pageSize, blockSize,
	startRow, endRow, startPage, endPage,
	prevBlock, nextBlock, rowCount;
	
	private boolean existPrev, existNext;
	
	public void carryOut(Map<?,?> paramMap) {
		
String _pageNum = (String)paramMap.get("page_num");
pageNum = ((String) paramMap.get("page_num") == null) ? 1 : Integer.parseInt(_pageNum);
System.out.println("Pagination안에 페이지넘버"+pageNum);

String _pageSize = (String)paramMap.get("page_size");
pageSize = (_pageSize == null) ? 5 : Integer.parseInt(_pageSize);
System.out.println("Pagination안에 페이지사이즈"+pageSize);
		
rowCount = 0;/* CustomerServiceImpl.getInstance().countCustomer(null);*/
System.out.println("전체카운트::::"+rowCount);

int pageCount = rowCount / pageSize;//페이지
System.out.println("전체 페이지수:"+pageCount);

startRow = (pageNum -1) * pageSize +1;
System.out.println("StartRow"+startRow);

endRow =(rowCount > pageNum * pageSize)? pageNum * pageSize : rowCount;
System.out.println("endRow"+endRow);
System.out.println("스타트로우는::::"+startRow);
System.out.println("앤드로우::::"+endRow);

if(existPrev) {
	startPage = (pageNum-1)/blockSize*blockSize+1;
}else {
	startPage = 1;
}

endPage = startPage + 4;


existPrev = (startPage - pageSize) > 0;
existNext = (startPage + pageSize) <= pageCount;		
prevBlock = startRow - pageSize;
nextBlock = startRow + pageSize;


	}
	}





