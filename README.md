# Kickass Text Slider

## Transform Bootstrap Tabs to A sliding Panel

First of all we need the HTML structure like Following. 
Wrap the ul with class of nav-tabs with a div with a class name kickassTextSlider. The div class name should match exactly like I specified at the code example. 
Also include the navigation div inside the div. You can rename the class name for that navigation div. If you want to keep navigation how it looks now then keep the class name kickass-slider-nav for the div and also add the data-dir attribute to define the direction for that button and they needs to be "next" for the next direction and "prev" for the previous direction.
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

Finally include the jquery.kickasstextslider.js in the Footer and initialize the plugin.
```
<script src="js/jquery.kickasstextslider.js"></script>
<script>
    $('.kickassTextSlider').kickassTextSlider({
        nav: '.example',
        speed: 300
    });
</script>
```

For now just 2 options are Available. One is for the class name of navigation div and another one is for the speed. You can download and check the demo.

##License
This package is published under `GNU LGPLv3` license and copyright to [Tawsif Alam](https://github.com/tawsifalam/). Idea is provided by [Asikur Islam](https://github.com/asikur). The license agreement is on project's root.

License: GNU LGPLv3<br />
Package Author: [Tawsif Alam](https://github.com/tawsifalam/)<br />
Package Copyright: Tawsif Alam<br />
Original Idea By: [Asikur Islam](https://github.com/asikur)<br />