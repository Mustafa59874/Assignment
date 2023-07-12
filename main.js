
var randomQuotes = [
  {'author': 'Frank Zappa', 
   'quote': 'So many books, so little time.'
  },
  {'author': 'Marcus Tullius Cicero', 
   'quote': 'A room without books is like a body without a soul.'
  },
  {'author': 'Mark Twain', 
   'quote': 'Good friends, good books, and a sleepy conscience: this is the ideal life.'
  },
  {'author': 'Jorge Luis Borges', 
   'quote': 'I have always imagined that Paradise will be a kind of library.'
  },
  {'author': 'C.S. Lewis', 
   'quote': 'You can never get a cup of tea large enough or a book long enough to suit me.'
  },
  {'author': 'Oscar Wilde', 
   'quote': 'If one cannot enjoy reading a book over and over again, there is no use in reading it at all.'
  },
  {'author': 'Ernest Hemingway', 
   'quote': 'There is no friend as loyal as a book.'
  },
  {'author': 'Jasper Fforde, The Eyre Affair', 
   'quote': 'Take no heed of her.... She reads a lot of books.'
  },
];

function generateQuote(){
  var random = Number.parseInt(Math.random()*randomQuotes.length + 1);
  document.querySelector('#pone').textContent = `\"${randomQuotes[random].quote}\"`;
  document.querySelector('#ptwo').textContent = `--${randomQuotes[random].author}`;
  
}
