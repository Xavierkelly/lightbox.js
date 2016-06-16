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

### Using LightBox.js with settings
Settings exposed are:

- 'bgcolor' Controls the background color of the lightbox. (Defaults to rgba(3,3,3,0.8) or rgb(3,3,3) on browsers that do not support transparency.)


- 'closeButton' Controls whether to show a close button at the top of the lightbox. When enabled, only the close button will close the lightbox. Default behaviour will allow the lightbox to be closed when the user clicks anywhere on the screen. (Defaults to false.)    

To use the plugin with custom settings, simply include them when you call the plugin, like so: 

```javascript
<script type="text/javascript">
	$(".lightbox").lightbox({
    		'bgcolor'       : 'rgba(67, 153, 156, 0.8)',
    		'closeButton'   : true	
	});
</script>
```
