quotes = [
    'There is no monument dedicated to the memory of a committee.',
    'Wanting to be someone you\'re not is a waste of the person you are.',
    'If you can find a path with no obstacles, it probably doesn\'t lead anywhere.',
    'The great thing about a computer notebook is that no matter how much you stuff into it, it doesn\'t get bigger or heavier.',
    'Mistakes are the portals of discovery.',
    'Death is a friend of ours; and he that is not ready to entertain him is not at home.',
    'Don\'t let yourself forget what it\'s like to be sixteen.'
]

# Counts total quotes
totalQuotes = quotes.length

# Get Quote
getQuote = - > #Gets random image from array
activeQuotes = quotes[Math.floor((Math.random() * totalQuotes))]

# Changes background of div
$('div').text(activeQuotes)

getQuote()

$('button').on 'click', (e) - >
    e.preventDefault()

getQuote()