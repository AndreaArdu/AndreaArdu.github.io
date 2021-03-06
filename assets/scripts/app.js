const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "C/C++",
				weight: 12.3
			}, {
				text: "CSS3",
				weight: 8
			}, {
				text: "JavaScript",
				weight: 14
			}, {
				text: "Flask",
				weight: 3
			}, {
				text: "Programming",
				weight: 15
			}, {
				text: "Python",
				weight: 10
			}, {
				text: "Java",
				weight: 9
			}, {
				text: "Andrea",
				weight: 6
			}, {
				text: "PHP",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"love Dark Mode.", "am a Full-Stack Web Developer.", "love everything about code.", "also teach programming to people.", "solve problems.",
				"enjoy learn new cool things.", "love to climb mountains.", "want to enjoy my life.",  " think that Dark Mode should be a must."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "lime", "background-color": "black"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
