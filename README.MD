1. I have used flex box layout for responsive design
2. Did random order and ascending order using flex order property. It basically rearranges html elements without ordering DOM elements(it has accessibility impact due to not changing DOM order) and has better performance. I hope, this is fine, if not please let me know.
3. Used some animation for cards
4. added button interaction. like active and focus
5. Used BEM methodology

## Other Options for item number 2 - Improvement

We can use the javascript array sort method for ascending order and Math.random() & Math.floor() for random order with dom re-order(minimal dom reflow).

Please let me know if need any improvement or comments
