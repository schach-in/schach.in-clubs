#!/usr/bin/env node

import Clubs from '@schach.in/clubs'
import commander from 'commander'
const program = commander.program

program
  .name('schach-data')
  .version('1.0.0')
  .arguments('<identifier>')
  .action(async (identifier) => {
    const data = await Clubs.get(identifier)
    if (!data) {
      console.error(`No data found for identifier "${identifier}"`)
      process.exit(1)
    }

    console.log(JSON.stringify(data, null, 2))
  })

program.parseAsync(process.argv)
