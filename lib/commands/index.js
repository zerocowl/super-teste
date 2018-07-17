import inquirer from 'inquirer'
import colors from 'colors'
import pad from 'pad'
import { Order } from '../modules'


const questions = [
    {
        type: 'input',
        name: 'input',
        message: 'Enter your request...'
    }
]

const pr = () => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            let order = new Order(answers.input)
            console.log('YOUR ORDER');
            console.log('------------------');
            console.log(pad(colors.green('Output: '), 30), order.process());
        })
}

export default pr