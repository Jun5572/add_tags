
let input = document.querySelector('[data-js="input_tag_form"]');
let button = document.querySelector('[data-js="add_tag_button"]');
let display = document.querySelector('[data-js="display_tags_area"]');
let del_icon = document.querySelector('[data-js="delete_tag"]');
let tags_arr = [];
function divideSpace(input){
	return input.trim().split(/[\s ]+/);
};

//追加ボタンが押下された時の処理
button.addEventListener('click', function(){


	let divided_tag = divideSpace(input.value);
	let element = '';
	let regex = /^[ \s\r\n\t]*$/;


	for( let i=0; i<divided_tag.length; i++ ){
		if( divided_tag[i] === divided_tag[i+1] ){continue;}
		else if( divided_tag[i].match(regex) ){
			alert('スペースのみで追加はできません');
			continue;
		}else{
			if( tags_arr.indexOf(divided_tag[i]) === -1 ){
				element = 	`<div class="tag_body">
							<i class="fas fa-times-circle" data-js="delete_tag"></i>
							<span>${divided_tag[i]}</span>
							</div>`;
				display.innerHTML += element;
				// input.value = '';
				tags_arr.push(divided_tag[i]);
				// console.log(tags_arr);
			} else {
				alert(`「${divided_tag[i]}」は既に存在します`);
				// input.value = '';
			};
		};
	};
	input.value = '';
});

function deleteTag(){
	console.log(this);
};

//タグ内のXが押下されたときの処理
display.addEventListener('click', deleteTag, false);
