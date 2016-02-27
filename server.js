// set up ======
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===

mongoose.connect('mongodb://localhost/bboystodo')

// app.use(express.static(_dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());


// mongoose model ================

var Todo = mongoose.model('Todo', {
  text : String
});

// routes ==============

app.get('/api/todos', function(req, res) {
  Todo.find(function(err, todos) {
    if (err)
      res.send(err)

    res.json(todos);
  });
});

app.post('/api/todos', function(req, res) {
  Todo.create({
    text : req.body.text,
    done : false
  }, function(err, todo) {
    if (err)
      res.send(err);

      Todo.find(function(err, todos) {
          if (err)
            res.send(err)
          res.json(todos);
      });
  });
});

app.delete('/api/todos/:todo_id', function(req, res) {
  Todo.remove({
    _id : req.params.todo_id
  }, function(err, todo) {
    if (err)
      res.send(err)

    Todo.find(function(err, todos) {
      if (err)
        res.send(err)
      res.json(todos);
    });
  });
});


app.listen(8080);
console.log('Todo app listening on port 8080');
