var app = app || {};
app = (()=>{
	let init=x=>{
		app.$.init(x);
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$('.act_menu1').empty().text('뭔데?')
		$('.act_menu2').empty().text('뭔데?1')
		$('.act_menu3').empty().text('뭔데?2')
		$('.act_menu4').empty().text('뭔데?3')
		$.when(
			$.getScript($.js()+'/component/compo.js'),
			$.getScript($.js()+'/customer/cust.js'),
			$.getScript($.js()+'/employee/emp.js')
		).done(()=>{
			cust.permission.login();
		});
	};
	return {init: init,
		onCreate: onCreate};
})();

app.$ = {
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				app.onCreate();
			})
		}
	};

function a(){
	
}