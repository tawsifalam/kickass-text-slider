# Kickass Text Slider
## Transform Bootsrap Tabs to A sliding Panel

------
First of we need the HTML structure like Following. For the Parent div we still need kickassTextSlider class name exact. Also include the navigation div. You can rename the class name for that navigation div.
```
<div class="kickassTextSlider">

    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
      <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
      <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
      <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
    </ul>

    <div class="kickass-slider-nav">
      <button class="dir-prev" data-dir="prev">Prev</button>
      <button class="dir-next" data-dir="next">Next</button>
    </div><!-- End kickass-slider-nav -->
</div>
```

Then include the jquery.kickasstextslider.css file in The head:
```
<link href="css/jquery.kickasstextslider.css" rel="stylesheet">
```

Finally include the jquery.kickasstextslider.js in the Footer:
```
<script src="js/jquery.kickasstextslider.js"></script>
<script>
    $('.kickassTextSlider').kickassTextSlider({
        nav: '.example',
        speed: 300
    });
</script>
```

For now just 2 options Available. One is for the class name of navigation div and another one is for the speed.
