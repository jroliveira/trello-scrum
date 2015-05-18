# trello scrum

[![Code Climate](https://codeclimate.com/github/jroliveira/trello-scrum/badges/gpa.svg)](https://codeclimate.com/github/jroliveira/trello-scrum)

Trello scrum is a chrome extension which adds scrum features to trello's boards (trello.com)

### Current features

- Set points for a card
- Sum up card points for a list
- Display card points in a separated tag

### Installing

You can install it via [Chrome web store](https://goo.gl/0q5Ck7)

Or

* `git clone https://github.com/jroliveira/trello-scrum.git`
* `bower install`
* and use the [Chrome Apps & Extensions Developer Tool](https://chrome.google.com/webstore/detail/chrome-apps-extensions-de/ohmmkhmmmpcnpikjeljgnaoabkaalbgc) to load an extension.

### Running tests

* `npm install`

##### Console

* `gulp test --harmony` to run in a console 

##### Browser

* open `test\runner.html` to run in a browser

### How to use it

To set points for a card you just need to write the number of points between parenthesis "()" Eg: (5) Card title.
Or you can open up a card and when you edit its title you will be able to set points

##### In action

If you wanna see a running sample [project public board](https://goo.gl/71aerP) (you must install extesion before, of course)

### Contributions 

1. Fork it
2. git checkout -b <branch-name>
3. git add --all && git commit -m "feature description"
4. git push origin <branch-name>
5. Create a pull request
