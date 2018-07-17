#!/usr/bin/env babel-node --presets env

import program from 'commander'
//import pr from '../lib/commands/tes'
import pr from '../lib/commands';

program.version('1.1.0').description('Um super teste');

program
    .command('input')
    .alias('i')
    .description('Make your request...')
    .action(() => pr());

program.parse(process.argv);
