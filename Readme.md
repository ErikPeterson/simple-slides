#Simple Slides

Simple Slides takes list elements and turns them into slide shows. Support right now is basic, but easy.

#Get Started

First, make a list element with each list item being a slide:

```html
<ul class="slideshow">
	<li>
		<img src="http://myface.jpg.to" />
	</li>
	<li>
		<img src="http://yourface.jpg.to" />
	</li>
</ul>
```

Second, require jQuery and Simple Slides in that order.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script src="PATH_TO_YOUR_SCRIPTS/jquery.boilerplate.js"></script>
</body>
```

Third, add Font Awesome and the Simple Slides CSS to your HTML.

```html
<link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
<link rel="stylesheet" href="PATH_TO_YOUR_STYLES/simple-slides.css">
</head>
```

And finally, invoke the plugin:

```html
<script>
$(function(){
	$('ul.slideshow').simpleSlides()
});
</script>
```

Et voilà, you have a slideshow with controls, a slide counter, and responsive behavior. If you need to adjust the CSS for your site, consider the following:

##Options

Right now simpleSlides has two options, the `controlsClass`, and the `slideCLass`. The `controlsClass` is applied to the appended list item that contains the controls. Users can change this to override the style or hook in to events. 

The `slideClass` is given to each slide in the slideshow, to give them style and to avoid confusion with the controls container. If you change it, avoid using "active" as a classname, as that is used internally to denote the current slide.

##TODO

Add a way to customize the controls element. Remove dependency on FontAwesome.