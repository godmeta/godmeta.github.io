## Programmer's Reference

### 1. A Back Door for Cloud Computing

In Duniix Decentralized Social Media Link #1LSD, a web page is opened with the following URL:

- <a href="https://udexon.github.io/1lsd/?adam-006">https://udexon.github.io/1lsd/?adam-006</a>



The word "karma" might have become a common vocabulary in the Western world due to Reddit (LOL!)

But almost 2 decades ago, Steve Balmer, then CEO of Microsoft, called Linux (and perhaps the "free software" movement that supported it) "Communism"!!

- https://www.zdnet.com/article/ballmer-i-may-have-called-linux-a-cancer-but-now-i-love-it/

It is now "poetic karma" that GitHub, now acquired by Microsoft, provides a "back door" to break the monopolies, that are the "centralized" Internet dominated by MAGA (Microsoft Amazon Google Apple).

In order to build a "Decentralized Internet" (hence DUNIIX, or Decentralized UN`*`X), we need a way for the billions of mobile devices and web browsers around the world to connect to ___individual programmers and users' server nodes running on their mobile phones or desktop computers___. 

The following combination makes this possible:

1. GitHub personal website: `user.github.io`
2. `ngrok` giving away 1 free permanent connection for each GitHub user

### 2. `window.location` Hack

There have been so many layers of modules in "cloud computing" today (whatever it means!!) that few people would know about the secrets to be revealed below!!

- <a href="https://udexon.github.io/1lsd/?adam-006">https://udexon.github.io/1lsd/?adam-006</a>

The web adress above is rather intuitive for ordinary users (we hope!!), as it only consists of:

- `domain.name/service.name/?parameters`

The `parameters` can be extracted by "hacking" the JavaScript variable `window.location` as shown in the following file:

- https://github.com/udexon/udexon.github.io/blob/main/1lsd/index.html

In line 14, `adam-006` is first extracted with `.split('?')` (tokenized by `?` as separator).

```js
    duid = window.location.toString().split('?')[1].split('-')
```

Further, `adam` and `006` are tokenized by `-` as separator and stored in `duid`.

In line 24, the web address is redirected to a virtual machine running Linux Apache with `ngrok` tunnel:

```js
    window.location = "https://add5-113-211-144-109.ngrok.io/Duniix/duid-nn.php?nn="+nn+"&id="+id
```

### 3. Sub-Megabyte MetaMVC (Model View Controller)

Creating a backdoor using GitHub personal page and hacking `window.location` is only half the story to set up a Decentralized Server Node.

The other half of the story is even more challenging, involving not one but ___THREE FUNDAMENTAL PARADIGM SHIFTS___ involving:

- 1. Decentralized User Authentication Scheme (DUAS) vs. Centralized User Authentication Scheme (CUAS)
- 2. SQL vs. Graph Database vs. Filesystem as Graph Database
- 3. Multilingual Heterogeneous Metaprogramming — One Universal Metaprogramming Script for Front-End (JavaScript and HTML) and Back-End (PHP and Database)

Instead of diving deep into each of the topics above, we shall illustrate them with the commands in
 <a href="https://github.com/udexon/udexon.github.io/blob/main/1lsd/User_Manual.md#-users-commands-">User's Commands</a> section:

```js
a={ link_0:'https://www.youtube.com/watch?v=4wTdgAJwdV4', 
title:'Electric Light Orchestra - Last Train To London 
(Extended Rework Dj S Bootleg Dance Remix Edit) [1979 HQ]'}

f(': B_F 3 4 + '+encodeURI(JSON.stringify(a))+' ud: adam-006 duid: s: ; AJAX')
```

In a "conventional" web application, these commands will be part of the GUI/MVC (Graphical User Interface / Model View Controller), i.e. the link and title would be captured by input cells, before submitted from the front end to back end using the ubuiquitous AJAX protocol.

In the code above, `f()` is a JavaScript function that invokes Phoscript, a Reverse Polish Nation, stack machine interpreter, that operates BOTH in the front end AND the back end.

```js
f(': B_F 3 4 + '+encodeURI(JSON.stringify(a))+' ud: adam-006 duid: s: ; AJAX')
```

The object `a` which stores the link and title of the video, is encoded as a string with `encodeURI()` and `JSON.stringify()` and sent to the back end using AJAX.

In the back end, the encoded string is decoded by `ud:`, and then `duid:` is called, which is mapped to `fgl_duid()` as shown in the file below:

- https://github.com/udexon/udexon.github.io/blob/main/1lsd/fgl_duid.php

The commands above create the following files in the following directory:

```
hongwu@localhost:/var/www/html/Duniix/auth/Graph/duid/adam-006$ ls -l
total 16
-rw-r--r--. 1 hongwu hongwu 248 Oct 10 11:44 embed
-rw-r--r--. 1 hongwu hongwu  43 Oct 10 11:44 link_0
-rw-r--r--. 1 hongwu hongwu 150 Oct 10 11:44 title
-rw-r--r--. 1 hongwu hongwu 153 Oct 10 11:44 welcome
```

These files correspond to database records (Model in MVC) in conventional web app.


- <a href="https://udexon.github.io/1lsd/?adam-006">https://udexon.github.io/1lsd/?adam-006</a>

https://github.com/udexon/udexon.github.io/blob/main/1lsd/User_Manual.md

Some readers may find the materials in the USER's Manual too advanced for ordinary users, especially in the
