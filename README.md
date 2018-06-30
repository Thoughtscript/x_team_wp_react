# x_team_wp_react

This repo originally started out as a simple **WordPress** Theme demonstrating use of <a href="https://www.upstatement.com/timber/">**Timber**</a>, <a href="https://twig.symfony.com/">**Twig**</a>, and <a href="https://www.advancedcustomfields.com/">**Advanced Custom Fields**</a> 
while combining PHP <a href="http://php.net/releases/7_0_0.php">**7.0**</a> and WordPress <a href="">**4.x.x**</a>!

Subsequently, I learned about the newish <a href="https://wordpress.org/news/2016/12/vaughan/">**WordPress REST API**</a> that transforms WordPress from being a mere *Content Management System* (**CMS**) to a true, full-fleged, *Web Application Framework* (**WAF**). This allows us to use the great, handy, admin dashboard whilst fully decoupling our client and views from the PHP backend!

Here, we combine React with WordPress **4.9.6** and decouple the client from the JSON API.

# Installation and Set Up

The great folks over at <a href="http://www.apachefriends.org/xampp-en.html">**XAMPP**</a> have created a fantastic installation package including everything. Check out the article for a walkthrough (with pictures) that should get you set up in under 5.

# Views

Fire up the supplied React app:

```bash
    $ npm install
    $ npm run all
```

# WordPress JSON Endpoints

```
    https://localhost:443/wordpress/wp-json/
    https://localhost:443/wordpress/wp-json/wp/v2/pages
    https://localhost:443/wordpress/wp-json/wp/v2/posts
```

For a full list of endpoints - please see this official <a href="https://developer.wordpress.org/rest-api/reference/#rest-api-developer-endpoint-reference">documentation</a>!


# Licensing

MIT Licensed. Free to Use!

# Shout Outs

1. Thanks to <a href="https://snazzymaps.com/style/43454/black-and-white">**Ali Humza**</a> for the rad **Snazzy Map**! 
2. Special thanks to <a href="https://uigradients.com/#Margo">**UIGradients**</a>!
3. <a href="https://unsplash.com/photos/T7F5fyC8APM">**Josh Spires**</a>
4. <a href="https://unsplash.com/photos/o6a6H1kZCTw">**Michael Milverton**</a>
