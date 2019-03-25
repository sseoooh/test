function sequence(){
	_sequence.nav();
	_sequence.remove();
			$('#right_content').prepend($$.div({id:'right_start'}));
			$('#leave_a_comment').before('<div id="right_end"/>')
			$('#right_start').nextUntil('#right_end')
			.wrapAll('<div id="new_div"></div>');
		let str = $('#new_div').html();
		
		let arr = [
			{id:'ari' , val:'등차수열의 합계'},
			{id:'geo' , val:'등비수열의 합계'},
			{id:'fac' , val:'팩토리얼수열의 합계'},
			{id:'fibo' , val:'피보나치수열의 합계'},
			];
		$.each(arr, (i,j)=>{
			let GID = Math.floor(Math.random() * 10000) + 1;//3434
			let _GID = '#'+GID;
			$('<div id="'+GID+'">'+str+'</div>').appendTo('#right_start');
			
			let POST = GID+"_POST";
			let _POST = '#'+POST;
			$(_GID+' h4').attr('id, POST');
			
			let TITLE = GID+"_TITLE"; 
			let _TITLE = '#'+TITLE;//#3434_TITLE
			$(_GID+' h2').attr('id',TITLE);//#3434 h2
			
			let DATE = GID+'_DATE';
			let _DATE ='#'+DATE;
			$(_TITLE).siblings('h5').eq(0).attr('id',DATE);
			
			let BTN = GID+'_BTN';
			let _BTN = '#'+BTN;
			$(_TITLE).siblings('h5').eq(1).attr('id',BTN);
			
			let INPUT = GID+'_INPUT';
			let _INPUT = '#'+INPUT;
			$(_GID+' p').attr('id',INPUT); 
			$(_TITLE).text(j.val);
			$(_BTN).empty();
			$(_INPUT).empty();
			
			let x = [{cls:'start', txt:'시작값'},//그냥 이름붙이는거
					{cls: 'end', txt:'한계값'},
					{cls: 'diff', txt:'공차'}];
			
			
			$(_sequence.inputForm(x)).appendTo(_INPUT);
			$('#del_start').remove();
			$('#del_end').remove();
			$('<span class="label label-danger"></span>').text('결과')
			.addClass('cursor').attr('name',j.id).appendTo(_BTN)
			.click(function(){
			let that = $(this).attr('name');
			let data = {start: $(_INPUT+' input.start').val(),//클래스
							end: $(_INPUT+' input.end').val(),
							diff: $(_INPUT+' input.diff').val()};
			
			alert("넘어가는시작값:"+data.start);
				$.ajax({
					url : $.ctx()+'/algo/seq/'+that,
					type : 'post',
					data : JSON.stringify(data),
					dataType : 'json',
					contentType : "application/json",
					success : d=>{
					$(_INPUT).empty();
					$('<h2>결과값  : '+d.result+'</h2>').appendTo(_INPUT);
					},
					error : e=>{
						alert('AJAX 실패');
					}
				});
			});
			$('<span class="label label-warning" style="margin-left: 20px"></span>')
			.text('리셋').addClass('cursor')
			.appendTo(_BTN).click(()=>{
				$(_INPUT).empty();
				$(_sequence.inputForm(x)).appendTo(_INPUT);
			});
		});
	}
var _sequence = {
		inputForm : (x)=>{
			let html = '<form>';
			$.each(x,(i,j)=>{
				html += '<div class="fomr=group">';
				html += '<label for="">'+j.txt+' :</label>';
				html += '<input type="text" class="'+j.cls+'"></div>';
				
			});
			html += '</form>';
			return html;
		},
		nav:()=>{
			$('#nav').children().eq(0)
			.html($$.a({id: 'seq', url: '#'}).text('수열'))
			$('#nav').children().eq(1)
			.html($$.a({id: 'math', url: '#'}).text('수학'))
			$('#nav').children().eq(2)
			.html($$.a({id: 'array', url: '#'}).text('배열'))
			$('#nav').children().eq(3)
			.html($$.a({id: 'colla', url: '#'}).text('자료구조'))
			$('#nav').append($$.li({id:''}));
			$('#nav').children().eq(4)
			.html($$.a({id: 'app'}).text('응용'));
		},

		remove:()=>{
			/*$('body').html($$.div({id: 'test', clazz:'clazz'}))
			})*/				
			$('#que_1').text('등차수열의 합계');
			/*$('#que_2').text('등비수열의 합계');*/
			$('#que_2').remove();
			/*$('#que_2').before('<div id="que_start/>');
			$('#que_3').after('<div id="que_end/>');
			$('que_start').nextUntil('que_end').wrap().remove();*/
		}
};
