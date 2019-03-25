var app = app || {};
app = (()=>{
	let init=x=>{
		app.session.init(x);
		alert(app.$.ctx());
		onCreate();
	};
	let onCreate=()=>{//서비스
		setContentView();
	};
	let setContentView=()=>{//화면부분
		$('#header').empty().text('헤더');
		$('#menu').empty().text('메뉴');
		$('#main').empty().text('메인');
		$('#right').empty().text('사이드메뉴');
		$('#footer').empty().text('푸터');
		
		$('#header').html('<h1>헤더</h1>');
		$('#menu').html('<h1>메뉴</h1>');
		$('#main').html('<h1>메인</h1>');
		$('#right').html('<h1>사이드메뉴</h1>');
		$('#footer').html('<h1>푸터</h1>');
	};
	return{init : init};
	
})();

app.session =(()=>{
	let init=x=>{
		onCreate(x);
	};
	let onCreate=(x)=>{
		sessionStorage.setItem('ctx', x);
		sessionStorage.setItem('js', x+'resources/js');
		sessionStorage.setItem('img', x+'resources/img');
		sessionStorage.setItem('css', x+'resources/css');
	};
	let setContentView=(x)=>{
		
	};
	return{init:init};
	
	
})();

app.$={//객체리터럴 방식 (service와 serviceImpl을 합친것과같다
		ctx:()=>{return sessionStorage.getItem('ctx')},
		js:()=>{return sessionStorage.getItem('js')},
		img:()=>{return sessionStorage.getItem('img')},
		css:()=>{return sessionStorage.getItem('css')}
};




















