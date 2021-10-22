(function($) {
	$.fn.btnStatus = function(options) {
		let defaults = {
			text: 'Aceptar',
			type: 'processing', //processing, loading
            processingMessage: 'Procesando...',
            btnLoadingMessage: 'Cargando...',
            animateInClass: 'animate__animated animate__fadeInRight',
            animateOutClass: 'animate__animated animate__fadeOutDown',
            iconClass: 'fas fa-check'
        };
        
        const settings = $.extend({}, defaults, options);
        const contentMap = new Map();
        //let inStatusMap = [];
        const initStatus = function (btnId, div) {
			console.log('--- initStatus', btnId);
			elementClassAdd(div, settings.animateOutClass);
			const stext = (settings.type == 'processing') ? settings.processingMessage : settings.btnLoadingMessage;
			const html = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ' + stext;
			setTimeout(function() {
				console.log('--- initStatus setTimeout', div);
				elementClassRemove(div, settings.animateOutClass);
				elementClear(div);
				$('#'+div).append(html);
				elementClassAdd(div, settings.animateInClass);
				btnDisabled(btnId);
				//inStatusMap.push(btnId);
				console.log('--- inStatusMap setTimeout', inStatusMap);
			}, 200);
		};
		//inStatusMap.splice(indexElement, 1);
		this.end = function() {
			console.log('inStatusMap', inStatusMap);
            //inStatusMap.splice(indexElement, 1);
            return this;
        };
        if (this.length > 1) {
			let btnCount = 0;
            this.each(function() {
				$(this).btnStatus(options);
				$(this).html('');
				
				let btnId = $(this).prop('id');
				if(btnId == '') {
					btnCount ++;
					btnId = 'btnst' + btnCount;
					$(this).prop('id', btnId);
				}
				
				const divId = 'btn-st-' + btnId;
				const html = '<div id="'+divId+'"><i class="'+settings.iconClass+'"></i> <span>'+settings.text+'</span></div>';
				$(this).append(html);
								
				console.log('--- btnId', btnId);
				contentMap.set(divId, html);
				console.log('--- html', contentMap.get(divId));
				
				$(this).click(function () {
					console.log('--- click', btnId);
					initStatus(btnId, divId);
				});
			});
            return this;
        }
	}
})(jQuery);