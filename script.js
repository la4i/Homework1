function seasons() {
    let monthNumber = prompt('Напишите номер месяца');

    if (monthNumber >= 1 && monthNumber <= 2 || monthNumber == 12) {
        alert('Зима');
    }

    else if (monthNumber >= 3 && monthNumber <= 5) {
        alert('Весна');
    }

    else if (monthNumber >= 6 && monthNumber <= 8) {
        alert('Лето');
    }

    else if (monthNumber >= 9 && monthNumber <= 11) {
        alert('Осень');
    }

    else if (monthNumber <= 0 || monthNumber >= 13) {
        alert('Попробуй заново');
    }
}

function memorizethewords() {
    const list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    alert('На экране будут представлены слова. Задача: запомнить слова и их порядок');
    alert(list.sort(() => Math.random() - 0.5));

    let answerUser = prompt('Какое слово было первым?');
    let answerUser1 = prompt('Какое слово было последним?')

    if (answerUser.toLowerCase() === list[0].toLowerCase() && answerUser1.toLowerCase() === list[list.length - 1].toLowerCase()) {
        const win = confirm('Поздравляем с победой!');
        if (win == true) {
            memorizethewords();
        } else {
            alert('До встречи!');
        }
    } else if (answerUser.toLowerCase() === list[0].toLowerCase() || answerUser1.toLowerCase() === list[list.length - 1].toLowerCase()) {
        const half = confirm('Вы были близки к победе!');
        if (half == true) {
            memorizethewords();
        } else {
            alert('До встречи!')
        }
    } else {
        const loose = confirm('Вы ответили не верно');
        if (loose == true) {
            memorizethewords();
        }  else {
            alert('До встречи!')
        }
    }
}


