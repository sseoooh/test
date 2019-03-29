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
                {val:'정보수정', name:'modify'}];
      
       
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
                     case 'modify' :
                            $('#right_content').empty();
                            modify();
                            
                           
                            $('form button[type=submit]').click(e=>{
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
		let modify=()=>{
			$(compo.cust_modify()).appendTo('#right_content');
		};
		return {init:init};
	})();
