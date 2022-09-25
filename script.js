let admin;
let password;

admin = prompt('Введите логин');

if (admin == 'Админ'){
	password = prompt('Введите пароль');

	if (password == "Я главный"){
		alert('Здравствуйте');
	}else if (password === null || password === ''){
		alert('Отменено');
	}else{
		alert("Неверный пароль");
	}

}else if (admin === null || admin === ''){
	alert('Отменено');
}else{
	alert("Я вас не знаю");
}