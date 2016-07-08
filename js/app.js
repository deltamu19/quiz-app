var questions = [
{name:'What is Monica\'s biggest pet peeve?', answers:['Animals dressed as humans', 'Noisy eaters', 'People with bad table manners'], correct:0, explanation:'In The One with The Embryos, Ross created a bet between Monica and Rachel against Joey and Chandler and asked this question where Joey answered correctly.'},
{name:'Before the gang become permanent residents at the coffee house, what type of establishment did they hung out at?', answers:['A book store', 'Another coffee house', 'A bar'], correct:2, explanation:'In The One with The Flashback, we see the Friends hanging out in a bar, which later became the coffee house Central Perk.'},
{name:'What was the name of the "poor bastard" who was Chandler\'s roommate before Joey?', answers:['Kip','Kevin','Kit'], correct:0, explanation:'In The One With The Kip\'s, we learn about Chandler\'s ex-roommate Kip, who was "cut out" from the gang after he and Monica dated and broke up.'},
{name:'In Season 6 Phoebe mentioned a roommate that none of the other Friends had ever heard of. What\'s her name?', answers:['Debra','Denise','Dani'], correct:1, explanation:'When Rachel freaked out about not having a place to live, Phoebe mentioned that her roommate Denise was going to be gone for weeks. The rest of the gang were shocked, no one had ever heard Phoebe talk about a roommate before.'},
{name:'Who owned the ski cabin that the gang tried to take a trip to after Ross and Rachel broke up?', answers:['Phoebe\'s massage client','Rachel\'s sister','Chandler\'s mom'], correct:1, explanation:'When none of the Friends was able to go to a Victoria\'s Secret fashion show with Rachel because they were hanging out with Ross instead, Rachel countered by inviting them to a weekend at her sister\'s ski cabin -- without Ross.'},
{name:'Why was the beach house in Season 2 filled with sand?', answers:['The owner loved sand','It was a giant litterbox for cats','There was flood damage'], correct:2, explanation:'The gang walked into the beach house and were shocked to find the living room filled with sand. This was when Phoebe remembered to mention that the owner said "there might be flood damage."'},
{name:'Who was Rachel\'s high school prom date that stood her up?', answers:['Chip','Will','Ross'], correct:0, explanation:'In The One with The Prom Video, the gang watched a video from Monica and Rachel\'s prom night where we found out Chip, Rachel\'s prom date stood her up.'},
{name:'What was Joey\'s fake wife\'s name when he was working for Chandler?', answers:['Jenna','Kathy','Karen'], correct:2, explanation:'In the One with The Chicken Pox, Chandler hired Joey where Joey created a fake persona, Joseph, with wife, Karen and kids, Brittany and Ashley.'},
{name:'In The One Where Underdog Gets Away, what fake disease did Joey\'s family think he had?', answers:['Crabs','Syphilis','Venereal Disease'], correct:2, explanation:'Joey turned to modeling for money, with unintended consequences when his PSA campaign showed him as the spokesmodel for VD.'},
{name:'What rumor did Will and Ross spread about Rachel in high school?', answers:['She was actually a man','She had both male and female reproductive parts','She made out with the school librarian'], correct:1, explanation:'In The One with The Rumor, we found out that Will and Ross formed an "I Hate Rachel Green" club in high school. On their mission to get back at Rachel, they spread a rumor that Rachel is "half and half."'}
];

var numCorrect, currentQuestion, quizCount;

$(document).ready(function() {
	$('.start').click(function(){
		startQuiz();
	})

	$('.submit').click(function() {
		showResult();
	})

	$('.nextQuestion').click(function() {
		if (quizCount == questions.length) {
			finalScore();
		}
		else {
			nextQuestion();
		}
	})

});

var startQuiz = function() {
	numCorrect = 0;
	currentQuestion = 0;
	quizCount = 1
	var question = questions[currentQuestion];
	$('.main').css('background-image', 'url(images/friends-centralperk.jpg)');
	$('.intro').hide();
	$('.outro').hide();
	$('.quizCount').show();
	$('.questions').show();
	showQuestion(question);
	$(".options input[type='radio']").attr('checked', false);
}


var nextQuestion = function() {
	quizCount++;
	currentQuestion++;
	var question = questions[currentQuestion];
	$('.questions').show();
	$('.answers').hide();
	$('.outro').hide();
	showQuestion(question);
	$(".options input[type='radio']").attr('checked', false);
}

var showQuestion = function(question) {
	$('.count').text(quizCount);
	$('.questionName').text(question.name);
	$('.answerOptions0').text(question.answers[0]);
	$('.answerOptions1').text(question.answers[1]);
	$('.answerOptions2').text(question.answers[2]);
}


var showResult = function() {
	var question = questions[currentQuestion];
	var selected = $(".options input[type='radio']:checked");
	if (selected.length == 0) {
		alert('Please choose an option.');
		return
	}
	if ($(selected[0]).val() == question.correct) {
		$('.result').text('CORRECT!')
		numCorrect++;
	}
	else {
		$('.result').text('WRONG!')
	}
	$('.questions').hide();
	$('.answers').show();
	$('.explanation').text(question.explanation);
}

var finalScore = function() {
	$('.quizCount').hide();
	$('.answers').hide();
	$('.end').show();
	$('.outro').show();
	$('.total').text(numCorrect);
	$('.main').css('background-image', 'url(images/friends-back.jpg)');

}