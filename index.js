let name = prompt('Как вас зовут?').toLowerCase().trim()
if (name === 'alex') {
    
    let account = +prompt('Номер счета?')
    if (account === 7777) {

        let money = +prompt('Сколько обналичить?')
        if (money <= 10000) {

            alert('Все отлично')
            let remaining = +prompt('Сколько снял? Сколько осталось?')
            if (remaining >= 0) {
                alert('Отличная работа')
                
            }   
        } else {
            alert('Недостаточно средств')
        }
    } else {
        alert('Такого пользователя не существует, до свидания')
    }
} else {
    alert('Такого пользователя не существует, до свидания')
}

