
let input = document.querySelector('[data-js="input_tag_form"]');
let button = document.querySelector('[data-js="add_tag_button"]');
let display = document.querySelector('[data-js="display_tags_area"]');
let tag_body = document.querySelector('[data-js="tag_body"]');
let del_icon = document.querySelector('[data-js="delete_tag"]');
let tags_arr = [];

// inpiutの入力値の前後から半角/全角スペースを取り除く
function divideSpace(input){
	return input.trim().split(/[\s ]+/);
};

//追加ボタンが押下された時の処理
button.addEventListener('click', function(){

	let divided_tag = divideSpace(input.value);
	let element = '';
	let regex = /^[ \s\r\n\t]*$/;

	for( let i=0; i<divided_tag.length; i++ ){
		if( divided_tag[i] === divided_tag[i+1] ){ //splitした配列の隣に同じワードがあった場合は処理を飛ばす
			continue;
		}else if( divided_tag[i].match(regex) ){ //スペースのみでボタンが押された時
			alert('スペースのみで追加はできません');
			continue;
		}else{
			if( tags_arr.indexOf(divided_tag[i]) === -1 ){ //tags_arr内に既に存在するか重複チェック。なければ要素を生成
				element = 	`<div class="tag_body" data-js="tag_body">
								<i class="fas fa-times-circle" data-js="delete_tag"></i>
								<span>${divided_tag[i]}</span>
							</div>`;
				display.innerHTML += element;
				tags_arr.push(divided_tag[i]);
			} else {
				alert(`「${divided_tag[i]}」は既に存在します`);
			};
		};
	};
	input.value = '';
});

function deleteTag(e){
	if( tags_arr.length > 0 ){
		let targetElement = e.target.parentNode;
		let reject_tag_word = targetElement.lastElementChild.innerText;
		tags_arr = tags_arr.filter(function(arg){
			return arg !== reject_tag_word;
		});
		targetElement.remove();
	};
};

//タグ内のXが押下されたときの処理
	display.addEventListener('click', deleteTag, false);
