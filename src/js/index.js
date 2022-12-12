import {topNav} from './modules/topNav'
import {middleNav} from './modules/middle-nav'
import {searchFilter} from './modules/searchFilter'
import {carousel_netflix} from './modules/carousel_netflix'
// import {swDetecter} from './modules/swDetecter';
(()=>{
	// swDetecter();
	topNav();
	middleNav();
	if (document.body.classList.contains('home')) {
		// functions here

	}else if (document.body.classList.contains('portfolio')) {
		// functions here
		searchFilter();
	}
})();
