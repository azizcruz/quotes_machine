$(function () {
    RandomQuote();
    var tweetIt = $("#tweet-it"), //tweet button
        newQuote = $("#new-quote"), // new quote button
        quote = $("#quote"); //quote text <p>
    function RandomQuote() {
        // Declare the functional elements to deal with the
        
        var quoteSayer = $("#quoteSayer"), // the name of the quote sayer text <span>
            quote = $("#quote"), //quote text <p>
            size = 0, // to count how many quotes in quotes object
            randQuote = "", // to store the quote got randomly
            randSayer = "", // to store the sayer got randomly
            randNum = 0; // to store a random number to be used to get the randQuote.
        
        var quotes = { // Quotes Object
            0: {
                sayer: "James Cameron"
                , quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
            }
            , 1: {
                sayer: "Henry David Thoreau"
                , quote: "Success usually comes to those who are too busy to be looking for it."
            }
            , 2: {
                sayer: "John Wooden"
                , quote: "Things work out best for those who make the best of how things work out."
            }
            , 3: {
                sayer: "Lisa M. Amos"
                , quote: "Entrepreneurs average 3.8 failures before final success. What sets the successful ones apart is their amazing persistence."
            }
            , 4: {
                sayer: "Jim Rohn"
                , quote: "If you are not willing to risk the usual, you will have to settle for the ordinary."
            }
            , 5: {
                sayer: "Swami Vivekananda"
                , quote: "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success."
            }
            , 6: {
                sayer: "Denzel Washington"
                , quote: "Success? I don't know what that word means. I'm happy. But success, that goes back to what in somebody's eyes success means. For me, success is inner peace. That's a good day for me."
            }
            , 7: {
                sayer: "Eleanor Roosevelt"
                , quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people."
            }
            , 8: {
                sayer: "Mark Twain"
                , quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."
            }
        , }
        
        for (k in quotes) { // count how many quotes
            size++;
        }
        
        randNum = Math.floor((Math.random() * size) + 0); // get a random number between 0 and size
        randSayer = quotes[randNum].sayer; // Assign the random sayer
        randQuote = quotes[randNum].quote; // Assign the random quote
        
        quoteSayer.text(randSayer); // Change The Quote Sayer
        quote.text(randQuote); // Change The Quote
        $(".card").hide().fadeIn(1000);
    }
    
    newQuote.on("click", function () { // When new Quote Button a new random Quote will be displayed
        RandomQuote();
    });
    
    tweetIt.on("click", function() { // When tweet It Button Clicked The current a New Tab Will Be Opened With to Twitter With The Current Quote
    $(this).attr("href", "https://twitter.com/intent/tweet?text=" + quote.text() + "");
    });
});