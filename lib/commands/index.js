import inquirer from 'inquirer'
import colors from 'colors'
import pad from 'pad'
import { Order } from '../modules'
import { QUESTIONS } from './constant'

const inputComan = () => {
    inquirer
        .prompt(QUESTIONS)
        .then((answers) => {
            let order = new Order(answers.input)
            console.log('YOUR ORDER');
            console.log('------------------');
            console.log(pad(colors.green('Output: '), 30), order.process());
        })
}

export default inputComan