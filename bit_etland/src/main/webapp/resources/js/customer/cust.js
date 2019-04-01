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
		 let list = ()=>{		
		   $.getJSON($.ctx()+'/cust/page/1',
			   d=>{
				   let html = '<table><tr><th>아이디</th></tr>'
					   			+'<tr><td>이름</td></tr>'
					   			+'<tr><td>폰번호</td></tr>'
					   			+'<tr><td>도시</td></tr>'
					   			+'<tr><td>주소</td></tr>'
					   			+'<tr><td>우편번호</td></tr>'
				   $.each(d,(i,j)=>{
			   html += '<tr><td>'+j.customerID+'</td>'
						+'<td>'+j.customerName+'</td>'
						+'<td>'+j.phone+'</td>'
						+'<td>'+j.ssn+'</td>'
						+'<td>'+j.city+'</td>'
						+'<td>'+j.address+'</td>'
						+'<td>'+j.postalcode+'</td>'
						+'</tr>'
				html +='</table>'
					   $('#right_content').html(html);
					   
				   });
			   });
		   }
		return {init:init,
			list:list};
	})();
