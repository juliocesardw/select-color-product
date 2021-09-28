
const itemProduct=document.querySelectorAll('.grid-item');

itemProduct.forEach(item => {
    
    const imgs=item.querySelectorAll('.data-images img');
    const colors=item.querySelectorAll('.data-colors a');

    colors.forEach(color => {
        color.addEventListener('click',(e)=>{
            e.preventDefault();

            //removemos todo los check
            colors.forEach(col => {
                col.innerHTML="";
            });

            //Traemos el id de cada color  al hacer click
            const idColor=color.getAttribute('data-id');
            
            //Creamos una etiqueta <i></i>
            const i = document.createElement('i');
            i.setAttribute('class','fas fa-check')


            //recorremos todas las imagenes y obtenemos su id 
            imgs.forEach(img => {
                img.classList.remove('img-active');
                const idImage=img.getAttribute('data-id');

                //Mostramos la imagen cuyo id sea igual a id obtenido de los colores al hacer click
                if(idColor==idImage){
                    
                    img.classList.add('img-active');
                    color.appendChild(i);
                }
                
            });
        })
    });
    
});