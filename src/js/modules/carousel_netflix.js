export const carousel_netflix = (elem, option) => {
        document.addEventListener('click', function (e) {
            if (!e.target.matches(elem+' .a-btn')) return ;
            else{
                if(!e.target.parentElement.classList.contains('active')){
                    
                    if(option==true){
                        console.log('yameteee')
                        var elementList = document.querySelectorAll(elem+' .a-container');
                        Array.prototype.forEach.call(elementList, function (e) {
                            e.classList.remove('active');
                        });
                    }
                    e.target.parentElement.classList.add('active');
                }else{
                    e.target.parentElement.classList.remove('active');
                }
            }
        });
};


// carousel_netflix('.accordion.v1', true);
// carousel_netflix('.accordion.v2', false);