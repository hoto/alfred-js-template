/**
 * Docs: https://github.com/sindresorhus/alfy
 */
import alfy from 'alfy'

const items = [
  {
    title: `Title: ${alfy.input}`,
    subtitle: `Subtitle: ${alfy.input}`,
    arg: `Copied to clipboard: ${alfy.input}`,
  },
]

alfy.output(items)
