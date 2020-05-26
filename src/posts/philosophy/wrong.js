import React from 'react'

import Markdown from '../../components/Markdown'

const md = `
Most people are terrified of the possibility of being wrong. So much so that autocorrect (or as I playfully call it, automistake) refused to type the word "wrong" for five attempts when I was sending a text earlier today.

But what really is lost by being wrong? If two people, A and B, get into an argument about which religion is correct and B concedes that A has better arguments, we say that A has won the argument. What exactly has A won? A walks away with the same understanding of the universe that A had before, but the total knowledge A has about the universe has not changed. B, on the other hand, suffers the regret of having belonged to the "wrong" religion their entire life, but now B can alter course and follow the "right" religion. Really, it is B that has won since B walks away smarter and with an increased knowledge. B should feel more confident because this new opinion was gained through the reasoning of another person, and B has overcome past biases to arrive at this position.

Most modern humans I believe would agree that most humans in the past were wrong about pretty much everything. It's not the miasma or smell of feces that causes disease, but the bacteria within that can hide flavorless in the drinking water. The earth is not the center of the universe. Mankind is not separate from nature, but a natural conclusion of 13.8 billion years. I believe we could extrapolate this to today and safely assume that we're still wrong about a great many things.

When a new idea is presented to us we decide, often arbitrarily, whether that new idea is right or wrong based on our previous biases and knowledge, which is most likely flawed in ways we cannot have access to. So when a new idea is presented and we make a snap judgement of its validity, that should give us pause. If a year passes and you have not been wrong about anything in that year that leaves only two possibilities: either you were wrong about a great number of things and were too stubborn to admit any of them or you had not encountered enough interesting ideas in a year that the coin flips and snap judgements never failed you. Both of these are scary possibilities, either you've increased the number of things you are wrong about or you have lived a life so boring that you were never wrong.

I'm not sure which is worse, but personally I've resolved to exhault my mistakes more than my accuracies. Rather than running around telling everyone how great I am to have gotten this right or to have proven this person a fool, I should brag about the times I've been wrong. Because those are the times I became smarter against all odds.`

const Component = () => <Markdown>{md}</Markdown>

export default {
  Component,
  title: 'The Virtue of Being Wrong',
  path: 'philosophy/wrong.js',
  date: '2017-5-16',
  tags: ['epistemology'],
}
