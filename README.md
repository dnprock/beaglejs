With beaglejs, you can specify classname of tags that you want to track events in Google Analytics.

No need to instrument all event entry points manually. Pass in a regex of your tags' class name and viola!

setBeagle([Google Analytics ID], [App Domain], [regex of classnames]);

e.g.

setBeagle('UA-42923639-2', 'herokuapp.com', 'btn*');
