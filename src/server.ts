//alteracoes referente ao passo 11.

const {app, setup} = require('./index')

if (require.main === module) {
    setup();
    app.listen(3000, () => console.log('Server started at http://localhost:3000'));
}