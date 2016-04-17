# lightBox.js
A simple jQuery lightbox plugin for images all you need is to add a class.

### Example
![alt tag](http://www.kelly.tech/static/img/lightbox.png)
[View LightBox.js Demo](http://lightbox.kelly.tech/)

### External styling sheets that are needed:
- [Get Bootstrap](http://getbootstrap.com/)
- [Jquery](https://jquery.com/)
- [Google Font](https://www.google.com/fonts)

### How to show ligthbox image when click on image with JavaScript

###### Add Class Name to the Images you want to add a light box for
```html
  <img src="your/image.png" class="lightbox"/>
```

###### Start of LightBox.js Javascript
```javascript
  $(document).ready(function () {
  /* Add class name on image */
  $('.lightbox').click(function () {
  var data = $(this).data("class");
  console.log('You clicked the image');
  var windowHeight = window.innerHeight || $(window).height(),
  windowWidth = window.innerWidth || $(window).width();
  /* Create the overlay, append it to body and make it visible.*/
  $('
  ')
  .css('opacity', '0')
  .animate({
  'opacity': '0.5'
  }, 'slow')
  .appendTo('body');
  /* Create the lightbox container which shall contain the image */
  $('
  ')
  .hide()
  .appendTo('body');
  /* Create img-element and add to #lightbox when loaded.*/
  $('')
  .attr('src', $(this).attr('src'))
  .css({
  'max-height': windowHeight,
  'max-width': windowWidth })
  .load(function () {
  $('#lightbox')
  .css({
  'top': (windowHeight - $('#lightbox').height()) / 2,
  'left': (windowWidth - $('#lightbox').width()) / 2
  })
  .fadeIn();
  }) .appendTo('#lightbox');
  /* Remove lightbox on click */
  $('#overlay, #lightbox').click(function () {
  $('#overlay, #lightbox').remove();
  });
  console.log("Display image in colorbox.");
  });
  console.log('Everything is ready.');
  });
  ```
