var cust = cust || {}
cust = (()=>{
		let init =()=>{
			onCreate();
		}
		let onCreate =()=>{
			setContentView();
		}
		let setContentView =()=>{
			
			 $.getScript($.js()+'/component/compo.js')
		        .done(()=>{
		        	 $('#right_content').empty();
		        	mypage();
		        
		        $('#left_content ul').empty();
            let arr = [
                {val:'마이페이지', name:'mypage'},
                {val:'회원탈퇴', name:'leave'},
                {val:'쇼핑몰', name:'shopping'},
                {val:'장바구니', name:'basket'},
                {val:'구매내역', name:'perchase'},
                {val:'정보수정', name:'update'}];
      
       
            $.each(arr,(i,j)=>{
                $('<li><a href="#">'+j.val+'</a></li>')
                    .attr('name',j.name)
                    .addClass('cursor')
                    .appendTo('#left_content ul')
                    .click(function(){
                
                        let that = $(this).attr('name');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        switch(that){
                        case 'mypage' :
                            $('#right_content').empty();
                            mypage();
                         
                            $('form button[type=submit]').click(e=>{  
                        		e.preventDefault();
                        		
                        		});
                            
                            break;
                        case 'leave' :
                            $('#right_content').empty();
                            leave();
                           
                            $('form button[type=submit]').click(e=>{
                            	e.preventDefault();
                            	alert('들어옴')	
                        		
                            });
                            break;
                        case 'shopping' :
                            $('#right_content').empty();
                            shopping();
                            $('form button[type=submit]').click(e=>{
                            	e.preventDefault();
                            	alert('들어옴')	
                        		
                            });
                            break;
                       case 'basket' :
                            $('#right_content').empty();
                            basket();
                           
                            $('form button[type=submit]').click(e=>{
                            	e.preventDefault();
                            	alert('들어옴')	
                        		
                            });
                            break;
                        case 'perchase' :
                            $('#right_content').empty();
                            perchase();
                            $('form button[type=submit]').click(e=>{
                            	e.preventDefault();
                            	alert('들어옴')	
                            });
                            break;
                     case 'update' :
                            $('#right_content').empty();
                            update();	
                            $('form button[type=updatebtn]').click(e=>{
                            	alert('버튼먹음');
                            	let data = {password:$('form input[name=password]').val(),
			        						phone:$('form input[name=phone]').val(),
			        					 	city:$('form input[name=city]').val(),
			        						address:$('form input[name=address]').val(),
			        						postalcode:$('form input[name=postalcode]').val()};
                            	alert('정보확인왜안찍힘?');
        		
        		   $.ajax({
        	           url: $.ctx()+'/users/cust',
        	           type: 'post',
        	           data: JSON.stringify(data),
        	           dataType: 'json',
        	           contentType: 'application/json; charset=UTF-8',
        	           success: d=>{
        	        	  
        	        	   if(d.msg==='SUCCESS'){	  
        	        		   alert('정보수정이완료되었습니다:'+ d.msg);
        	        		   $('#right_content').empty();
        	        		   $(compo.cust_update()).appendTo('#right_content');           		
        	           	}else{
        	           		 alert('정보수정실패');
        	           		$(compo.cust_update()).appendTo('#right_content');
        	           		update();
        	           	}
        	             
        	           },
        	           error: e=>{
        	              alert('실패');
        	           }
        	       });
                            	e.preventDefault();
                            	alert('들어옴')
                            	
                        		
                            });
                            break;
                        }
                    });
            }); //navi_end
		    });
		};
		
		let mypage=()=>{
			  $(compo.cust_mypage()).appendTo('#right_content');
		}
		let leave=()=>{
			$(compo.cust_leave()).appendTo('#right_content');
		}
		let shopping=()=>{
			$(compo.prod_post()).appendTo('#right_content');
		}
		let basket=()=>{
			$(compo.cust_basket()).appendTo('#right_content');
		}
		let perchase=()=>{
			$(compo.cust_perchase()).appendTo('#right_content');
		}
		let update=()=>{
			$(compo.cust_update()).appendTo('#right_content');
			alert('업데이트폼 보여줌');
		};
		
let list =(x)=>{
	$('#right_content').empty();
   $.getJSON($.ctx()+'/cust/page/'+x,d=>{
	   		alert('x의값'+x);
	   		alert('d의값'+d);
		   $('<div class="grid-item" id="content_1">'
			+'<h1><font style="font-size: 20px;margin: 0 auto;">고객 목록</font>'
			+'</h1>'
		    +'</div>'
		    +'<div class="grid-item" id="content_2"></div>')
		    .appendTo('#right_content');
		let table ='<table><tr><th>No.</th>'
					+'<th>아이디</th>'
					+'<th>이름</th>'
					+'<th>생년월일</th>'
					+'<th>성별</th>'
					+'<th>전화</th>'
					+'<th>주소</th>'
					+'<th>우편번호</th>'
					+'</tr>'
			   $.each(d.li,(i,j)=>{
				   table += '<tr><td>'+j.rownum+'</td>'
					+'<td>'+j.customerID+'</td>'
					+'<td>'+j.customerName+'</td>'
					+'<td>'+j.ssn+'</td>'
					+'<td>'+'남'+'</td>'
					+'<td>'+j.phone+'</td>'
					+'<td>'+j.address+'</td>'
					+'<td>'+j.postalCode+'</td>'
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
		
	};
	return {init:init,
		list:list};
})();
