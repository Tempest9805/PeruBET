export const middleNav = () => {
	let myFunction = ()=> {
		document.querySelector('.hamburger').addEventListener('click', function(e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.hamburger'), function(el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.middlenav__menu'), function(el) {
				el.classList.toggle('show-middlenav');
			});
			
		}); 
	};
	myFunction();
};
