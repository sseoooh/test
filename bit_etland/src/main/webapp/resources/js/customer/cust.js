var cust = cust || {}
	cust = (()=>{
		let init =()=>{
			onCreate();
		}
		let onCreate =()=>{
			setContentView();
		}
		let setContentview =()=>{
			 $.getScript($.js()+'/component/compo.js')
		        .done(()=>{
		        	mypage();
		        })
		}
		let mypage=()=>{
			  $(compo.cust_mypage()).appendTo('#right_content');
		}
		return{init:init}
		})();
