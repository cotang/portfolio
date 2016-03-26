$(document).ready(function(){

	// Hamburger - jquery
	$('#menu-trigger').click(function(e){
		e.preventDefault();
		$('#additional-menu').slideToggle('slow');
	});

	// Scrolly
	$('#bg').scroolly([
		{
		    from: 'doc-top',
		    to: 'doc-top + 20doc',
		    removeClass: 'bg2 bg3 bg4 bg5',
		    addClass: 'bg1'	
		},
		{
		    from: 'doc-top + 20doc',
		    to: 'doc-top + 40doc',
		    removeClass: 'bg1 bg3 bg4 bg5',		    
		    addClass: 'bg2'
		},	
		// {
		//     from: 'doc-top + 40doc',
		//     to: 'doc-bottom - 40doc',
		//     removeClass: 'bg1 bg2 bg4 bg5',		    
		//     addClass: 'bg3'
		// },		
		{
		    from: 'doc-bottom - 40doc',
		    to: 'doc-bottom - 20doc',
		    removeClass: 'bg1 bg2 bg3 bg5',		    
		    addClass: 'bg4'
		},	
		{
		    from: 'doc-bottom - 20doc',
		    to: 'doc-bottom',
		    removeClass: 'bg1 bg2 bg3 bg4',		    
		    addClass: 'bg5'
		}							
	]);

	$('#bg-inner').scroolly([
	{
	    to: 'doc-top + 10doc',
	    cssFrom: {
	        opacity: 1
	    },
	    cssTo: {
	        opacity: 0
	    }	    
	}
	]);



	// Smooth scroll
	$('a').smoothScroll({
		duration: 1000, // animation speed
		easing: 'swing', // find more easing options on http://api.jqueryui.com/easings/
		offset: 0 // custom offset
	});	


   // validate contact form
    $(function() {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true                 
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form."
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact.php",
                    success: function() {
                        $('#contact-form :input').attr('disabled', 'disabled');
                        $('#contact-form').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function() {
                        $('#contact-form').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });
    });



});