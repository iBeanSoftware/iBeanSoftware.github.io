
function open_popup(url)
{
window.open(url, 'popup', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=600,height=600' );
}


function setupuk ()
{
document.delivery.deliverycountry.value=0;
document.delivery.submit();
}

jQuery(document).ready(function()
	{
		var d = new Date();
		d = d.getTime();
		if (jQuery('#reloadValue').val().length == 0)
		{
			jQuery('#reloadValue').val(d);
			jQuery('body').show();
		}
		else
		{
			jQuery('#reloadValue').val('');
			location.reload();
		}
	}
);
