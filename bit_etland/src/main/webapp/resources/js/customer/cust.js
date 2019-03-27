/*var cust = cust || {}
cust.permission =(()=>{
	let login =()=>{
		
		$('#left_content ul').empty()
		let array = [{
			arr : 'a', val : '아이디'
		},{
			arr : 'b', val : '비번'
		},{
			arr : 'c', val : '회원가입'
		},{
			arr : 'd', val :  '탈퇴'
		}];
		
		$.each(array, (i,j)=>{
			$('<li><a href="#section1">'+j.val+'</a></li>')
			.attr('name', j.arr)
			.appendTo('#left_content .nav')
			.click(()=>{
				let that = $(that).attr('name');
				switch(that){
				case 'login':
					break;
				}
			})
		});
		$.getScript($.js()+'/component/compo.js')
		.done(()=>{
			$('#right_content').html(compo.cust_login_form());
		})
		.fail(()=>{
			alert('component/compo.js를 찾지 못했습니다.');
		});
	};
	let join =()=>{};
	let mypage =()=>{};
	return {
		login : login,
		join : join,
		mypage : mypage
	};
})();*/