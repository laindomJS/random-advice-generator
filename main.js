window.addEventListener('click', () => {

    const advicee = document.querySelector('.advice');
    const p = document.querySelector('.quote');
    const dice = document.querySelector('.dice--img');
    const url = 'https://api.adviceslip.com/advice';

    
    dice.addEventListener('click', () => {

        
        fetch(url)
            .then(response => { return response.json() })
            .then(data => {

                const adviceId = data.slip.id;
                advicee.innerHTML = `ADVICE ${adviceId}`;

                p.innerHTML = data.slip.advice;

            })



    });

    
});