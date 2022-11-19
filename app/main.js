const category = document.querySelector('#categories');

const mentor = document.querySelector('#frontend-mentor');
const pageMentor = document.querySelector('#challenges-frontend-mentor');

	// oculta as categorias e mostra os desafios do frontEnd mentor.
mentor.addEventListener( 'click', () => {
	category.classList.add('hide');
	pageMentor.classList.remove('hide');
} );

const btnBack = document.querySelector('#btn-back');
	
	// faz o inverso do código acima.
btnBack.addEventListener( 'click', () => {
	category.classList.remove('hide');
	pageMentor.classList.add('hide');
} );
