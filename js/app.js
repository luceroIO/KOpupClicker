var ViewModel =function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Ace');
	this.imgSrc = ko.observable('img/pup1.jpg');
	this.imgAttribution = ko.observable('https://www.google.com');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());