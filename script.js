let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let cta = document.querySelector('.buttons');

noButton.addEventListener('mouseenter', ()=> {
          const yesIndex = Array.from(cta.children).
          indexOf(yesButton);
          const noIndex = Array.from(cta.children).
          indexOf(noButton);

          if (yesIndex < noIndex) {
                    cta.insertBefore(noButton, yesButton);
          } else {
                    cta.insertBefore(yesButton, noButton);
          }
})

