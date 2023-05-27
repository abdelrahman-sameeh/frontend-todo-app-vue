document.addEventListener('click', (e) => {
   if(e.target.classList.contains('edit')){
      const popup = document.querySelector('.popup')
      popup.classList.add('toggle-display')
   }
   // if(e.target.classList.contains('popup')){
   //    const popup = document.querySelector('.popup')
   //    popup.classList.remove('toggle-display')
   // }
   if(e.target.classList.contains('cancel')){
      const popup = document.querySelector('.popup')
      popup.classList.remove('toggle-display')
   }
})