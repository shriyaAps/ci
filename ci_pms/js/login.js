		$(document).ready(function(){
			$('#loginform').validate({
				debug:true,
				rules:{
					email:{
						required:true,
						email:true
					},
					password:{
						required:true,
						minlength:6
					}
				},
				submitHandler: function(form)
				{
					form.submit();
				}
			});
		});