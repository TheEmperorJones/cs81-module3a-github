# First thoughts: Extremely frustrating at first, but remarkably powerful, and humbling.

My initial fear was that I would overwrite some shared repository upstream with piddling, wrong-headed commits.
This was superceded by being rebuffed by git telling me that I was in the editor still.
Finally managed to write a second function to journal.js, and then use touch to add this new .md file.
I'm curious to see if it will slot in beside README.md and journal.js as expected; I half-expect breakage.

# Exploring github

In poking around the history, I see that in my effort to pick up steam, I arrowed-up to the previous commands and inadvertently send the same commit discription to both my first and second commits, condemning them to posterity, as best I can tell.

# Reflection Prompts

- What did you learn about using Git and GitHub?
	- After following instructions, I learned how to quickly iterate by using the CLI, and arrow up to recent commands. This was helpful for speed at best, but harmful when I mistakenly included a commit message from a previous commit, which I have yet to strike.  I'm not sure I could do this from scratch without referencing step-by-step instructions, but I look forward to setting up additional projects in order to practice.  I can also see while people use this to even write work that is not code oriented nor documentation-oriented even, but which preserves iteration and intention across time.  A poet might benefit from it, though probably technical writers and textbook writers even more so.
- What was most confusing or frustrating?
	- It was confusing at first that I had to use all elements of the sequence (add, commit, push) in order for it to write out to git; also humbling was that I had to take care not to be in the editor window on the browser when I decided to try and push the git code.
- Why do you think developers use Git?
	- It seems like a great way to safeguard code through versioning and clear comments built into each commit; forks seem straightforward and everything about it has a whiff of sensible documentation.  Additionally, writing from the CLI is addictive, for who needs a standalone code editor for simple tasks when you can just use nano.  (That said, hopefully we weren't supposed to execute this in VS Code)
- How might this help with larger projects in the future?
	- It would see beneficial to have canonical code cloud-available instead of living on a single machine, especially offline.  With breakages, the versioning makes it easy to revert to last known viable code.  It is easier to use modularity to get pieces of code to talk to one another and test them in a live environment via swapping them in and out to taste.
