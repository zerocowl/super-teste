#!/usr/bin/env babel-node --presets env

import program from 'commander'
import inputComan from '../lib/commands';

program.version('1.1.0').description('Um super teste');

program
    .command('input')
    .alias('i')
    .description('Make your request...')
    .action(() => inputComan());

program.parse(process.argv);
