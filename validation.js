/*
*	version: 1.0
*/

/*
*	applied on type which are text and password only
*	first param is selector type, eg id or name
*	second param is the selector's value
*	return true if filled and vice versa
*/
function is_filled(selector, value){
	if(selector == "name"){
		if($("input[name='" + value + "']").val() == ""){
			return false;
		}
	}else if(selector == "id"){
		if($("#" + value).val() == ""){
			return false;
		}
	}
	
	return true;
}

/*
*	applied on type which are radio or checkbox only
*	first param is selector type, eg id or name
*	second param is the selector's value
*	return true if checked and vice versa
*/
function is_checked(selector, value){
	if(selector == "name"){
		if($("input[name='" + value + "']").is(":checked")){
			return true;
		}
	}else if(selector == "id"){
		if($("#" + value).is(":checked")){
			return true;
		}
	}
	
	return false;
}

/*
*	applied on email only
*	first param is selector type, eg id or name
*	second param is the selector's value
*	return true if valid and vice versa
*/
function is_valid_email(selector, value){
	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	
	if(selector == "name"){
		var result = pattern.test($("input[name='" + value + "']").val());
	}else if(selector == "id"){
		var result = pattern.test($("#" + value).val());
	}
	
	return result;
}

/*
*	applied on input that is number only
*	first param is selector type, eg id or name
*	second param is the selector's value
*	return true if is number and vice versa
*	use is_number2() if don't want to use is_number
*/
function is_number(selector, value){
	var pattern = /^\d+$/;
	
	if(selector == "name"){
		var result = $("input[name='" + value + "']").val().match(pattern);
		if(result != null){
			return true;
		}
	}else if(selector == "id"){
		var result = $("#" + value).val().match(pattern);
		if(result != null){
			return true;
		}
	}
	
	return false;
}

/*
*	applied on input that is number only
*	include class="vpa" in required field
*	use is_number() if don't want to use is_number2()
*	reference:
		ctrl + a: (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true))
		ctrl + c: (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true))
		ctrl + f: (e.keyCode == 70 && (e.ctrlKey === true || e.metaKey === true))
		ctrl + v: (e.keyCode == 86 && (e.ctrlKey === true || e.metaKey === true))
		ctrl + x: (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true))
		numeric 0 - 9: 48 - 57
		numeric keypad numeric 0 - 9: 96 - 105
		backspace: 8
		tab: 9
		enter: 13
		shift: 16
		control: 17
		caps lock: 20
		escape: 27
		spacebar: 32
		delete: 46
		(.): 190
		F1 - F15: 112 - 126
		arrow up down left right: 37 - 40
*/
function is_number2(){
	$(document).ready(function(){
		$(".vpa").keydown(function(e){
			var required_key_code = [8, 9, 13, 17, 27, 37, 38, 39, 40, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
			
			if(e.shiftKey){
				e.preventDefault();
			}
			
			if($.inArray(e.keyCode, required_key_code) != -1){
				//do nothing
			}else{
				if(e.keyCode == 65 && (e.ctrlKey == true || e.metaKey == true)){
					//do nothing
				}else if(e.keyCode == 67 && (e.ctrlKey == true || e.metaKey == true)){
					//do nothing
				}else if(e.keyCode == 70 && (e.ctrlKey == true || e.metaKey == true)){
					//do nothing
				}else if(e.keyCode == 88 && (e.ctrlKey == true || e.metaKey == true)){
					//do nothing
				}else{
					e.preventDefault();
				}
			}
		});
	});
}
