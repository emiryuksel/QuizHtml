const correctAnswers=['8','10','3','25'];
const form=document.querySelector('.question-form');
const result=document.querySelector('.result');
const sucMes=document.querySelector('#successMessage');
const yetmisbesMes=document.querySelector('#yetmisbesMessage');
const elliMes=document.querySelector('#elliMessage');
const yirmibesMes=document.querySelector('#yirmibesMessage');
const zortMes=document.querySelector('#zortMessage');
const button=document.querySelector('.btn');

form.addEventListener('submit',e =>{
    e.preventDefault();

    let score=0;
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index])
        {
            score += 25;
        }

        
    });
    console.log(score);
    if(score == 100)
    {
        sucMes.classList.remove('d-none');
        button.setAttribute('disabled','');
    }    
    if(score == 75)
        {
            yetmisbesMes.classList.remove('d-none');
            button.setAttribute('disabled','');
        }    

        if(score == 50)
            {
                elliMes.classList.remove('d-none');
                button.setAttribute('disabled','');
            }    
    
    
            if(score == 25)
                {
                    yirmibesMes.classList.remove('d-none');
                    button.setAttribute('disabled','');
                }    

                if(score == 0)
                    {
                        zortMes.classList.remove('d-none');
                        button.setAttribute('disabled','');
                    }    

    result.classList.remove('d-none');
    result.querySelector('#percentage').textContent = `${score}%`;
})