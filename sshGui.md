### sshGui Application

In my previous posts I have outlined two examples of servers on my home network. However, connecting to them, and to any other machine would require typing out the full ssh command
in my terminal. I decided to attempt to implament an alternative by creating a simple app that would just bring up a list of all of my servers, and allow me simply select which one
to connect to and then open my terminal of choice connected to my remote server.

Prior to sshGui, I have been using the Zig for all of my programming projects but for this app I decided I would try something new. I had heard and seen the extent to which Java is
used in enterprise, along with its mature ecosystem and broad userbase, and despite the negative connotations regarding the language, I chose it as my language of choice for this
application. Using Java was much simpler than using Zig as searching online for solutions to problems yeilded results with much greater consistency and accuracy. Along with this Java
allows for functions to hang off variables which makes using the language much more fluent than in Zig where this is not the case.

My first attempt at writing a real program in Java that actually achived something visual, was a basic program to just launch an application window. Again like most things throughout
the sshGui project, finding an answer to how I would go about this was not a difficult task. I had discovered the awt library to open and control application windows using text, lists,
and options, and in no time I had a "Hello World" window open, along with lists and options which did infact function as one would expect.


