import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

import ImageCarousel from '../components/ImageCarousel.vue';


var app = new Vue( {
	el: '#app',
	data: Object.assign(model, {
		// title: sample.title,
		// address: sample.address,
  //   	about: sample.about,
    	headerImageStyle: {
    		 'background-image': `url(${model.images[0]})`
    	},
    	// amenities: sample.amenities,
    	// prices: sample.prices,
    	contracted: true,
    	modalOpen:false
	}),
	methods: {
		escapeKeyListener: function(evt){
			if(evt.keyCode == 27 && this.modalOpen) {
				this.modalOpen = false;
			}
		}
	},
	watch: {
		modalOpen: function() {
			var className = 'modal-open';
			if (this.modalOpen) {
				document.body.classList.add(className);
			} else {
				document.body.classList.remove(className);
			}
		}
	},
	created: function() {
		document.addEventListener('keyup', this.escapeKeyListener);
	},
	destroyed: function() {
		document.removeEventListener('keyup', this.escapeKeyListner);
	}
	
});





