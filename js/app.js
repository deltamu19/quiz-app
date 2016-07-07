var questions = [
{name:'What is Monica\'s biggest pet peeve?', answers:['Animals dressed as humans', 'Noisy eaters', 'People with bad table manners'], correct:0, explanation:'In The One with The Embryos, Ross created a bet between Monica and Rachel against Joey and Chandler and asked this qustion where Joey answered correctly.'},
{name:'Before the gang become permanent residents at the coffee house, what type of establishment did they hang out at?', answers:['A book store', 'Another coffee house', 'A bar'], correct:2, explanation:'In The One with The Flashback we see the Friends hanging out in a bar, which will later become the coffee house Central Perk.'},
{name:'What was the name of the "poor bastard" who was Chandler\'s roommate before Joey?', answers:['Kip','Kevin','Kit'], correct:0, explanation:'In The One With The Kip\'s we learn about Chandler\'s ex-roommate Kip, who was "cut out" from the gang after he and Monica dated and broke up.'},
{name:'In The One With The Kip\'s we learn about Chandler\'s ex-roommate Kip, who was "cut out" from the gang after he and Monica dated and broke up.', answers:['Debra','Denise','Dani'], correct:1, explanation:'When Rachel freaks out about not having a place to live, Phoebe mentions that her roommate Denise is going to be gone for weeks. The rest of the gang is shocked, no one had ever heard Phoebe talk about a roommate before.'},
{name:'Who owns the ski cabin that the gang tries to take a trip to after Ross and Rachel break up?', answers:['Phoebe\'s massage client','Rachel\'s sister','Chandler\'s mom'], correct:1, explanation:'When none of the Friends can go to a Victoria\'s Secret fashion show with Rachel because they\'re hanging out with Ross instead, Rachel counters by inviting them to a weekend at her sister\'s ski cabin -- without Ross.'},
{name:'Why is the beach house in Season 2 filled with sand?', answers:['The owner loves sand','It\'s a giant litterbox for cats','There was flood damage'], correct:2, explanation:'The gang walks into the beach house and are shocked to find the living room filled with sand. This is when Phoebe remembers to mention that the owner said "there might be flood damage."'},
{name:'Who was Rachel\'s high school prom date that stood her up?', answers:['Chip','Will','Ross'], correct:0, explanation:'In The One with The Prom Video, the gang watches a video from Monica and Rachel\'s prom night where we find out Chip, Rachel\'s prom date stood her up.'},
{name:'What was Joey\'s fake wife names when he was working for Chandler?', answers:['Jenna','Kathy','Karen'], correct:2, explanation:'In the One with The Chicken Pox, Chandler hired Joey where Joey created a fake persona, Joseph, with wife, Karen and kids, Brittany and Ashley.'},
{name:'In The One Where Underdog Gets Away, what faux disease does Joey\'s family think he has?', answers:['Crabs','Syphilis','Venereal Disease'], correct:2, explanation:'Joey turns to modeling for money, with unintended consequences when his PSA campaign shows him as the spokesmodel for VD.'},
{name:'What rumor did Will and Ross spread about Rachel in high school?', answers:['She was actually a man','She had both male and female reproductive parts','She made out with the school librarian'], correct:1, explanation:'In The One with The Rumor, we find out that Will and Ross formed an "I Hate Rachel Green" club in high school. On their mission to get back at Rachel they spread a rumor that Rachel is "half and half."'}
];

$(document).ready(function() {
	$('.start').click(function(){
		startQuiz();
	})

	$('.submit').click(function() {
	showResult();
})
});

var startQuiz = function() {
	var question = questions[0];
	$('#quizCount').show();
	$('.questions').show();
	$('#questionName').text(question.name);
	$('#answerOptions0').text(question.answers[0]);
	$('#answerOptions1').text(question.answers[1]);
	$('#answerOptions2').text(question.answers[2]);
}

var nextQuestion = function() {

}

var showResult = function() {
	var question = questions[0];
	$('.answers').show();
	var selected = $(".options input[type='radio']:checked");
	if ($(selected[0]).val() == question.correct) {
		$('.result').text('CORRECT!')
	}
	else {
		$('.result').text('WRONG!')
	}

	$('.explanation').text(question.explanation);
}

var finalScore = function() {

}

