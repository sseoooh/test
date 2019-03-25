var algorithm =  algorithm || {};
	algorithm =(()=>{
		let init=(x)=>{
			algorithm.$.init(x);
		};
		let onCreate=()=>{
			setContentView();
		};
		let setContentView=()=>{
			$.when(
				$.getScript($.js()+'/component/compo.js'),//get script끝
				$.getScript($.js()+'/algorithm/sequence.js')	
			).done(()=>{
				sequence();
			}
			);
		};//setContentVieEND
		return {init:init,
			onCreate:onCreate};
	})();//algorithmEND
	
	algorithm.$={
			init : (x)=>{
				$.getScript(x+'/resources/js/router.js',()=>{
					$.extend(new Session(x));
					algorithm.onCreate();
				})
			}
	};
