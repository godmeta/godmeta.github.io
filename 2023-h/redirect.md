# Setting Up DMeta Server
## Part II Redirecting Web Browser to DMeta Server

- _Part I of setting up DMeta Server consists of downloading dmeta.tgz source file and installing them to a Linux webserver directory __on your own mobile phone OR desktop computer__. This will be explained elsewhere as most experienced programmers do not need a tutorial for this part._

- _Running DMeta Server __on your own mobile phone OR desktop computer__ is the most crucial step to __build OUR OWN Decentralised Metaverse__, hence the name DMeta._

1. The most common first step in setting up your own web server is to obtain a domain name, e.g. www.example.com.

Although this step is inexpensive, we shall demonstrate how this can be done for FREE, as we need a method that can be scaled, to encourage as many people as possible to join DMeta Decentralised Metaverse. 

The costs of FREEDOM (not just free of charge) is a small inconvenience, that consists of the following steps:

- a. Use a URL shorterner service (e.g. http://bit.do) to make a short URL http://bit.do/dmeta
- b. Redirect bit.do/dmeta to YOUR github.io page. (Now every GitHub user is entitled to one website, without backend server code.)
- c. Redirect your github.io page to your NGROK tunnel — you need this because your mobile phone or desktop computer is by default hidden from the external Internet.

Figure 1 shows http://bit.do/dmeta is entered in the address bar of the web browser.

Figure 2 shows DMeta Server home page, with a very long tunnel address.

- Figure 1
<img src="https://github.com/udexon/udexon.github.io/blob/main/dmeta/img/dmeta_bitdo.png" width=800>

- Figure 2
<img src="https://github.com/udexon/udexon.github.io/blob/main/dmeta/img/dmeta_home.png" width=800>


2. Figure 3 shows http://bit.do URL shorterner home page.

- Figure 3
<img src="https://github.com/udexon/udexon.github.io/blob/main/dmeta/img/bitdo.png" width=800>

Figure 4 shows that bit.do/dmeta is being redirected to https://udexon.github.io/dmeta/

- Figure 4
<img src="https://github.com/udexon/udexon.github.io/blob/main/dmeta/img/bitdo_dmeta.png" width=800>



3. One crucial step in setting NGROK tunnel is to sign up with NGROK using your GitHub account. By doing so, you will be given an authtoken, which will entitle you to a persistent tunnel that can be opened until you shut it down. Otherwise, an anonymous free tunnel will be closed in only a few hours.

- https://dashboard.ngrok.com/signup


- Figure 5: NGROK sign up page — you may sign up and login using your GitHub account. 
<img src="https://github.com/udexon/udexon.github.io/blob/main/dmeta/img/ngrok_signup.png" width=800>

- Figure 6: Click "Your Authtoken" on the left to get your authtoken.
<img src="https://github.com/udexon/udexon.github.io/blob/main/dmeta/img/ngrok_setup.png" width=800>

- Figure 7: Detailed instructions on where to save your NGROK authtoken.
<img src="https://github.com/udexon/udexon.github.io/blob/main/dmeta/img/ngrok_authtoken.png" width=800>

- Figure 8: An NGROK log file showing a free tunnel can operate for months on end.
<img src="https://github.com/udexon/udexon.github.io/blob/main/dmeta/img/ngrok_log.png" width=800>
