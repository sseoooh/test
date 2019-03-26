var auth = auth || {};
auth.permission =(()=>{
/*	let _ = $.ctx();
	let js = $.js();
	let compojs = $.js()+'/component/compo.js';
	let rightCtnt = $('#right_content');*/
	
	let init =()=>{
		onCreate();
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		
	};
	let login =()=>{
		alert('ctxdddddddddddddddddd'+$.ctx()+$.js());
				$.getScript($.js()+'/component/compo.js')
				.done(()=>{
					
					$('#right_content').html(compo.cust_login_form());
					$('form button[type=submit]').click(()=>{
						let data ={customerID:$('form input[name=uname]').val(),
								password:$('form input[name=psw]').val()};
						alert('ID:'+data.customerID);
						
						$.ajax({
							url : $.ctx()+'/cust/login',
							type : 'post',
							data : JSON.stringify(data),
							dataType : 'json',
							contentType : 'application/json',
							success : d =>{
								alert('성공');
							},
							error : e =>{
								alert('실패');
							}
						});
					});
					$('#left_content ul').empty()
					let array = [{
						arr : '로그인', val : 'login'
					},{
						arr : '회원가입', val : 'join'
					},{
						arr : '사원등록', val : 'register'
					},{
						arr : '사원접속', val :  'access'
					}];
					
					$.each(array, (i,j)=>{
						$('<li><a href="#section1">'+j.val+'</a></li>')
						.attr('name', j.arr)
						.appendTo('#left_content .nav')
						.click(()=>{
							let that = $(that).attr('name');//getter개념
							switch(that){
							case 'login':
								$('#right_countent').empty();
								$(compo.cust_login_form())
								.appendTo('#right_content');
								
								break;
							case 'join':
									
								break;
							case 'register':
									
									break;
							case 'access':
								
								break;
							}
						});
						
				})
					$.getScript($.js()+'/component/compo.js')
		.done(()=>{
			$('#right_content').html(compo.cust_login_form());
		})
		.fail(()=>{
			alert('component/compo.js를 찾지 못했습니다.');
		})
		
		});
	};
	let join =()=>{};
	let mypage =()=>{};
	return {
		login : login,
		join : join,
		mypage : mypage
	};
})();