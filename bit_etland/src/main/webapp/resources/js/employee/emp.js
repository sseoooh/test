var emp = emp || {}
emp = (()=>{
		let init =()=>{
			onCreate();
		};
		let onCreate =()=>{
			/*$.when()
			.done(()=>{
			
			});*/
			setContentView();
		};
		let setContentView =()=>{
			
		};
		let empNav=()=>{
			$.getScript($.js()+'/component/compo.js')
	        .done(()=>{
	        	$('#left_content ul').empty();
	        	$('#left_content h4').html('고객목록');
	            let arr = [
	                {val:'상품등록', name:'prodRegister'},
	                {val:'상품목록', name:'prodList'},
	                {val:'상품수정', name:'prodModify'},
	                {val:'상품삭제', name:'prodDelete'},
	                {val:'상품통계', name:'prodAll'}];
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
	                        case 'prodRegister' :
	                        	$('#right_content').empty();
	                        	$(compo.prod_register()).appendTo('#right_content');
	                        	/*$('form button[type=submit]').click(e=>{
	                              	e.preventDefault();
	                              	$(compo.prod_register()).appendTo('#right_content');
	                              	alert('들어옴');
	                              });*/
	                        	break;
	                        case 'prodList' : break;
	                        case 'prodModify' : break;
	                        case 'prodDelete' :	break;
	                        case 'prodAll' :	break;
	                        }
	                    });
	            }); //navi_end
	            
	        });
		    }
		
	    
		return{init:init,empNav:empNav};
})();




		