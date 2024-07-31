---
sidebar_position: 4
tags:
  - Linux
  - prompt
  - ai
---

# Prompt

## Types of prompts

### Zero-shot prompting

* Prompt: "What is Algebra?"
* Answer: "Algebra is a branch of mathematics that studies mathematical symbols and the rules for manipulating these symbols."

### Few-shot prompting

* Prompt: "Write a poem in the style of Shakespeare. Here are a few examples of Shakespearean sonnets.: Sonnet 18: 'Shall I compare thee to a summer's day? Thou art more lovely and more temperate...'
Sonnet 116: 'Let me not to the marriage of true minds Admit impediments. Love is not love Which alters when it alteration finds...'
Sonnet 132: 'Thine eyes I love, and they, as pitying me, Knowing thy heart torment me with disdain,...' Now, write a sonnet about the beauty of the moon."
* Answer: "Upon the sky, the moon doth softly gleam, In silv'ry light that casts its gentle grace,..."

### Chain-of-thought prompting

* Prompt: "Lisa has 7 apples, throws 1 apple, gives 4 apples to Bart and Bart gives one back: 7 -1 = 6 6 -4 = 2 2 +1 = 3
Alice has 5 apples, throws 3 apples, gives 2 to Bob and Bob gives one back, how many apples does Alice have?"
* Answer: 1

### Least-to-most prompting

* Prompt: How to perform data science in 5 steps?

* Answer:
  * Collect data
  * Clean data
  * Analyze data
  * Plot data
  * Present data

## Temperature

Use temperature to vary your output allows you to introduce randomness and creativity. Temperature is a value between 0 and 1, where 0 is the most deterministic and 1 is the most varied.

## Examples

### Markdown table of Linux commands

Please provide a Markdown table with centered text alignment that lists the following Linux commands, their short descriptions and examples: "free", "uptime"
The table has two columns only: 'Command', 'Description'.
Make sure examples are real-world examples and are very useful.
The table format is:

```markdown
|               Command               | Description |
| :---------------------------------: | :---------: |
|             `command1`              | Description |
|       `example of command 1`        | Description |
|   `advance example of command 1`    | Description |
| `very advance example of command 1` | Description |
|             `command2`              | Description |
|       `example of command 2`        | Description |
|   `advance example of command 2`    | Description |
| `very advance example of command 2` | Description |
```

### Rewriting artiicle

I've written an article that needs improvement. I'm looking for help with:

* Revising article structure and headings
* Correcting typos and English grammar
* Refining content and facts
* Reviewing naming issues

Please assist in enhancing my markdown article.

### Extract important sections from article

Extract only important and technical parts from this article. I don't want a long article with unnecessary, less important information.

## References

* <https://microsoft.github.io/generative-ai-for-beginners/>
