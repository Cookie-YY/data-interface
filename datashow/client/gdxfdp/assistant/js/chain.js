
	var from = sessionStorage.getItem('from');

		//省级
			$.ajax({
				type: "Get",
				url: baseapi + "/xf/?table=search_qh&value=shej_02&transformer=@groupby",
				success: function(data) {
					for(var i = 0; i < data.data[0].value.length; i++) {
						$("#shengj").html(`<a style='color: #000;text-decoration: none;' href="${from}.html?Cqh=${data.data[0].value[i]}">${data.data[0].value[i]}</a>`)
						$("#shengj").addClass('abc')
					}
				}
			})
			//市级
		
			$.ajax({
				type: "Get",
				url: baseapi + "/xf/?table=search_qh&value=shij_02&transformer=@groupby",
				success: function(data) {
					for(var i = 0; i < data.data[0].value.length; i++) {
						var $li_1 = $("<li class=''></li>");
						// $li_1.text(data.data[0].value[i]);
						$li_1.html(`<a style='color: #000;text-decoration: none;' href="${from}.html?Cqh=${data.data[0].value[i]}">${data.data[0].value[i]}</a>`)
						$("#shiji").append($li_1);
					}
				}
			})
			
			//县级
			
			$.ajax({
				type: "Get",
				url: baseapi + "/xf/?table=search_qh&name=shij_02&value=xj_02&transformer=@groupby",
				success: function(data) {
					for(var i = 0; i < data.data.length; i++) {
						var $ul_1 = $("<ul class='clearfix'></ul>");
						var $h4_1 = $("<h4></h4>");
						$h4_1.text(data.data[i].name);
						$ul_1.append($h4_1)
						for(var j = 0; j < data.data[i].value.length; j++) {
							var $li_1 = $("<li class='ellipsis'></li>");
							$li_1.html(`<a style='color: #000;text-decoration: none;' href="${from}.html?Cqh=${data.data[i].value[j]}">${data.data[i].value[j]}</a>`)
							// $li_1.text(data.data[i].value[j]);
							$ul_1.append($li_1);
							//		            			console.log(data.data[j].value.length)
						}
						$('#tbc_03').append($ul_1)
					}
				}
			})
			$(function() {
				$(".chain_main .rfloat .rfloat_r .ctt #tbc_01").delegate("li", "click", function(e) {
					$(this).addClass('abc')
					$(this).siblings('li').removeClass('abc')
					// let Cqh = e.target.innerText
					// window.history.go(-1)
				});
				$(".chain_main .rfloat .rfloat_r .ctt #tbc_02").delegate("li", "click", function(e) {
					$(this).addClass('abc')
					$(this).siblings('li').removeClass('abc')
					// let Cqh = e.target.innerText
					// window.history.go(-1)
				});
				$(".chain_main .rfloat .rfloat_r .ctt #tbc_03").delegate("li", "click", function(e) {
					$(this).addClass('abc')
					$(this).siblings('li').removeClass('abc')
					// let Cqh = e.target.innerText
					// window.history.go(-1)
				});
			})

			//<!cdata[
			function g(o) {
				return document.getElementById(o);
			}

			function hoverli(n) {
				for(var i = 1; i <= 3; i++) {
					g('tb_' + i).className = 'aa';
					g('tbc_0' + i).className = 'undis';
				}
				g('tbc_0' + n).className = 'list2';
				g('tb_' + n).className = 'bb';
			}

			function dun() {
				hoverli
			}

			function hoverli2(n) {
				for(var i = 1; i <= 3; i++) {
					g('js_' + i).className = 'aa';
					g('jsc_0' + i).className = 'undis';
				}
				g('jsc_0' + n).className = 'list2';
				g('js_' + n).className = 'bb';
			}

			function fun2() {
				hoverli2(3);
			}

			function hoverli3(n) {
				for(var i = 1; i <= 3; i++) {
					g('be_' + i).className = 'aa';
					g('bec_0' + i).className = 'undis';
				}
				g('bec_0' + n).className = 'list2';
				g('be_' + n).className = 'bb';
			}

			function fun3() {
				hoverli2(3);
			}
			//如果要做成点击后再转到请将<li>中的onmouseover 改成 onclick;