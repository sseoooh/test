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
		}//for문끝
	
		if(pxy.existNext){
			$('<li><a>&raquo;</a></li>')
			.appendTo('#ul')
			.click(function(){
		list(pxy.nextBlock);
			});
		}
		});//getJSON끝
	
	}//plist끝
	
	let prodRegister=()=>{
		$('#right_content').html(compo.prod_register());
		$('#prod_regi').click(e=>{
			e.preventDefault();
		
	let freebies = [];
		 $(".checks:checked").each(function(i) {
			 freebies.push($(this).val());
		});
 
	 let pname = $('#product_name').val();
	 let price = $('#price').val();
	 let comment = $('#comment').val();
	 let unit= $('#unit').val();
	 let supplierID = $(supplier_id).val();
	 let color = $('input[name=color]:checked').val();
	 
		 if($.fn.nullChecker([pname, price, unit])){
			 alert('빈칸을 입력해주세요');
		 }else{
			 alert('성공 널이 아닙니다');
		 }
			 
	let data = {categoryID:$('#categoryid').val(),
		productName:pname,
		price:price,
		unit:unit,
		supplierID:$(supplier_id).val(),
		color:$('input[name=color]:checked').val(),
		freebies:freebies,
		comment:$('#commnet').text()};
	
		$.ajax({
			url: $.ctx()+'/prod',
			type:'post',
			data:JSON.stringify(data),
			dataType:'json',
			contentType:'application/json',
			success:d=>{
				alert('성공');
				list(1);
			},
		error:e=>{
			alert('에러');
		}
		})//ajax끝
			});
		
		$('#img_upload_btn').click(function(){
			let ok = (this.files[0].name.match(/jpg|gif|png|jpeg/i)) ? true : false;
			if(ok){
				/*let fd = new FormData();
				fd.append('file', this.files[0]);*/
				$('#img_upload_form').attr('action',$.ctx()+'/showlist/file');
				$.ajax({
					url:$('#img_upload_form').attr('action'),
					dataType:'text',
					encType:"multipart/form-data",
					beforeSubmit:function(){
						alert('로딩');
					},
					/*data:fd,
					async:false,
					cache:false,
					contentType:false,
					processData:false,*/
					success:d=>{
						alert('파일업로드 성공');
					}
					
				}).submit();
			}else{
				alert('gif, png, jpg, jpeg 파일만 업로드 할 수 있다');
			}
	
		});
	}//prodRegister끝

	let showlist=(x)=>{
		alert('여기뜨냐?'+x);
		/*let url = $.ctx()+'/showlist/'+x*/
		$.getJSON($.ctx()+'/showlist/'+x,d=>{
			
		$('#right_content').empty();
		$('<div id="prod_list">'
			+'<button id="grid_btn">그리드로 보기</button>'
			+'<div>'
			+'<h2>상품 리스트</h2>'
			+'</div>'
			+'<div class="center"><div id="pagination" class="pagination"></div></div>'
			).appendTo('#right_content');
			
		$('#grid_btn').click(e=>{
		/*let url = $.ctx()+'/prod/search';
		$.getJSON(url,d=>{});*/
	let a = [1,2,3]
	let i = 0;
		$('<div id="grid"/>').appendTo('#right_content');
		for(i=0;i<3;i++){
			$('<div class="row progrid"></div>').appendTo('#grid');
			  
	$.each(a,(x,y)=>{
		$('<div class="col-md-4">'
		+'<div class="thumbnail">'
		+'<a href="/w3images/lights.jpg" target="_blank">'
		+'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanydDprvV35nlbHP2RwvjdyPrYgOgjevy7W_efJ2tTEVZvKKF" alt="Lights" style="width:100%">'
		+'<div class="caption">'
		+'<p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>'
		+'</div>'
		+'</a>'
		+'</div>'
		+'</div>').appendTo('.progrid')
	}) 
	}
				
		   
	$.each(d.li,(i,j)=>{
		table += '<tr><td>'+i+1+'</td><td>'+j.productName+'</td><td>'+j.unit+'</td><td>'+j.price+'</td>';
		});
		table +='</table>';
	$(table)
		.addClass('w3-table-all')
		.appendTo('#prod_list');
		});
			
	let table = '<table id="products">'
				+'  <tr>'
				+'    <th>No.</th>'
				+'    <th>상품명</th>'
				//+'    <th>제조사 이름</th>'
				//+'    <th>카테고리 이름</th>'
				+'    <th>수량</th>'
				+'    <th>가격</th>'
				+'  </tr>';
		$.each(d.li,(i,j)=>{
		table += '<tr><td>'+i+1+'</td><td>'+j.productName+'</td><td>'+j.unit+'</td><td>'+j.price+'</td>';
		});
		table +='</table>';
		$(table)
		.addClass('w3-table-all')
		.appendTo('#prod_list');
		/*alert('d.pxy::::::'+d.pxy);*/
		alert('d.pxy.existPrev값::::::'+d.pxy.existPrev);
			
		if(d.pxy.existPrev){
			$('<a class="prevBlock">&laquo;</a>')
			.addClass('cursor')
			.appendTo('#pagination')
			.click(()=>{
		showlist(d.pxy.prevBlock);
			});
		}
		
	let i=0;
		for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
			if(d.pxy.pageNum){
				$('<a class="page active">'+i+'</a>')
				.addClass('cursor')
				.appendTo('#pagination')
				.click(function(){
	showlist($(this).text());
				});
	}else{
		$('<a class="page">'+i+'</a>')
		.addClass('cursor')
		.appendTo('#pagination')
		.click(function(){
	showlist($(this).text());
			});
		}
	}//for문괄호
		
	/*if(d.pxy.existNext){
		$('<a class="posblock">&raquo;</a>')
		.addClass('cursor')
		.appendTo('#pagination')
		.click(function(){
			showlist(d.pxy.nextBlock);
		});
	}*/
			
		});//getJSON괄호
	};//showlist괄호
	
		return{init:init,plist:plist,prodRegister:prodRegister,showlist:showlist};
})();//prod끝
	