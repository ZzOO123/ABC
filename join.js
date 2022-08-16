/**
 * 
 */
 function check_id() {
	console.log("work");
	// id를 입력하는 element에 접근하는 코드 작성
	// 태그이름 - id - class ??
	// document의 도움을 받아야 한다.(웹페이지 element = 로딩할 때, DOM으로 분석)
	/*let element1 = document.getElementById('user_id');
	alert(element1.value);
	// 세팅
	element1.value = "tester";*/
	let ta = document.getElementById("myself");
	console.log(ta.value);
}

function getContentTag() {
	// 연결됐는지 확인
	console.log('event');
	let image = document.getElementById("img");
	image.src = "../imgs/gene.png";
	let contents = document.getElementsByClassName('right');
	//console.log(contents.length);
	for(let i=0; i<contents.length;i++) {
		console.log("value = " + contents[i].innerHTML); // content로 들어갈 때 innerHTML
	}
	return false;
}

function registEvent2() {
	const handler = (event)=>{
		if(event.target.checked) {
			alert('now check arrow');
		} else {
			alert('now uncheck arrow');
		}
	}
	const radios = document.getElementsByName("lang");
	for(let i=0; i<radios.length; i++) {
		radios[i].addEventListener('click',handler); // 변수
	}
}

function checkRadio() {
	registEvent2();
	console.log("checkRadio");
	let radios = document.getElementsByName("lang");
	for(let i=0; i<radios.length;i++) {
		if(radios[i].checked) {
			//console.log("radio value = " + radios[i].value);
		}
	}
}	

function registEvent() {
	const handler = (event)=>{
		if(event.target.checked) {
			alert('now check arrow');
		} else {
			alert('now uncheck arrow');
		}
	}
	const boxes = document.getElementsByName("tools");
	for(let i=0; i<boxes.length; i++) {
		boxes[i].addEventListener('click',handler); // 변수
	}
}

// checkbox에 대해서 체크된 것의 value를 브라우저 츨력하고 몇 개 선택되었는지
// alert 창으로 출력하시오
function checkBox() {
	registEvent();
	let count = 0;
	const boxes = document.getElementsByName("tools"); // 배열일 때 const 사용
	for(let i=0; i<boxes.length; i++) {
		if(boxes[i].checked) {
			//console.log("boxes value = " + boxes[i].value);
			count++;
		}
	}
	if(count<2) {
		alert("tools은(는) 2개 이상 선택해야 합니다.");
	}
}