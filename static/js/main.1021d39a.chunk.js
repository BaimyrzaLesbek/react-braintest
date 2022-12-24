(this["webpackJsonpreact-braintest"]=this["webpackJsonpreact-braintest"]||[]).push([[0],{19:function(e,t,a){e.exports=a(48)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(17),r=a.n(o);a(24),a(25);function l(){return s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{id:"white",className:"title"},"Trivia Quiz!"),s.a.createElement("h2",{id:"yellow",className:"subtitle"},"Test your knowledge of trivia! Select a category or answer questions from all possible categories."))))}var c=a(5),i=a(2),u=a(18);a(26);function m(e){return s.a.createElement("div",{className:"tile is-child is-success"},s.a.createElement("p",{className:"title is-4 my-4"},"Your Score: ",0===e.score?s.a.createElement("span",null):s.a.createElement("span",null,e.score," %")),s.a.createElement("button",{id:"playagain",className:"button",onClick:e.handlePlayAgain},"Play Again?"))}var d=a(7),p=a.n(d),f=function(){return p.a.get("https://opentdb.com/api.php?amount=15&type=multiple&encode=base64")},h=function(){return p.a.get("https://opentdb.com/api_category.php")},q=function(e){return p.a.get("https://opentdb.com/api.php?amount=15&type=multiple&category=".concat(e,"&encode=base64"))};a(44);function E(e){var t=0;return s.a.createElement("div",{className:"container"},e.apiResults.map((function(a){return s.a.createElement("div",{className:"my-4 question-div",key:a.question,name:a.question,onChange:e.handleRadioChange},s.a.createElement("p",{className:"my-2 left"},"Category: ",a.category),s.a.createElement("p",{className:"left question"},1+t++,". ",a.question),s.a.createElement("p",null,function(t){if(e.showAnswers)return s.a.createElement("span",{className:"has-text-weight-bold",style:e.correctAnswers[t-1]===e.userAnswers[t-1]?{color:"#0c7c59"}:{color:"#800000"}},"Correct Answer: ",e.correctAnswers[t-1])}(t)),s.a.createElement("form",{className:"form"},s.a.createElement("div",{className:"control my-3 radio-div"},s.a.createElement("label",null,s.a.createElement("input",{className:"mx-1",type:"radio",name:"question"+t,value:a.all_answers[0]}),a.all_answers[0]),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("input",{className:"mx-1",type:"radio",name:"question"+t,value:a.all_answers[1]}),a.all_answers[1]),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("input",{className:"mx-1",type:"radio",name:"question"+t,value:a.all_answers[2]}),a.all_answers[2]),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("input",{className:"mx-1",type:"radio",name:"question"+t,value:a.all_answers[3]}),a.all_answers[3]))))})),function(){if(e.apiResults.length>1)return s.a.createElement("button",{type:"submit",id:"done-button",className:"button mb-6 mt-3",onClick:e.handleQuizSubmit},"Done!")}())}var b=a(3);a(45);function w(e){return s.a.createElement("form",{className:"my-6"},s.a.createElement("div",{className:"is-grouped"},s.a.createElement("p",{className:"control"},s.a.createElement("button",{id:"allbtn",className:"button is-fullwidth",type:"submit",onClick:e.handleAllSubmit},"I Want Questions from All Categories!")),s.a.createElement("h2",{className:"my-4 control"},"OR..."),s.a.createElement("div",{className:"field is-grouped"},s.a.createElement("div",{className:"control is-expanded"},s.a.createElement("div",{className:"select is-fullwidth"},s.a.createElement("select",{onChange:e.handleChange,id:"select"},e.allCategories.map((function(e){return s.a.createElement("option",{id:"options",key:e.id,value:e.id},e.name)}))))),s.a.createElement("p",{className:"control"},s.a.createElement("button",{id:"searchbtn",className:"button is-info",type:"submit",onClick:e.handleCategorySubmit},"Choose Category")))))}function y(){var e=Object(n.useState)({apiResults:[],categoryId:"9",allCategories:[],correctAnswers:[],question1:"",question2:"",question3:"",question4:"",question5:"",question6:"",question7:"",question8:"",question9:"",question10:"",question11:"",question12:"",question13:"",question14:"",question15:"",userAnswers:[],score:0,showAnswers:!1,filterDisplay:!0,displayScore:!1}),t=Object(u.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){h().then((function(e){o(Object(i.a)(Object(i.a)({},a),{},{allCategories:e.data.trivia_categories}))}))}),[]);var r=function(e){var t=[];e.forEach((function(e){var a=[b.a.decode(e.incorrect_answers[0]),b.a.decode(e.incorrect_answers[1]),b.a.decode(e.incorrect_answers[2]),b.a.decode(e.correct_answer)];a.sort();var n={category:b.a.decode(e.category),question:b.a.decode(e.question),correct_answer:b.a.decode(e.correct_answer),all_answers:a};t.push(n)})),y(t)},l=function(e){e.preventDefault(),f().then((function(e){r(e.data.results)}))},d=function(e){e.preventDefault(),o(Object(i.a)(Object(i.a)({},a),{},{categoryId:e.target.value}))},p=function(e){e.preventDefault(),q(a.categoryId).then((function(e){r(e.data.results)}))},y=function(e){var t=[];e.forEach((function(e){t.push(e.correct_answer)})),o(Object(i.a)(Object(i.a)({},a),{},{apiResults:e,correctAnswers:t,filterDisplay:!1}))},v=function(e){var t=e.target,n=t.name,s=t.value;o(Object(i.a)(Object(i.a)({},a),{},Object(c.a)({},n,s)))},g=function(e){e.preventDefault(),N()},N=function(){if(!(a.question1&&a.question2&&a.question3&&a.question4&&a.question5&&a.question6&&a.question7&&a.question8&&a.question9&&a.question10&&a.question11&&a.question12&&a.question13&&a.question14&&a.question15))return alert("oops you forgot at least one question");A(),window.scrollTo({top:0,behavior:"smooth"})},A=function(){var e=[a.question1,a.question2,a.question3,a.question4,a.question5,a.question6,a.question7,a.question8,a.question9,a.question10,a.question11,a.question12,a.question13,a.question14,a.question15],t=0,n=0;e.forEach((function(e){e===a.correctAnswers[n]&&t++,n++})),console.log(t,"this is the rawscore"),C(t,e)},C=function(e,t){var n=Math.round(e/15*100);o(Object(i.a)(Object(i.a)({},a),{},{score:n,showAnswers:!0,userAnswers:t,displayScore:!0}))},_=function(){window.location.reload(!1)};return s.a.createElement("div",{className:"container"},function(){if(!0===a.displayScore)return s.a.createElement(m,{score:a.score,handlePlayAgain:_})}(),!0===a.filterDisplay?s.a.createElement(w,{handleAllSubmit:l,handleChange:d,allCategories:a.allCategories,handleCategorySubmit:p,filterDisplay:a.filterDisplay}):s.a.createElement(E,{apiResults:a.apiResults,handleRadioChange:v,handleQuizSubmit:g,showAnswers:a.showAnswers,correctAnswers:a.correctAnswers,userAnswers:a.userAnswers}))}a(46);var v=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement(l,null),s.a.createElement(y,null)))};a(47);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1021d39a.chunk.js.map