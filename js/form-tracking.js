jQuery(document).ready(function($) {
	var forms = Drupal.settings.conversaa_form.forms;
	if(forms){
		$('form').on('submit', function(event) {
			var formId = $(this).attr('id');
			if(forms.hasOwnProperty(formId)){
				var tracking = $.conversaaPixel();
				var values = '';
				$.each(forms[formId]['fields'], function(index, val) {
					values += '&'+index+'='+encodeURIComponent($("[name='"+val+"']").val());
				});
				tracking += values;
				$('body').append('<img src="'+tracking+'" />');
			}
		});
	}
});
