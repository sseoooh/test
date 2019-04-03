var prod = prod || {}
prod = (()=>{
		let init =()=>{
			onCreate();
		};
		let onCreate =()=>{
			setContentView();
		};
		let setContentView =()=>{
		
		};
		let plist=(x)=>{
			$('#right_content').empty();
				emp.empNav();
				  $.getJSON($.ctx()+'/prod/page/'+x,d=>{
					  $('<div class="grid-item" id="content_1">'
								+'<h1><font style="font-size: 20px;margin: 0 auto;">상품목록</font>'
								+'</h1>'
							    +'</div>'
							    +'<div class="grid-item" id="content_2"></div>')
							    .appendTo('#right_content');
							let table ='<table><tr><th>No.</th>'
										+'<th>상품아이디</th>'
										+'<th>상품이름</th>'
										+'<th>공급회사</th>'
										+'<th>카테고리번호</th>'
										+'<th>상세설명</th>'
										+'<th>가격</th>'
										+'</tr>'
										
								   $.each(d.li,(i,j)=>{
									   table += '<tr><td>'+j.rownum+'</td>'
										+'<td>'+j.productID+'</td>'
										+'<td>'+j.productName+'</td>'
										+'<td>'+j.supplierID+'</td>'
										+'<td>'+'남'+'</td>'
										+'<td>'+j.categoryID+'</td>'
										+'<td>'+j.unit+'</td>'
										+'<td>'+j.price+'</td>'
										+'</tr>'
								   });
									table += '</table>'
										$(table)
										.attr('id','cust_tab')
										.addClass('pagination center')
										.appendTo('#content_2');
					   
								let pxy = d.pxy;
								let ul = '<nav aria-label="Page navigation" style="width:400px;margin: 0 auto;"><ul id="ul" class="pagination"></ul></nav>';
								$(ul).appendTo('#content_2');

								
								let i = 0;
								for(i=pxy.startPage; i<=pxy.endPage; i++){
									if(pxy.pageNum == i){
										$('<li><a class="page active">'+i+'</a></li>')
										.attr('href','$.ctx()/customers/page/'+i)
										.appendTo('#ul')
										.click(function(){
											list($(this).text());
										});
									}else{
										$('<li><a class="page">'+i+'</a></li>')
										.attr('href','$.ctx()/customers/page/'+i)
										.appendTo('#ul')
										.click(function(){
											list($(this).text());
										});
									}
								}
								if(pxy.existNext){
									$('<li><a>&raquo;</a></li>')
									.appendTo('#ul')
									.click(function(){
										list(pxy.nextBlock);
									});
								}
				  });
				
			}
		return{init:init,plist:plist};
})();
	