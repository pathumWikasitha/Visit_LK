const start_btn=document.querySelector(".start_btn button");
const info_box=document.querySelector(".info_box");
const continue_btn=document.querySelector(".buttons .start");
const quit_btn=document.querySelector(".buttons .quit");
const quiz_box=document.querySelector(".quiz_box");
const next_btn=document.querySelector(".next_question");
const total_question=document.querySelector(".total_questions");
const result_box=document.querySelector(".results_box");
const time_count=document.querySelector(".timer .timer_sec");


 //If Start btn clicked
start_btn.onclick=()=>{
   info_box.classList.add("activeInfo")
}

 //If Quit btn clicked
quit_btn.onclick=()=>{
    info_box.classList.remove("activeInfo")
 }

 let question_count=0;
 let timeValue=15;

 let counter;
 const total_questions=document.querySelector(".total_questions");

 //If continue btn clicked
 continue_btn.onclick=()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("active");
    let  total_questions_text=`<span><p>`+(question_count+1)+`</p><p>of</p><p>10</p><p>Qustions</p></span>`;
    total_question.innerHTML=total_questions_text;
    startTimer(timeValue);
    showQue(0);    
 }
 
 //If next btn clicked

next_btn.onclick=()=>{
   if (question_count<8){
      question_count++;
      clearInterval(counter);
      startTimer(timeValue);
      showQue(question_count);      
      let  total_questions_text=`<span><p>`+(question_count+1)+`</p><p>of</p><p>10</p><p>Qustions</p></span>`;
      total_question.innerHTML=total_questions_text;

   }else if(question_count<9){      
      question_count++;
      next_btn.innerHTML=`Finish`;
      showQue(question_count);
      let  total_questions_text=`<span><p>`+(question_count+1)+`</p><p>of</p><p>10</p><p>Qustions</p></span>`;
      total_question.innerHTML=total_questions_text;

   }else if(question_count<=10){
      quiz_box.classList.remove("active");
      result_box.classList.add("active");
   }

}

const options_list = document.querySelector(".option_list");

//Show questions

function showQue(index){
    const que_text = document.querySelector(".que_text");
    let que_tag=`<span>`+(index+1)+`. `+questions[index].question+`</span>`;
    let option_tag1 = '<div class="option">' +questions[index].options[0] +'<span> </span></div';
    let option_tag2 = '<div class="option">'+ questions[index].options[1] +'<span></span></div'
    let option_tag4 = '<div class="option">'+ questions[index].options[2] +'<span></span></div'
    let option_tag3 = '<div class="option">'+ questions[index].options[3] +'<span></span></div';
    options_list.classList.remove("click_dissable");
    que_text.innerHTML=que_tag;
    options_list.innerHTML=option_tag1;
    options_list.innerHTML+=option_tag2;
    options_list.innerHTML+=option_tag3;
    options_list.innerHTML+=option_tag4;

    const option=options_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
      option[i].setAttribute("onclick","optionSelected(this)");
      
    }
 }


let tick_icon= `<div class="icon tick"><i class="fas fa-check"></i></div>`;
let cross_icon=`<div class="icon cross"><i class="fas fa-times"></i></div>`;
let correct_count=0;

 function optionSelected(answer){
   clearInterval(counter);
   let correctAnswer=questions[question_count].answer;
   let allOptions =options_list.children.length;
   let userAnswer=answer.textContent;
   time_count.textContent="OFF";
   options_list.classList.add("click_dissable");

   if(correctAnswer==userAnswer){
      answer.classList.add("Correct");      
      answer.insertAdjacentHTML("beforeend", tick_icon);
      correct_count+=1;
      totalScore(correct_count);

   }else{
      answer.classList.add("Wrong");
      answer.insertAdjacentHTML("beforeend", cross_icon);

      for (let i = 0; i < allOptions; i++) {
         if(options_list.children[i].textContent == correctAnswer){
            options_list.children[i].setAttribute("class","option Correct");
         }
         
      }
   }


 }

function startTimer(time){
   counter =setInterval(timer,1000);
   function timer() {
      time_count.textContent=time;
      time--;
      if (time<9) {
         time_count.textContent="0"+time_count.textContent;
         
      }
      if(time<0){
         clearInterval(counter);
         time_count.textContent="00";
         next_btn.click();
      }
   }
}



//if finished clicked
function totalScore(score){
   const marks_text=document.querySelector(".score_text");
   if (score==10){
      let marks='<span><p>Congratulations! , You got only </p><p>'+ score +'</p><p> out of</p><p>10</p></span>';
      marks_text.innerHTML=marks;
   }
   else if  (score>5){
      let marks='<span><p>Good, You got only </p><p>'+ score +'</p><p> out of</p><p>10</p></span>';
      marks_text.innerHTML=marks;
   }else {
      let marks='<span><p>Sorry , You got only </p><p>'+ score +'</p><p> out of</p><p>10</p></span>';
      marks_text.innerHTML=marks;
   }
   
}


 

//If quit btn clicked

const quit=document.querySelector(".results_box_button .quit_button");

quit.onclick=()=>{
   window.location.reload();
}

const replay=document.querySelector(".results_box_button .restart");

//If replay btn clicked
replay.onclick=()=>{
   result_box.classList.remove("active");
   quiz_box.classList.add("active");
   question_count=0;
   correct_count=0;
   showQue(0);
   next_btn.innerHTML=`Next`;
   let  total_questions_text=`<span><p>`+(question_count+1)+`</p><p>of</p><p>10</p><p>Qustions</p></span>`;
   total_question.innerHTML=total_questions_text;
}





