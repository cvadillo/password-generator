# Password Generator Starter Code

Tried to modify this starter code so that I could successfully create a random password with the following requirements.

1. 8-128 characters
2. Ability to choose between Uppercase, Lowercase, Numbers and Symbols.
3. Generate a truly random password based on the parameters.

I was able to modify the HTML and incorporate the elements necessary to take user input and create it into variables within my Javascript program.

Those values were then taken as parameters that could be confirmed and then used to generate the password. 

I also created an onClick event to figure out when the user submitted their password parameters.

The parameters were each put into their own function within an object to try and cycle through the parameters randomly. Each character type has its own generator function.

The ouput of those functions were put into an Object that can then be called later to randomize a password.

I am not sure if this particular method would create a truly random password, but I wanted the code to be on the shorter side of things. The other approach I wanted to take was a series of nested if statements that would determine the cases for each of the selected characters and then generate a truly random password based on the inputs from the user. Ultimately, I chose this method instead. I will need to revisit this assignment as for the moment I am not happy with the outcome and I don't know how to fix the bugs that are preventing the program from running.
