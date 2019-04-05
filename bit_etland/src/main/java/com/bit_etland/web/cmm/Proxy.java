package com.bit_etland.web.cmm;

import java.io.File;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileItemFactory;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Proxy {
	private int pageNum, pageSize, blockSize,
	startRow, endRow, startPage, endPage,
	prevBlock, nextBlock, rowCount;
	private String search;
	
	private boolean existPrev, existNext;
	@Autowired Image img;
	
	public void carryOut(Map<?,?> paramMap) {
		
String _pageNum = (String)paramMap.get("page_num");
pageNum = ((String) paramMap.get("page_num") == null) ? 1 : Integer.parseInt(_pageNum);
System.out.println("Pagination안에 페이지넘버"+pageNum);

String _pageSize = (String)paramMap.get("page_size");
pageSize = (_pageSize == null) ? 5 : Integer.parseInt(_pageSize);
System.out.println("Pagination안에 페이지사이즈"+pageSize);

String _blockSize = (String) paramMap.get("block_size");
blockSize = ((String) paramMap.get("block_Size") == null) ? 5 : Integer.parseInt(_blockSize);
		
rowCount = (int) paramMap.get("rowCount");
System.out.println("전체카운트::::"+rowCount);

int nmg = rowCount % pageSize;
int pageCount = (nmg == 0) ? rowCount / pageSize : rowCount / pageSize + 1;

System.out.println("전체 페이지수:"+pageCount);

startRow = (pageNum -1) * pageSize; //<================ 끝에 있었음+1
System.out.println("StartRow"+startRow);

endRow =(rowCount > pageNum * pageSize)? pageNum * pageSize : rowCount;

int blocknum = (pageNum - 1) / blockSize;

System.out.println("endRow"+endRow);
System.out.println("스타트로우는::::"+startRow);
System.out.println("앤드로우::::"+endRow);

if (existPrev) {
    startPage = blocknum * blockSize + 1;

} else {
    startPage = 1;
}
endPage = startPage + (blockSize - 1);
startPage = pageNum - ((pageNum - 1) % blockSize);
endPage = startPage + (blockSize - 1);
if (endPage > pageCount) {
    endPage = pageCount;
}

existPrev = (startPage - pageSize) > 0;
existNext = (startPage + pageSize) <= pageCount;		
prevBlock = startRow - pageSize;
nextBlock = startRow + pageSize;
search = (String) paramMap.get("search");

	}
	public void fileUpload(String customerID) {
		FileItemFactory factory = new DiskFileItemFactory();
		ServletFileUpload upload = new ServletFileUpload(factory);
		upload.setFileSizeMax(1024 * 1024 * 40); // 40 MB
		upload.setSizeMax(1024 * 1024 * 50); // 50 MB
		List<FileItem> items = null;
		try {
			File file = null;
			// items = upload.parseRequest((RequestContext) new ServletRequestContext(request));
			Iterator<FileItem> it = items.iterator();
			while(it.hasNext()) {
				FileItem item = it.next();
				if(!item.isFormField()) {
					String fileName = item.getName();
					file = new File(""+fileName);
					item.write(file);
					img.setImgName(fileName.substring(0,fileName.indexOf(".")));
					img.setImgExtention(fileName.substring(fileName.indexOf(".")+1));
					img.setOwner(customerID);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
    }
}






