var ViewModel =function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Ace');
	this.imgSrc = ko.observable('img/pup1.jpg');
	this.imgAttribution = ko.observable('https://www.google.com');
	this.nicknames = ko.observableArray(['Leon', 'Mija', 'heyYo']);

	this.title = ko.computed(function(){
		var title;
		var clicks = this,clickCount();
		if (clicks < 10) {
			title ='Newborn';
		} else if (clicks < 50) {
			title = 'Infant';
		}else if (clicks < 100) {
			title = 'Child';
		}else if (clicks < 150) {
			title = 'Teen';
		}else if{
			title = 'Ninja';
		}
		return title;	
	})

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());