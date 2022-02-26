// LISTENER OF THE LOAD EVENT
window.addEventListener('click', () => {

    // CONSTANTS 
    const advicee = document.querySelector('.advice');
    const p = document.querySelector('.quote');
    const dice = document.querySelector('.dice--img');
    const loader = document.querySelector('.loader');
    const url = 'https://api.adviceslip.com/advice';

    // FUNCTION OF THE FETCH AND THE MANAGE OF THE DATA
    const apiFetch = ()=> { 
        
        fetch(url, {'cache': "no-cache"}) // THIS IS USEFULL ?¿
            .then(response => { return response.json() })
            .then(data => {

                const adviceId = data.slip.id;
                advicee.innerHTML = `ADVICE ${adviceId}`;

                p.innerHTML = data.slip.advice;

            }).catch(e => {
                alert(e)
            });  
        }

    // FUNCTION OF THE LOADING ELEMENT
    const loading = () => {
        loader.classList.add('loading');
    }


    // LISTENER OF THE CLICK EVENT
    dice.addEventListener('click', () => {

        setTimeout(() => {
            loader.classList.remove('loading');
            apiFetch();
        }, 2500)
        loading();
        
    });

    
});