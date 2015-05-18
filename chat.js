$(function(){	
	var input = $('#detail');
	var name = $('#name');
	var ul = $('ul');
	var ip = "";
	var emoclik ="";
	var firebaseUrl = 'https://metnit-comment.firebaseio.com';
	var commentRef = new Firebase(firebaseUrl).child('sealcoolz');
	listenToFirebase();
	
	$.getJSON('http://jsonip.com/?callback=?', function(r){
	 ip = r;
	});	
	//emoji
		$('#emo').click(function(e){
						emoclik = $('#emo').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							$('#disemo').attr("disable", "disable"); 
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo1').click(function(e){
						emoclik = $('#emo1').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo3').click(function(e){
						emoclik = $('#emo3').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo4').click(function(e){
						emoclik = $('#emo4').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo5').click(function(e){
						emoclik = $('#emo5').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo6').click(function(e){
						emoclik = $('#emo6').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo7').click(function(e){
						emoclik = $('#emo7').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo8').click(function(e){
						emoclik = $('#emo8').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo9').click(function(e){
						emoclik = $('#emo9').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo10').click(function(e){
						emoclik = $('#emo10').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo11').click(function(e){
						emoclik = $('#emo11').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo12').click(function(e){
						emoclik = $('#emo12').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo13').click(function(e){
						emoclik = $('#emo13').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo14').click(function(e){
						emoclik = $('#emo14').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo15').click(function(e){
						emoclik = $('#emo15').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo16').click(function(e){
						emoclik = $('#emo16').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo17').click(function(e){
						emoclik = $('#emo17').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo18').click(function(e){
						emoclik = $('#emo18').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo19').click(function(e){
						emoclik = $('#emo19').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo20').click(function(e){
						emoclik = $('#emo20').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo21').click(function(e){
						emoclik = $('#emo21').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo22').click(function(e){
						emoclik = $('#emo22').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo23').click(function(e){
						emoclik = $('#emo23').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo24').click(function(e){
						emoclik = $('#emo24').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo25').click(function(e){
						emoclik = $('#emo25').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo26').click(function(e){
						emoclik = $('#emo26').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo27').click(function(e){
						emoclik = $('#emo27').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo28').click(function(e){
						emoclik = $('#emo28').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo29').click(function(e){
						emoclik = $('#emo29').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo30').click(function(e){
						emoclik = $('#emo30').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		$('#emo31').click(function(e){
						emoclik = $('#emo31').attr('value');
						if( name.val().length === 0 ) {
							$('#div2').addClass('has-error');
						}else{
						var insert = {
							name : name.val(),
							text : input.val(),
							emo : emoclik,
							ip : ip.ip
							};
						
							commentRef.push(insert);
							$('#div2').removeClass('has-error');
							input.attr("readonly", "readonly"); 
							setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
							}			
		});
		
	//
		input.keypress(function(e){
			if(e.which == 13  ) {
				if( name.val().length === 0 ) {
					$('#div2').addClass('has-error');
				}else if( $(this).val().length ===0){
					$('#div3').addClass('has-error');
				}else{
				
				var insert = {
					name : name.val(),
					text : input.val(),
					emo : "",
					ip : ip.ip
					};
				
					commentRef.push(insert);
					input.val("");	
					$('#div2').removeClass('has-error');
					$('#div3').removeClass('has-error');
					input.attr("readonly", "readonly"); 
					setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
					}
			}					
			});
			
			function listenToFirebase(){
			$( document ).ready(function() {	
				commentRef.on('value',function(snapshot){
				var newPost = snapshot.val();
				ul.empty(); 
				if (newPost !== null) {
					$.each(newPost , function( index, post){
						if(post.ip == ip.ip){
							
							var strInputCode = post.text;
							cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
							
							var strInputCodes = post.name;
							cleanName = strInputCodes.replace(/<\/?[^>]+(>|$)/g, "");
							
							addToListUser( '<img src="' +post.emo+ '">' + cleanText + ' : '+'['+ cleanName +']' )	
						
						}else{
							
							var strInputCode = post.text;
							cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
							
							var strInputCodes = post.name;
							cleanName = strInputCodes.replace(/<\/?[^>]+(>|$)/g, "");
							
							addToList('['+ cleanName +']'+' : '+ cleanText + '<img src="'+post.emo+'">')
						}
						});
						
						$(".div1").animate({ scrollTop: $('.div1')[0].scrollHeight}, 1000);
					}  
					});
				});
			}
			function addToList(post){
				var li = '<li class="list-group-item"><span class="glyphicon glyphicon-user"></span> '+ post + '</li>';
				ul.append(li);
			}
			function addToListUser(post){
				var li = '<li class="list-group-item" align="right">'+ post + ' <span class="glyphicon glyphicon-user"></span></li>';
				ul.append(li);
			}
});