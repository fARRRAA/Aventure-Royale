module.exports.sendMsg = (req, res) => {
    const config = require('../config/config.json');

    let http = require('request');
    let reqBody = req.body;

    let fields = [
        '<b>Вам пришел новый запрос на обратный звонок!</b>',
        '<b>От: </b>' + reqBody.fnameInput ,
        '<b>Почта человека: </b>' + reqBody.emailInput
    ]

    let msg = ''

    fields.forEach(field => {
        msg += field + '\n'
    });

    msg = encodeURI(msg)

    http.post(
        `https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`,
        function (error, response, body) {
            //не забываем обработать ответ
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            if (response.statusCode === 200) {
                res.status(200).json({
                    status: 'ok',
                    message: 'Заявка успешно отправлена! Ожидайте звонка.',
                });
            }
            if (response.statusCode !== 200) {
                res.status(400).json({
                    status: 'error',
                    message: 'Произошла ошибка!'
                });
            }
        });
}