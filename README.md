# LightBox.js
A simple jQuery lightbox plugin for adding pop up lightboxes to images. Requires jQuery.

### How to use the plugin

###### Include the plugin stylesheet and javascript to your page
```html
<!-- Somewhere in the header -->
<link rel="stylesheet" href="./src/lightbox.css">

<!-- Somewhere in the footer after jQuery -->
<script src="./src/lightbox.js"></script>
```

###### Define the images you want to use LightBox.js on 
```html
<!-- Somewhere in your page -->
<img class='lightbox' src='./images/img1.jpg' />
<img class='lightbox' src='./images/img2.jpg' />
```

###### Start of LightBox.js Javascript
```javascript
<script type="text/javascript">
	$(".lightbox").lightbox();
</script>
```