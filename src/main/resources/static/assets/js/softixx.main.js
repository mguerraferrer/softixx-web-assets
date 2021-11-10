/**
 * SoftIXX MAIN JS <br>
 * Require Bootstrap, FontAwesome
 * @version 1.0.0
 * @author Maikel Guerra Ferrer - mguerraferrer@gmail.com
 * 
 */

const DEFAULT_BOOTSTRAP_VERSION = 5;
const DEFAULT_LOCALE = 'es_MX';
const DEFAULT_LOCALE_OPTION = 'es';
const DEFAULT_PAGINATE_SIZE = 10;
const DEFAULT_FORM_TYPES = ['text', 'email', 'number', 'hidden', 'select-one', 'select-multiple', 'textarea', 'checkbox', 'radio', 'password', 'file'];
const DEFAULT_TOAST_POSITION_TOP_RIGHT = "topRight";
const DEFAULT_TOAST_POSITION_BOTTOM_RIGHT = "bottomRight";
const DEFAULT_TOAST_POSITION_TOP_LEFT = "topLeft";
const DEFAULT_TOAST_POSITION_BOTTOM_LEFT = "bottomLeft";
const DEFAULT_TOAST_POSITION_TOP_CENTER = "topCenter";
const DEFAULT_TOAST_POSITION_BOTTOM_CENTER = "bottomCenter";

const DEFAULT_LOADING_MESSAGE = 'Cargando información...';
const DEFAULT_PROCESSING_MESSAGE = 'Procesando solicitud...';
const DEFAULT_SORTING_MESSAGE = 'Ordenando registros...';
const DEFAULT_PAGING_MESSAGE = 'Paginando registros...';
const DEFAULT_REQUIRED_MESSAGE = 'El valor de este campo es requerido';
const DEFAULT_CONFIRMATION_TEXT = '¿Está seguro que desea eliminar el elemento seleccionado?';
const DEFAULT_EMPTY_PANEL_MESSAGE = 'No existe información a mostrar';
const DEFAULT_EMPTY_SEARCH_PANEL_MESSAGE = '';
const DEFAULT_ERROR_MESSAGE = 'Ha ocurrido un error interno en el servidor. La solicitud ha sido cancelada';
const DEFAULT_ERROR_400 = 'Solicitud incorrecta';
const DEFAULT_ERROR_400_DESCRIPTION = 'La solicitud enviada es incorrecta o no existe';
const DEFAULT_ERROR_INFO = 'Información del error';
const DEFAULT_PAGE_HEAD_SELECTOR = 'page-head';
const DEFAULT_PAGE_LOADER_SELECTOR = 'page-loader';
const DEFAULT_PAGE_CONTENT_SELECTOR = 'page-content';
const DEFAULT_PAGE_VALID_CONTENT_SELECTOR = 'page-valid-content';
const DEFAULT_PAGE_MESSAGE_SELECTOR = 'page-message';
const DEFAULT_PAGE_MESSAGE_FRAGMENT = 'page-message-fragment';
const DEFAULT_PAGE_ALERT_SELECTOR = 'page-alert';
const DEFAULT_INFO_CLASS = 'alert alert-info';
const DEFAULT_INFO_CLASS_DISMISSIBLE = 'alert alert-info alert-dismissible';
const DEFAULT_SUCCESS_CLASS = 'alert alert-mint';
const DEFAULT_SUCCESS_CLASS_DISMISSIBLE = 'alert alert-success alert-dismissible';
const DEFAULT_WARNING_CLASS = 'alert alert-warning';
const DEFAULT_WARNING_CLASS_DISMISSIBLE = 'alert alert-warning alert-dismissible';
const DEFAULT_DANGER_CLASS = 'alert alert-danger';
const DEFAULT_DANGER_CLASS_DISMISSIBLE = 'alert alert-danger alert-dismissible';
const DEFAULT_ALERT_INFO_CLASS = 'alert-info';
const DEFAULT_ALERT_INFO_ICON_CLASS = 'fad fa-info-circle';
const DEFAULT_ALERT_SUCCESS_CLASS = 'alert-mint';
const DEFAULT_ALERT_SUCCESS_ICON_CLASS = 'fas fa-check-circle';
const DEFAULT_ALERT_WARNING_CLASS = 'alert-warning';
const DEFAULT_ALERT_WARNING_ICON_CLASS = 'fas fa-exclamation-triangle';
const DEFAULT_ALERT_DANGER_CLASS = 'alert-danger';
const DEFAULT_ALERT_DANGER_ICON_CLASS = 'fas fa-ban';
const DEFAULT_PANEL_SEARCH_EMPTY_SELECTOR = 'panel-search-result-empty-message';

/**
 * Default page size <br>
 * li-pag-size-* represents the id of the element
 */
const DEFAULT_LI_PAGE_SIZE_MAP = new Map();
DEFAULT_LI_PAGE_SIZE_MAP.set(10, 'li-pag-size-10');
DEFAULT_LI_PAGE_SIZE_MAP.set(20, 'li-pag-size-20'); 
DEFAULT_LI_PAGE_SIZE_MAP.set(30, 'li-pag-size-30'); 
DEFAULT_LI_PAGE_SIZE_MAP.set(40, 'li-pag-size-40'); 
DEFAULT_LI_PAGE_SIZE_MAP.set(50, 'li-pag-size-50');

/**
 * Default options
 */
const jsOptions = {
    locale: DEFAULT_LOCALE,
    localeOption: DEFAULT_LOCALE_OPTION,
    bootstrapVersion: DEFAULT_BOOTSTRAP_VERSION,
    paginateSize: DEFAULT_PAGINATE_SIZE,
    loadingMessage: DEFAULT_LOADING_MESSAGE,
    processingMessage: DEFAULT_PROCESSING_MESSAGE,
    sortingMessage: DEFAULT_SORTING_MESSAGE,
    pagingMessage: DEFAULT_PAGING_MESSAGE,
    requiredMessage: DEFAULT_REQUIRED_MESSAGE,
    confirmationText: DEFAULT_CONFIRMATION_TEXT,
    emptyPanelMessage: '',
    emptySearchPanelMessage: '',
    errorMessage: DEFAULT_ERROR_MESSAGE,
    error400: DEFAULT_ERROR_400,
    error400Description: DEFAULT_ERROR_400_DESCRIPTION,
    errorInfo: DEFAULT_ERROR_INFO,
	pageMessageConditional: true,
    pageHeadSelector: DEFAULT_PAGE_HEAD_SELECTOR,
    pageLoaderSelector: DEFAULT_PAGE_LOADER_SELECTOR,
    pageContentSelector: DEFAULT_PAGE_CONTENT_SELECTOR,
    pageValidContentSelector: DEFAULT_PAGE_VALID_CONTENT_SELECTOR,
    pageMessageSelector: DEFAULT_PAGE_MESSAGE_SELECTOR,
    pageMessageFragment: DEFAULT_PAGE_MESSAGE_FRAGMENT,
    pageAlertSelector: DEFAULT_PAGE_ALERT_SELECTOR,
	infoClass: DEFAULT_INFO_CLASS,
    infoClassDismissible: DEFAULT_INFO_CLASS_DISMISSIBLE,
    successClass: DEFAULT_SUCCESS_CLASS,
    successClassDismissible: DEFAULT_SUCCESS_CLASS_DISMISSIBLE,
    warningClass: DEFAULT_WARNING_CLASS,
    warningClassDismissible: DEFAULT_WARNING_CLASS_DISMISSIBLE,
    dangerClass: DEFAULT_DANGER_CLASS,
    dangerClassDismissible: DEFAULT_DANGER_CLASS_DISMISSIBLE,
    alertInfoClass: DEFAULT_ALERT_INFO_CLASS,
    alertInfoIconClass: DEFAULT_ALERT_INFO_ICON_CLASS,
    alertSuccessClass: DEFAULT_ALERT_SUCCESS_CLASS,
    alertSuccessIconClass: DEFAULT_ALERT_SUCCESS_ICON_CLASS,
    alertWarningClass: DEFAULT_ALERT_WARNING_CLASS,
    alertWarningIconClass: DEFAULT_ALERT_WARNING_ICON_CLASS,
    alertDangerClass: DEFAULT_ALERT_DANGER_CLASS,
    alertDangerIconClass: DEFAULT_ALERT_DANGER_ICON_CLASS,
    serverContext: null,
	sessionExpiredUrl: null,
	sessionDestroyUrl: null,	
    showLog: false,
    paymentUrl: null,
    validatePaymentForm: false,
    setLocale(locale) {
        this.locale = locale;
        if(this.locale.startsWith('es')) {
            this.localeOption = 'es';
        } else if(this.locale.startsWith('en')) {
            this.localeOption = 'en';
        }
    },
    setBootstrapVersion(version) {
        this.bootstrapVersion = version;
    },
    setPaginateSize(paginateSize) {
        this.paginateSize = paginateSize;
    },
    setLoadingMessage(loadingMessage) {
        this.loadingMessage = loadingMessage;
    },
    setProcessingMessage(processingMessage) {
        this.processingMessage = processingMessage;
    },
    setSortingMessage(sortingMessage) {
        this.sortingMessage = sortingMessage;
    },
    setPagingMessage(pagingMessage) {
        this.pagingMessage = pagingMessage;
    },
	setRequiredMessage(requiredMessage) {
		this.requiredMessage = requiredMessage;
	},
	setConfirmationText(confirmationText) {
		this.confirmationText = confirmationText;
	},
	setErrorMessage(errorMessage) {
		this.errorMessage = errorMessage;
    },
    setError400(error400) {
        this.error400 = error400;
    },
    setError400Description(error400Description) {
        this.error400Description = error400Description;
    },
    setErrorInfo(errorInfo) {
        this.errorInfo = errorInfo;
    },
    setPageMsgConditional(pageMessageConditional) {
        this.pageMessageConditional = pageMessageConditional;
    },
    setPageHeadSelector(pageHeadSelector) {
        this.pageHeadSelector = pageHeadSelector;
    },
    setPageLoaderSelector(pageLoaderSelector) {
        this.pageLoaderSelector = pageLoaderSelector;
    },
    setPageContentSelector(pageContentSelector) {
        this.pageContentSelector = pageContentSelector;
    },
    setPageValidContentSelector(pageValidContentSelector) {
        this.pageValidContentSelector = pageValidContentSelector;
    },
    setPageMessageSelector(pageMessageSelector) {
        this.pageMessageSelector = pageMessageSelector;
    },
    setPageAlertSelector(pageAlertSelector) {
        this.pageAlertSelector = pageAlertSelector;
    },
	setInfoClass(infoClass) {
		this.infoClass = infoClass;
	},
    setInfoClassDismissible(infoClassDismissible) {
        this.infoClassDismissible = infoClassDismissible;
    },
    setSuccessClass(successClass) {
		this.successClass = successClass;
	},
    setSuccessClassDismissible(successClassDismissible) {
        this.successClassDismissible = successClassDismissible;
    },
    setWarningClass(warningClass) {
		this.warningClass = warningClass;
	},
    setWarningClassDismissible(warningClassDismissible) {
        this.warningClassDismissible = warningClassDismissible;
    },
    setDangerClass(dangerClass) {
		this.dangerClass = dangerClass;
	},
    setDangerClassDismissible(dangerClassDismissible) {
        this.dangerClassDismissible = dangerClassDismissible;
    },
    setServerContext(serverContext) {
        this.serverContext = serverContext;
    },
    setAlertInfoClass(alertInfoClass) {
        this.alertInfoClass = alertInfoClass;
    },
    setAlertInfoIconClass(alertInfoIconClass) {
        this.alertInfoIconClass = alertInfoIconClass;
    },
    setAlertSuccessClass(alertSuccessClass) {
        this.alertSuccessClass = alertSuccessClass;
    },
    setAlertSuccessIconClass(alertSuccessIconClass) {
        this.alertSuccessIconClass = alertSuccessIconClass;
    },
    setAlertWarningClass(alertWarningClass) {
        this.alertWarningClass = alertWarningClass;
    },
    setAlertWarningIconClass(alertWarningIconClass) {
        this.alertWarningIconClass = alertWarningIconClass;
    },
    setAlertDangerClass(alertDangerClass) {
        this.alertDangerClass = alertDangerClass;
    },
    setAlertDangerIconClass(alertDangerIconClass) {
        this.alertDangerIconClass = alertDangerIconClass;
    },
    setSessionExpiredUrl(sessionExpiredUrl) {
		this.sessionExpiredUrl = sessionExpiredUrl;
	},
	setSessionDestroyUrl(sessionDestroyUrl) {
		this.sessionDestroyUrl = sessionDestroyUrl;
	},
	setShowLog(showLog) {
		this.showLog = showLog;
    },
    setPaymentUrl(paymentUrl) {
        this.paymentUrl = paymentUrl;
    },
    setValidatePaymentForm(validatePaymentForm) {
        this.validatePaymentForm = validatePaymentForm;
    },
    setBtnLoadingMessage(btnLoadingMessage) {
		this.btnLoadingMessage = btnLoadingMessage;
	}
};

/*
 * Custom logger
 */
const log = ({logText, data}) => {
    if(jsOptions.showLog) {
        if(logText != null && data != null) {
            console.log(logText, data);
        } else {
            console.log(logText);
        }
    }
}

/**
 * Object $_AJAX_RESPONSE
 */
const HttpResponse = {
	...headers,
	status: null, //contains the status of the request ("success", "notmodified", "error", "timeout", or "parsererror")
	data: null,	  //contains the resulting data from the request
	error: null	  //contains the error of the request
}

/**
 * Object FormField
 */
const FormField = {
    field: '',
    message: null,
    messageContainer: null,
    container: null,
    div: '',
    label: '',
    small: '',
    divFile: '',
    file: '',
    inputGroup: '',
    scrollToElement: true,
    instance({field, message, container, messageContainer, scroll}) {
        this.field = field;
        this.message = message;
        this.container = container;
        this.messageContainer = messageContainer;        
        this.scrollToElement = scroll ?? false;
        this.fillData();
        return this;
    },
    fillData() {
        this.div = this.container ?? `div-${this.field}`;
        this.label = `label-${this.field}`;
        this.small = this.messageContainer ?? `small-${this.field}`;
        this.divFile = `div-file-${this.field}`;
        this.file = `file-${this.field}`;
        this.inputGroup = `input-group-${this.field}`;
    }
}

const $_NOTIFICATION_BASE = {
    field: '',
    message: null,
    searchResultMessage: null,
    cssStyleClass: '',
    description: '',
    dismiss: false,
    fadeOut: null,
    action: '',
    url: '',
    errorCause: '',
    modalPanelMessage: false,
    pageMessage: false,
    panelMessage: false,
    panelSelector: null,
    panelSelectorContainer: null,
    setField(field) {
        this.field = field;
    },
    setMessage(message) {
        this.message = message;
    },
    setSearchResultMessage(searchResultMessage) {
        this.searchResultMessage = searchResultMessage;
    },
    setCssStyleClass(cssStyleClass) {
        this.cssStyleClass = cssStyleClass;
    },
    setDescription(description) {
        this.description = description;
    },
    setDismiss(dismiss) {
        this.dismiss = dismiss;
    },
    setFadeOut(fadeOut) {
        this.fadeOut = fadeOut;
    },
    setAction(action) {
        this.action = action;
    },
    setUrl(url) {
        this.url = url;
    },
    setErrorCause(errorCause) {
        this.errorCause = errorCause;
    },
    setModalPanelMessage(modalPanelMessage) {
        this.modalPanelMessage = modalPanelMessage;
    },
    setPageMessage(pageMessage) {
        this.pageMessage = pageMessage;
    },
    setPanelMessage(panelMessage) {
        this.panelMessage = panelMessage;
    },
    setPanelSelector(panelSelector) {
        this.panelSelector = panelSelector;
        this.panelSelectorContainer = `${this.panelSelector}-container`;
    },
    setPanelSelectorContainer(panelSelectorContainer) {
        this.panelSelectorContainer = panelSelectorContainer;
    },
    setEmptyPanelSearchSelector(panelSelector) {
        this.panelSelector = `${$_PANEL_SEARCH_EMPTY_SELECTOR}-${panelSelector}`;
        this.panelSelectorContainer = `${this.panelSelector}-container`;
    },
    instancePageMessage(message) {
		this.setMessage(message);
		this.setPageMessage(true);
		return this;
	},
    instanceByNotification(notification) {
        this.setPanelSelector(notification.panelSelector);
        this.setField(notification.field);
        this.setMessage(notification.message);
        this.setDescription(notification.description);
        this.setCssStyleClass(notification.cssStyleClass);
        this.setAction(notification.action);
        this.setUrl(notification.url);
        this.setErrorCause(notification.error);
        this.setDismiss(notification.dismiss);
        this.setFadeOut(notification.fadeOut);
        this.setPageMessage(notification.pageMessage);
        this.setPanelMessage(notification.panelMessage);
        this.setModalPanelMessage(notification.modalPanelMessage);
        this.setSearchResultMessage(notification.searchResultMessage);
        return this;
    },
    instanceSearchPanelMessage(notification) {
        this.setPanelMessage(true);
        this.setPanelSelector(notification.panelSelector);
        this.setSearchResultMessage(notification.searchResultMessage);
        this.setCssStyleClass(notification.cssStyleClass);
        this.setDismiss(notification.dismiss);
        this.setFadeOut(notification.fadeOut);
        return this;
    }
};

let $_SCROLL_UP = {};
let $_OWL_CAROUSEL = {};
let $_TOUCH_SPIN = {};

$(document).ready(function () {
    $(document).trigger('doc.ready');
});

let csrfToken;
(function ($) {
    /* CSRF Spring Security */
    const token = $("meta[name='_csrf']").attr("content");
    const header = $("meta[name='_csrf_header']").attr("content");
    
    csrfToken = token;
    console.log('--- csrf_header', header);
    console.log('--- token', token);
    console.log('--- csrf_token', csrfToken);
    
    
    $(document).ajaxSend(function (event, xhr, options) {
		if(jsOptions.showLog) {
			console.log('--- ajaxSend event', event);
			console.log('--- ajaxSend options', options);	
		}
        xhr.setRequestHeader(header, token);
    });

    /**
     * scrollUp - Require ../plugins/scrollUp/jquery.scrollUp.min.js
     */
    if ($.fn.scrollUp) {
        $_SCROLL_UP = {
            scrollName: 'scrollUp',      // Element ID
            scrollDistance: 300,         // Distance from top/bottom before showing element (px)
            scrollFrom: 'top',           // 'top' or 'bottom'
            scrollSpeed: 300,            // Speed back to top (ms)
            easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
            animation: 'fade',           // Fade, slide, none
            animationSpeed: 200,         // Animation speed (ms)
            scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
            scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
            scrollText: 'Scroll to top', // Text for element, can contain HTML
            scrollTitle: false,          // Set a custom <a> title if required.
            scrollImg: false,            // Set true to use image
            activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647,          // Z-Index for the overlay
            setScrollName(scrollName) {
                this.scrollName = scrollName;
            },
            setScrollDistance(scrollDistance) {
                this.scrollDistance = scrollDistance;
            },
            setScrollFrom(scrollFrom) {
                this.scrollFrom = scrollFrom;
            },
            setScrollSpeed(scrollSpeed) {
                this.scrollSpeed = scrollSpeed;
            },
            setEasingType(easingType) {
                this.easingType = easingType;
            },
            setAnimation(animation) {
                this.animation = animation;
            },
            setScrollTrigger(scrollTrigger) {
                this.scrollTrigger = scrollTrigger;
            },
            setScrollTarget(scrollTarget) {
                this.scrollTarget = scrollTarget;
            },
            setScrollText(scrollText) {
                this.scrollText = scrollText;
            },
            setScrollTitle(scrollTitle) {
                this.scrollTitle = scrollTitle;
            },
            setScrollImg(scrollImg) {
                this.scrollImg = scrollImg;
            },
            setActiveOverlay(activeOverlay) {
                this.activeOverlay = activeOverlay;
            }
        };
    }

    /**
     * owl-carousel - Require ../plugins/owl-carousel/owl.carousel.min.js
     */
    if ($.fn.owlCarousel) {
        $_OWL_CAROUSEL = {
            items: 4,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
            dots: false,
            autoplay: false,
            smartSpeed: 1500,
            autoplayTimeout: 7000,
            autoplayHoverPause: true,
            responsive: {
                320: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            },
            setItems(items) {
                this.items = items;
            },
            setMargin(margin) {
                this.margin = margin;
            },
            setLoop(loop) {
                this.loop = loop;
            },
            setNav(nav) {
                this.nav = nav;
            },
            setNavText(left, right) {
                this.navText = [left, right];
            },
            setDots(dots) {
                this.dots = dots;
            },
            setAutoplay(autoplay) {
                this.autoplay = autoplay;
            },
            setSmartSpeed(smartSpeed) {
                this.smartSpeed = smartSpeed;
            },
            setAutoplayTimeout(autoplayTimeout) {
                this.autoplayTimeout = autoplayTimeout;
            },
            setAutoplayHoverPause(autoplayHoverPause) {
                this.autoplayHoverPause = autoplayHoverPause;
            },
            setResponsive(items320, items480, items768, items992) {
                this.responsive = {
                    320: {
                        items: items320
                    },
                    480: {
                        items: items480
                    },
                    768: {
                        items: items768
                    },
                    992: {
                        items: items992
                    }
                }
            }
        };
    }

    /**
     * TouchSpin - Require ../plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js
     */
    if ($.fn.TouchSpin) {
        $_TOUCH_SPIN = {
            initval: "",						//Applied when no explicit value is set on the input with the value attribute. Empty string means that the value remains empty on initialization.
            min: 0,								//Minimum value.
            max: 100, 							//Maximum value.
            step: 1, 							//Incremental/decremental step on up/down change.
            forcestepdivisibility: 'round', 	//How to force the value to be divisible by step value: 'none' | 'round' | 'floor' | 'ceil'
            decimals: 0, 						//Number of decimal points.
            stepinterval: 100, 					//Refresh rate of the spinner in milliseconds.
            stepintervaldelay: 500, 			//Time in milliseconds before the spinner starts to spin.
            verticalbuttons: false, 			//Enables the traditional up/down buttons.
            verticalupclass: 'fas fa-chevron-up', 		//Class of the up button with vertical buttons mode enabled.
            verticaldownclass: 'fas fa-chevron-down', 	//Class of the down button with vertical buttons mode enabled.
            prefix: "", 						//Text before the input.
            postfix: "", 						//Text after the input.
            prefix_extraclass: "", 				//Extra class(es) for prefix.
            postfix_extraclass: "", 			//Extra class(es) for postfix.
            booster: true, 						//If enabled, the the spinner is continually becoming faster as holding the button.
            boostat: 10, 						//Boost at every nth step.
            maxboostedstep: false, 				//Maximum step when boosted.
            mousewheel: true, 					//Enables the mouse wheel to change the value of the input.
            buttondown_class: 'btn btn-primary',//Class(es) of down button.
            buttonup_class: 'btn btn-primary', 	//Class(es) of up button.
            instance(min, max, step) {
                this.min = min;
                this.max = max;
                this.step = step;
				return this;
            },
            setDecimals(decimals) {
              this.decimals = decimals;
            },
            setVerticalButtons(verticalButtons) {
                this.verticalbuttons = verticalButtons;
            },
            setPrefix(prefix) {
                this.prefix = prefix;
            },
            setPostfix(postfix) {
                this.postfix = postfix;
            },
            setPrefixExtraClass(prefixExtraClass) {
                this.prefix_extraclass = prefixExtraClass;
            },
            setPostfixExtraClass(postfixExtraClass) {
                this.postfix_extraclass = postfixExtraClass;
            },
            setButtonDownClass(buttonDownClass) {
                this.buttondown_class = buttonDownClass;
            },
            setButtonUpClass(buttonUpClass) {
                this.buttonup_class = buttonUpClass;
            }
        };
    }

    /**
     * NiceSelect - Require ../plugins/jquery-niceselect/jquery.nice-select.min.js
     */
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }
})(jQuery);

const elementSelector = function(pElementId) {
	if(pElementId !== null && pElementId !== undefined) {
    	return pElementId.startsWith('.') ? pElementId : `#${pElementId}`;		
	}
	return false;
}

/**
 * Call this function after document is ready and after loading the initial content <br>
 * This function removes page-loader, makes the page-head and page-content visible <br>
 * and navigates to the page-head element
 */
function pageLoaded() {
    /* Removes page-loader */
    if (exists(jsOptions.pageLoaderSelector)) {
        remove(jsOptions.pageLoaderSelector);
    }

    /* Makes the page-head and page-content visible */
    hiddenClassRemove(jsOptions.pageHeadSelector);
    hiddenClassRemove(jsOptions.pageContentSelector);

    /* Navigates to the page-head element */
    scrollToElement(jsOptions.pageHeadSelector);
}

/* waitForFinalEvent */
const waitForFinalEvent = (function () {
    let timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

/**
 * Use this only when you do a $.ajax request.
 * For the $.post request, use $form.serialize()
 */
const serializeForm = function (form) {
	const formData = new FormData(form);
	return Array.from(formData.entries()).reduce((memo, [key, value]) => ({...memo, [key]: value,}), {});
};

/**
 * Process the ajax response and return an instance of $_AJAX_RESPONSE
 * @see $_AJAX_RESPONSE
 */
function asyncResponse(data, status, xhr) {
	let parseData;
	if(data != null) {
		try {
			parseData = JSON.parse(data);
		} catch (e) {
			parseData = data;
		}
	}
	const expires = xhr.getResponseHeader('Expires');
	const invalidSession = xhr.getResponseHeader('invalidSession');
	
	const response = {...$_AJAX_RESPONSE};
	response.data = parseData;
	response.status = status;
	response.expires = expires;
	response.invalidSession = invalidSession != null ? true : false;
	return response;
}

/**
 * Process the ajax response errors and return an instance of $_AJAX_RESPONSE
 * @see $_AJAX_RESPONSE
 */
function asyncResponseError(data) {
	const response = {...$_AJAX_RESPONSE};
	response.error = data;
	return response;
}

/**
 * Process a $.post request and return an async response or error
 * @see asyncResponse
 * @see asyncResponseError
 */
const asyncPost = async (url, formData) => {
	let responseData;
	await ($.post(url, formData, function(data, textStatus, xhr) {
        responseData = asyncResponse(data, textStatus, xhr);
    })).catch(err => {
        responseData = asyncResponseError(err);
    });
	return responseData;
};

const $CONTENT_TYPE_APPLICATION_JSON_UTF8 = 'application/json; charset=utf-8';

/**
 * Process a $.ajax request and return an async response or error
 * @see asyncResponse
 * @see asyncResponseError
 */
const asyncAjax = async (url, formData, contentType) => {
	let responseData;
	await ($.ajax({
        url: url,
        type: 'POST',
        data: formData,
        async: true,
        cache: false,
        contentType: contentType,
        dataType: "json",
        processData: false,
        traditional: true,
        success: function(data, textStatus, xhr) {
            responseData = asyncResponse(data, textStatus, xhr);
        }
    })).catch(err => {
        responseData = asyncResponseError(err);
    });
	return responseData;
};

/**
 * Receives an async response from the asyncPost($.post) method
 * @see asyncPost
 */
async function postRequest(url, formData) {
	return asyncPost(url, formData);
}

/**
 * Receives an async response from the asyncAjax($.ajax) method
 * @see asyncAjax
 */
async function ajaxPostRequest(url, formData, contentType = false) {
	return asyncAjax(url, formData, contentType);
}

/**
 * Evaluates the response headers to determine if the session expired 
 */
function evaluateHeader(xhr) {
    const header = xhr.getResponseHeader('Expires');
    const customHeader = xhr.getResponseHeader('invalidSession');

    if (header != null) {
        if (header == '1') {
            redirectGet(jsOptions.sessionExpiredUrl);
        } else {
            if (customHeader != null) {
                redirectGet(jsOptions.sessionExpiredUrl);
            }
        }
    } else if (customHeader) {
        redirectGet(jsOptions.sessionExpiredUrl);
    }
}

/**
 * Evaluates headers and data of the $_AJAX_RESPONSE object. <br>
 * If asyncResponse.expires = 1 or asyncResponse.invalidSession is true, it will redirect to the expired session URL, <br>
 * otherwise it will process the data response (asyncResponse.data.response)
 * @see $_AJAX_RESPONSE
 */
function evaluateAsyncResponse(asyncResp) {
    if (asyncResp != null) {
		// Evaluating header
		if (asyncResp.expires == '1' || asyncResp.invalidSession) {
			if(jsOptions.sessionExpiredUrl != null) {
				redirectGet(jsOptions.sessionExpiredUrl);
			} else {
				return false;
			}
        }
		// Evaluating data or error
		if(asyncResp.data != null && asyncResp.data.response != null) {
			return evaluateResponse(asyncResp.data.response);
		} else if(asyncResp.error != null) {
			failOnError(asyncResp.error);
		}
    }
    return false;
}

/**
 * Evaluates ajax response. <br>
 * If response.sessionAlive is true, it will process the response, <br>
 * otherwise it will redirect to the destroy session URL
 * @see $_AJAX_RESPONSE
 */
const evaluateResponse = (response) => {
    if (response != null) {
        if (response.sessionAlive) {
            if (response.success) {
                return successResponse(response);
            } else if (response.error) {
				return errorResponse(response);
            }
        } else {
            if(jsOptions.sessionDestroyUrl != null) {
            	redirectGet(jsOptions.sessionDestroyUrl);
			}
        }
    }
    return false;
}

/**
 * Success response
 */
const successResponse = (response) => {
	if (response.notification != null) {
        singleNotificationShow(response.notification);
    }

    const resConf = response.confirmation;
    if (resConf != null) {
        confirmationModal(resConf.confirmationText, resConf.showConfirmationRisk);
    }
    
    return true;
}

const ErrorResponse = {
	error: null,
	message: null,
	responseJSON: null,
	instance({error, message, responseJSON}) {
		this.error = error;
		this.message = message;
		this.responseJSON = responseJSON;
		return this;
	}
}

/**
 * Controlled errors on response
 */
const errorResponse = (response) => {
	if (response.notification != null) {
        singleNotificationShow(response.notification);
    }

    if (response.errors != null) {
        showErrors(response.errors);
    }
    
    if (response.errorMap != null) {
		let errorMap = new Map(Object.entries(response.errorMap));
		if(errorMap != null) {
			const errors = [];
	    	for(let [k, v] of errorMap) {
				const fieldObj = {field: k, defaultMessage: v};
				errors.push(fieldObj);
			}
			showErrors(errors);
		}
    }

    if (response.licenseExpired || response.hiddenPageContent) {
        empty('page-valid-content');
    }

    return false;
}

/**
 * Evaluates and show errors
 */
function failOnError(data) {
    const errors = evaluateResponseErrors(data);
    if (errors != null) {
        showErrors(errors);
    }
}

function xhrExceptions(data) {
    const exceptions = [];
    const errors = evaluateResponseErrors(data);
    try {

        $.each(errors, function (index, item) {
            if(jsOptions.showLog) {
                console.log('--- xhrExceptions index: ', index);
            }
            if (item.error != null) {
                exceptions.push(item.error);
            }
        });

    } catch (error) {
        console.error(error);
    }
    return exceptions;
}

const responseErrorLog = (data) => {
    if(jsOptions.showLog) {
        console.log('--- evaluateResponseErrors [data]', data);
        console.log('--- evaluateResponseErrors [data.responseJSON]', data.responseJSON);
        if(data.responseJSON != null) {
            console.log('--- evaluateResponseErrors [data.responseJSON.response]', data.responseJSON.response);
            console.log('--- evaluateResponseErrors [data.responseJSON.message]', data.responseJSON.message);
        }
        console.log('--- evaluateResponseErrors [data.responseText]', data.responseText);
    }
}

/**
 * Evaluates ajax response errors
 */
function evaluateResponseErrors(data) {
    responseErrorLog(data);
	
	let errors;
    try {
        errors = $.parseJSON(data.responseJSON.response);
    } catch (e1) {
        try {
			errors = $.parseJSON(data.responseJSON.message);
		} catch (e2) {
			try {
	            errors = $.parseJSON(data.responseText);
	        } catch (e3) {
	            try {
		            errors = data.responseText;
		        } catch (e4) {
					if(jsOptions.showLog) {
						console.error('--- evaluateResponseErrors: Unparseable error!');
					}
		        }
	        }	
		}
    }

    if (errors == null || errors == '') {
        try {
            const statusText = data.statusText;
            if (statusText != null && statusText != '' && statusText == 'error') {
                let objErr = {};
                if(data.status == 404) {
                    objErr = {
                        item: {
                            defaultMessage: jsOptions.error400,
                            description: jsOptions.error400Description,
                            errorCause: '404'
                        }
                    };    
                } else {
                    objErr = {
                        item: {
                            defaultMessage: jsOptions.errorMessage
                        }
                    };
                }
                return objErr;
            }
        } catch (error) {
			if(jsOptions.showLog) {
            	console.error('--- evaluateResponseErrors', error);
			}
        }
    }
    return errors;
}

/**
 * Show notifications or page messages <br>
 * There are three types of notifications <br>
 * <b>Toastr</b> - Require ../plugins/toastr/toastr.min.js
 * <b>Sweetalert</b> - Require ../plugins/sweetalert2/sweetalert2.all.min.js
 * <b>IziToast</b> - Require ../plugins/izitoast/iziToast.min.js
 * <b>PageMessage</b> - Global page messages
 */
function singleNotificationShow(resNotif) {
    if (resNotif != null) {
        if (resNotif.toastr != null) { //Toastr
            const toastr = resNotif.toastr;
            const toastrType = toastr['type'];
            const toastrTitle = toastr['title'];
            const toastrMessage = toastr['message'];
            toastrShow(toastrType, toastrMessage, toastrTitle);
        } else if (resNotif.swal != null) { //Swal
            const swal = resNotif.swal;
            const sText = swal.text;
            const type = swal.type;
            const confirmBtnText = swal.confirmBtnText;
            swalShow(sText, type, confirmBtnText);
        } else if (resNotif.iziToast != null) { //IziToast
            iziToastShow(resNotif.iziToast);
        } else if (resNotif.pageMessage) { //PageMessage
            const NotificationBaseObj = {
				message: resNotif.message,
				cssStyleClass: resNotif.cssStyleClass
			}
            pageMsg(NotificationBaseObj);
        }
    }
}

/** 
 * Show errors <br>
 * There are three types of notifications <br>
 * <b>Toastr</b> - Require ../plugins/toastr/toastr.min.js
 * <b>Sweetalert</b> - Require ../plugins/sweetalert2/sweetalert2.all.min.js
 * <b>IziToast</b> - Require ../plugins/izitoast/iziToast.min.js
 */
function showErrors(errors) {
    let firstFieldError;
    $.each(errors, function (index, item) {
		if(jsOptions.showLog) {
        	console.log('--- showErrors index: ', index);
		}
        if (item != null) {
            if (item.field != null) {
                if (item.defaultMessage != null) {
                    fieldError({field: item.field, message: item.defaultMessage});
                    if (firstFieldError == null) {
                        firstFieldError = item.field;
                    }
                }
            } else if (item.defaultMessage != null) {
                pageCustomError({message: item.defaultMessage, description: item.description, action: item.action, url: item.url, errorCause: item.errorCause});
            } else if(item.error && item.notification != null) {
                const notificationBaseObj = {...$_NOTIFICATION_BASE.instanceByNotification(item.notification)};
                pageError(notificationBaseObj);
            }
        }
    });

    /* Moves to the container of the first failed item */
    if (firstFieldError != null) {
        const divScroll = "div-" + firstFieldError;
        if (exists(divScroll)) {
            scrollToElement(divScroll);
        }
    }
    processingEnd();
}

const showPanelErrors = function({errors, panelSelector, ccsClass = null, dismiss = null}) {
    $.each(errors, function (index, item) {
        if(jsOptions.showLog) {
            console.log('--- showPanelErrors index: ', index);
        }
        if (item != null) {
            if (item.field != null) {
                if (item.defaultMessage != null) {
                    fieldError({field: item.field, message: item.defaultMessage});
                }
            } else if (item.defaultMessage != null) {
                const notificationBaseObj = {...$_NOTIFICATION_BASE};
                notificationBaseObj.setPanelSelector(panelSelector);
                notificationBaseObj.setMessage(item.defaultMessage);
                notificationBaseObj.setCssStyleClass(cssClass);
                notificationBaseObj.setDismiss(dismiss);

                panelMsg(notificationBaseObj);
            }
        }
    });
}

const showEmptySearchPanelMessage = function({selector, searchResultMessage, cssClass, dismiss = false}) {
    if(selector != null && message != null && cssClass != null) {
        const notificationBaseObj = {...$_NOTIFICATION_BASE};
        notificationBaseObj.setEmptyPanelSearchSelector(selector);
        notificationBaseObj.setSearchResultMessage(searchResultMessage);
        notificationBaseObj.setCssStyleClass(cssClass);
        notificationBaseObj.setDismiss(dismiss);

        panelMsg(notificationBaseObj);
    }
}

/**
 * Display global error messages
 * @param NotificationBaseObj - Instance of $_NOTIFICATION_BASE
 * @see $_NOTIFICATION_BASE
 */
const pageCustomError = function({message: pMessage, description: pDescription, action: pAction, url: pUrl, errorCause: pErrorCause}) {
    const notificationBaseObj = {...$_NOTIFICATION_BASE};
    notificationBaseObj.setMessage(pMessage);
    notificationBaseObj.setDescription(pDescription);
    notificationBaseObj.setAction(pAction);
    notificationBaseObj.setUrl(pUrl);
    notificationBaseObj.setErrorCause(pErrorCause);
    notificationBaseObj.setPageMessage(true);

    return pageMsg(notificationBaseObj);
}

/**
 * Display global error messages
 * This function can perform three types of global error: <b>Page message</b>, <b>Panel message</b> and <b>Modal panel message</b>
 * @param NotificationBaseObj - Instance of $_NOTIFICATION_BASE
 * @see $_NOTIFICATION_BASE
 */
function pageError(notificationBaseObj) {
    if(notificationBaseObj.pageMessage) {
        pageMsg(notificationBaseObj);
    } else if(notificationBaseObj.panelMessage) {
        panelMsg(notificationBaseObj);
    } else if(notificationBaseObj.modalPanelMessage) {
        if(jsOptions.showLog) {
           console.log('--- pageError > modalPanelMessage');
        }
    }
}

/**
 * Display global messages on pages
 * @param message - Message to display
 */
const pageMsgShow = ({message: pMessage}) => {
	const baseObj = {...$_NOTIFICATION_BASE.instancePageMessage(pMessage)};
	pageMsg(baseObj);
}

const determinePageMsgCssClass = (notificationBaseObj) => {
	let iClass;
    let cssClass = (notificationBaseObj.cssStyleClass != null && notificationBaseObj.cssStyleClass != '') ? notificationBaseObj.cssStyleClass : jsOptions.dangerClass;
	
	const defaultSuccessClass = 'alert alert-success';
	if (cssClass == jsOptions.infoClass) {
        iClass = 'fad fa-info-circle'; //Alert (FontAwesome)
        if (!parseBoolean(jsOptions.pageMessageConditional)) {
            cssClass = 'alert bd-callout bd-callout-info';
        }
    } else if (cssClass == jsOptions.successClass || cssClass == defaultSuccessClass) {
        iClass = 'fas fa-check-circle'; //Success (FontAwesome)
        if (!parseBoolean(jsOptions.pageMessageConditional)) {
            cssClass = 'alert bd-callout bd-callout-success';
        }
    } else if (cssClass == jsOptions.warningClass) {
        iClass = 'fas fa-exclamation-triangle'; //Warning (FontAwesome)
        if (!parseBoolean(jsOptions.pageMessageConditional)) {
            cssClass = 'alert bd-callout bd-callout-warning';
        }
    } else if (cssClass == jsOptions.dangerClass) {
        iClass = 'fas fa-ban'; //Danger (FontAwesome)
        if (!parseBoolean(jsOptions.pageMessageConditional)) {
            cssClass = 'alert bd-callout bd-callout-danger';
        }
    }
    
    return [iClass, cssClass];
}

const determinePageMsgDescription = (notificationBaseObj) => {
	const description = notificationBaseObj.description; //(Optional) Message description
    const action = notificationBaseObj.action; //(Optional) Action to be taken
    const url = notificationBaseObj.url; //(Optional) Action URL
        
	let htmlDesc = '';
    if (isNotEmpty(description) && isEmpty(action)) {
        htmlDesc = '<div class="error-description"> ' +
            '<div class="card"> ' +
            '<div class="card-body"> ' +
            '<div class="card-title" style="font-weight: bold; margin-bottom: 0;"> ' +
            '<span>' + jsOptions.errorInfo + '</span> ' +
            '</div> ' +
            '<span>' + description + '</span> ' +
            '</div> ' +
            '</div> ' +
            '</div>';
    } else if (isNotEmpty(description) && isNotEmpty(action)) {
        const href = jsOptions.serverContext + url;
        htmlDesc = '<div class="error-description"> ' +
            '<div class="card"> ' +
            '<div class="card-body"> ' +
            '<div class="card-title" style="font-weight: bold; margin-bottom: 0;"> ' +
            '<span>' + jsOptions.errorInfo + '</span> ' +
            '</div> ' +
            '<span>' + description + '</span> ' +
            '</div> ' +
            '</div> ' +
            '<div style="margin-top: 15px;"> ' +
            '<a href="' + href + '" class="btn btn-danger" style="font-weight: 600;"> ' +
            '<span>' + action + '</span> ' +
            '</a> ' +
            '</div> ' +
            '</div>';
    }
    return htmlDesc;
}

/**
 * Display global messages on pages
 * @param obj - Instance of $_NOTIFICATION_BASE
 * @see $_NOTIFICATION_BASE
 */
const pageMsg = (notificationBaseObj) => {
    const pageMessageSelector = jsOptions.pageMessageSelector;
    if(exists(pageMessageSelector)) {
        const [iClass, cssClass] = determinePageMsgCssClass(notificationBaseObj); 
        const htmlDesc = determinePageMsgDescription(notificationBaseObj);
        
        //Message to display
        const message = notificationBaseObj.message;
        //(Optional) Indicates if the message can be closed by the user - default false
        const dismiss = notificationBaseObj?.dismiss || false; 
        //(Optional) Message visibility time - default false
        let fadeOut = notificationBaseObj?.fadeOut || false;
        if(isEmpty(fadeOut)) {
			fadeOut = false;
		}
        //(Optional) Error cause
        const error = notificationBaseObj.errorCause;
        
        if(jsOptions.showLog) {
            console.log('--- pageMsg error cause (optional): ', error);
        }

        $('#'+pageMessageSelector).html("");
        if (dismiss) {
            $('#'+pageMessageSelector).append(
                '<div class="' + cssClass + '"> ' +
                '<button class="close" data-dismiss="alert"> ' +
                '<i class="fas fa-times-circle"></i> ' +
                '</button>' +
                '<span style="font-weight: bold;"><i class="' + iClass + '"></i> ' + message + '</span> ' +
                '' + htmlDesc +
                '</div>'
            );
        } else {
            $('#'+pageMessageSelector).append(
                '<div class="' + cssClass + '"> ' +
                '<span style="font-weight: bold;"><i class="' + iClass + '"></i> ' + message + '</span> ' +
                '' + htmlDesc +
                '</div> '
            );
        }

        elementShow(pageMessageSelector);

        const pageHeadSelector = jsOptions.pageHeadSelector;
        if(exists(pageHeadSelector)) {
            scrollToElement(pageHeadSelector);
        }

        if (fadeOut) {
            $('#'+pageMessageSelector).fadeOut(fadeOut);
        }
    }
}

/**
 * Hide global messages on pages
 */
function pageMsgHide() {
    const pageMessageSelector = jsOptions.pageMessageSelector;
    if (exists(pageMessageSelector)) {
        textClear('global-message');
        textClear('global-message-text');
        hiddenClass(pageMessageSelector);
    }
}

/**
 * Display global error messages on panels
 * @param pMessage - Message to display
 * @param pDescription - Description to display (Optional)
 * @param pAction - Action (Optional)
 * @param pUrl - URL (Optional)
 */
function panelError(pMessage, pDescription, pAction, pUrl) {
    const notificationBaseObj = {...$_NOTIFICATION_BASE};
    notificationBaseObj.setMessage(pMessage);
    notificationBaseObj.setDescription(pDescription);
    notificationBaseObj.setAction(pAction);
    notificationBaseObj.setUrl(pUrl);
    notificationBaseObj.setPanelMessage(true);
    return pageMsg(notificationBaseObj);
}

/**
 * Display global messages on panels
 * @param obj - Instance of $_NOTIFICATION_BASE
 * @see $_NOTIFICATION_BASE
 */
function panelNotification(pElement, pNotification) {
    if (pElement != null && pNotification != null) {
        const notificationBaseObj = {...$_NOTIFICATION_BASE.instanceByNotification(pNotification)};
        notificationBaseObj.setSearchResultMessage(pNotification.searchResultMessage);
        notificationBaseObj.setPanelSelector(pElement);
        panelMsg(notificationBaseObj);
    }
}

/**
 * Show panel message
 * @param pElementContent - Container
 * @param pElement - Selctor with message
 * @param pMessage - Display message
 * @param pClass - Message CSS class
 * @param pFadeOut (optional) - Message visibility time
 */
function panelMsg(notificationBaseObj) {
    const divContainer = `${notificationBaseObj.panelSelector}`;
    const div = notificationBaseObj.panelSelector;
    const divAlert = `${div}-alert`;
    const iId = `i-${div}`;
    const spanId = `span-${div}`;
    const cssClass = notificationBaseObj.cssStyleClass != null ? notificationBaseObj.cssStyleClass : jsOptions.dangerClassDismissible;

    const message = notificationBaseObj.message != null ? notificationBaseObj.message : notificationBaseObj.searchResultMessage;
    const dismiss = notificationBaseObj.dismiss;
    const fadeOut = notificationBaseObj.fadeOut;

    if(exists(div)) {
        $('#'+div).html("");
        if (dismiss) {
            if(jsOptions.bootstrapVersion === 5) {
                $('#'+div).append(
                    '<div class="' + cssClass + '" role="alert" style="margin-bottom: 5px !important; border-radius: 4px;"> ' +
                        '<span id="' + spanId + '">' + message + '</span> ' +
                        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> ' +
                    '</div>'
                );
            } else {
                $('#'+div).append(
                    '<div id="' + divAlert + '" class="' + cssClass + '" role="alert" style="margin-bottom: 5px !important; border-radius: 4px;"> ' +
                    '<button type="button" data-dismiss="alert" class="close" aria-label="Close">&times;</button> ' +
                    '<i id="' + iId + '" aria-hidden="true"></i> ' +
                    '<span id="' + spanId + '">' + message + '</span> ' +
                    '</div>'
                );
            }
        } else {
            $('#'+div).append(
                '<div id="' + divAlert + '" class="' + cssClass + '" role="alert" style="margin-bottom: 5px !important; border-radius: 4px;"> ' +
                '<i id="' + iId + '" aria-hidden="true"></i> ' +
                '<span id="' + spanId + '">' + message + '</span> ' +
                '</div>'
            );
        }

        if (hasClass(divAlert, jsOptions.alertDangerClass)) {
            elemClassAdd(iId, jsOptions.alertDangerIconClass);
        } else if (hasClass(divAlert, jsOptions.alertWarningClass)) {
            elemClassAdd(iId, jsOptions.alertWarningIconClass);
        } else if (hasClass(divAlert, jsOptions.alertInfoClass)) {
            elemClassAdd(iId, jsOptions.alertInfoIconClass);
        } else if (hasClass(divAlert, jsOptions.alertSuccessClass)) {
            elemClassAdd(iId, jsOptions.alertSuccessIconClass);
        }

        elementShow(divContainer);

        if(exists(divContainer)) {
            scrollToElement(divContainer);
        }

        if (fadeOut != null) {
            $('#'+divContainer).fadeOut(fadeOut);
        }
    }
}

function panelMsgHide(pElement) {
    $('#'+pElement).html("");
    const pElementContent = pElement + '-container';
    hiddenClass(pElementContent);
}

function validatePanel(panelId, panelDivs) {
    let panelHasError = false;
    for(let div of panelDivs) {
        if (hasErrorClass(div)) {
            panelHasError = true;
            break;
        }
    }

    evaluatePanelCollapsable(panelId, panelHasError, true);
    return panelHasError;
}

function evaluatePanelCollapsable(panelId, error, panelHide = false) {
    const panelHeading = panelId + '-heading';
    const panelBody = panelId + '-body';
    
    if (error) {
        elemClassChange(panelId, 'panel-bordered-primary', 'panel-bordered panel-danger');

        elemClassRemove(panelHeading, 'panel-heading-transparent');
        elemClassRemove(panelHeading, 'collapsed');
        elementAttr(panelHeading, 'aria-expanded', true);

        elemClassAdd(panelBody, 'collapse in');
        elementAttr(panelBody, 'aria-expanded', true);
        elementPropertyRemove(panelBody, 'height');
    } else {
        elemClassRemove(panelId, 'panel-bordered panel-danger');
        elemClassAdd(panelId, 'panel-bordered-primary');
        elemClassAdd(panelHeading, 'panel-heading-transparent');

        if (panelHide) {
            panelCollapsableMessageHide(panelId);
        }
    }
}

/**
 * Display messages on collapsable panels
 * @param panelId - Selector
 * @param pMessage - Message to display
 * @param pClass - Message css class
 */
function panelCollapsableMessageShow(panelId, pMessage, pClass = null) {
    const divContainer = panelId + '-message-container';
    const divMessage = '#'+panelId + '-message';
    const divAlert = panelId + "-message-alert";
    const iId = "i-" + panelId + '-message';
    const cssClass = pClass != null ? pClass : 'alert alert-danger alert-dismissable';

    $(divMessage).html("");
    $(divMessage).append(
        '<div id="' + divAlert + '" class="' + cssClass + '" role="alert" style="margin-bottom: 5px !important; border-radius: 4px;"> ' +
        '<i id="' + iId + '" aria-hidden="true"></i> ' +
        '<span id="global-message-text">' + pMessage + '</span>'
    );

    if (hasClass(divAlert, 'alert-danger')) {
        elemClassAdd(iId, 'fas fa-ban');
    } else if (hasClass(divAlert, 'alert-warning')) {
        elemClassAdd(iId, 'fas fa-exclamation-triangle');
    } else if (hasClass(divAlert, 'alert-info')) {
        elemClassAdd(iId, 'fad fa-info-circle');
    } else if (hasClass(divAlert, 'alert-success')) {
        elemClassAdd(iId, 'fas fa-check-circle');
    }

    elementShow(divContainer);
}

/**
 * Hide messages on collapsable panels
 * @param panelId - Selector
 */
function panelCollapsableMessageHide(panelId) {
    const divContainer = panelId + '-message-container';
    const divMessage = panelId + '-message';
    $('#'+divMessage).html("");
    hiddenClass(divContainer);
}

/**
 * Hide messages on collapsable panels
 * @param panels - List of selectors
 */
function panelCollapsableMessageClear(panels) {
    for (let panelId of panels) {
        panelCollapsableMessageHide(panelId);
    }
}

/**
 *
 * @param panels - List of selectors
 */
function evaluateMultiPanel(panels) {
    let panelFocused = null;

    for (let obj of panels) {
        const panelId = obj.panelId;
        const panelDivs = obj.panelDivs;

        const panelHasError = validatePanel(panelId, panelDivs);
        if (panelHasError) {
            if (panelFocused == null) {
                panelFocused = panelId;
            }
        }
    }

    if(exists(panelFocused)) {
        scrollToElement(panelFocused);
    }
}

/**
 * Display notification messages
 * @param pDivContentId-Container selector
 * @param pDivId-Notification selector
 * @param pMessage-Message to display
 * @param pClass-Message css class
 * @param pFadeOut-(Optional) Message visibility time - default false
 */
function notificationShow({container, message, styleClass = null, dismiss = null, fadeOut = null}) {
    const parentContainer = `${container}-container`;
    const cssClass = styleClass != null ? styleClass : 'alert alert-danger alert-dismissable';

    $('#'+pDivId).html("");
    if (dismiss) {
        $('#'+pDivId).append(
            '<div id="global-message-alert" class="' + cssClass + '" role="alert" style="margin-bottom: 5px !important;"> ' +
            '<button type="button" data-dismiss="alert" class="close" aria-label="Close">&times;</button> ' +
            '<i id="i-global-message" aria-hidden="true"></i> ' +
            '<span id="global-message-text">' + message + '</span> ' +
            '</div>'
        );
    } else {
        $('#'+pDivId).append(
            '<div id="global-message-alert" class="' + cssClass + '" role="alert" style="margin-bottom: 5px !important;"> ' +
            '<i id="i-global-message" aria-hidden="true"></i> ' +
            '<span id="global-message-text">' + message + '</span>'
        );
    }

    if (hasClass('global-message-alert', 'alert-danger')) {
        elemClassAdd('i-global-message', 'fas fa-ban');
    } else if (hasClass('global-message-alert', 'alert-warning')) {
        elemClassAdd('i-global-message', 'fas fa-exclamation-triangle');
    } else if (hasClass('global-message-alert', 'alert-info')) {
        elemClassAdd('i-global-message', 'fad fa-info-circle');
    } else if (hasClass('global-message-alert', 'alert-success')) {
        elemClassAdd('i-global-message', 'fas fa-check-circle');
    }

    elementShow(parentContainer);
    scrollToElement(jsOptions.pageMessageFragment);

    if (fadeOut != null) {
        $('#'+parentContainer).fadeOut(fadeOut);
    }
}

/**
 * Hide notifications messages
 */
function notificationHide(pDivContentId, pDivId) {
    $('#'+pDivId).html("");
    hiddenClass(pDivContentId);
}

/**
 * Display a toastr notification
 */
function toastrShow(pType, pMessage, pTitle = null) {
    toastr.options = { //Options
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    /* Showing notification */
    pTitle != null ? toastr[pType](pMessage, pTitle) : toastr[pType](pMessage);
}

/**
 * Hide a toastr notification
 */
function toastrHide() {
    toastr.clear();
}

/**
 * Sweetalert notification
 */
function swalShow(pMessage, pType, pConfirmBtnText) {
    Swal.fire({
        text: pMessage,
        icon: pType,
        confirmButtonText: pConfirmBtnText,
        focusConfirm: true,
        allowOutsideClick: false,
        allowEscapeKey: false
    });
}

/**
 * iziToast object
 */
const $_IZI_TOAST = {
    message: '',
    cssClass: '',
    icon: '',
    image: '',
    position: $_TOAST_POSITION_TOP_RIGHT,
    instance(message, cssClass, icon, position) {
        this.message = message;
        this.cssClass = cssClass;
        this.icon = icon;
        this.position = position || $_TOAST_POSITION_TOP_RIGHT;
        return this;
    },
    instanceImg(message, cssClass, image, position) {
        this.message = message;
        this.cssClass = cssClass;
        this.image = image;
        this.position = position || $_TOAST_POSITION_TOP_RIGHT;
        return this;
    }
};

/**
 * Success izziToast notification
 * @param message - Display message
 * @param position - Position of the notification
 */
function iziToastSuccess(message, position = null) {
    const cssClass = "iziToast iziToast-success";
    const icon = "fas fa-check-circle";
    const iziToastData = {...$_IZI_TOAST.instance(message, cssClass, icon, position)};
    iziToastShow(iziToastData);
}

/**
 * Error izziToast notification
 * @param message - Display message
 * @param position - Position of the notification
 */
function iziToastError(message, position = null) {
    const cssClass = "iziToast iziToast-danger";
    const icon = "fas fa-exclamation-circle";
    const iziToastData = {...$_IZI_TOAST.instance(message, cssClass, icon, position)};
    iziToastShow(iziToastData);
}

/**
 * izziToast (with image) notification
 * @param message - Display message
 * @param position - Position of the notification
 */
function iziToastWithImage(image, message, position = null, css = null) {
    const cssClass = css || 'iziToast iziToast-dark';
    const iziToastData = {...$_IZI_TOAST.instanceImg(message, cssClass, image, position)};
    iziToastShow(iziToastData);
}

/**
 * Show izziToast notification
 * @param message - Display message
 * @param position - Position of the notification
 */
function iziToastShow(iziToastData) {
    let iToastPosition = "";
    let iToastTransitionIn = "";
    switch (iziToastData.position) {
        case $_TOAST_POSITION_TOP_RIGHT:
            iToastPosition = "topRight";
            iToastTransitionIn = "fadeInLeft";
            break;
        case $_TOAST_POSITION_BOTTOM_RIGHT:
            iToastPosition = "bottomRight";
            iToastTransitionIn = "fadeInLeft";
            break;
        case $_TOAST_POSITION_TOP_LEFT:
            iToastPosition = "topLeft";
            iToastTransitionIn = "fadeInRight";
            break;
        case $_TOAST_POSITION_BOTTOM_LEFT:
            iToastPosition = "bottomLeft";
            iToastTransitionIn = "fadeInRight";
            break;
        case $_TOAST_POSITION_TOP_CENTER:
            iToastPosition = "topCenter";
            iToastTransitionIn = "fadeInDown";
            break;
        case $_TOAST_POSITION_BOTTOM_CENTER:
            iToastPosition = "bottomCenter";
            iToastTransitionIn = "fadeInUp";
            break;
        /*default:
            iToastPosition = "topRight";
            iToastTransitionIn = "fadeInLeft";*/
    }

    const iToast = {
        class: iziToastData.cssClass || '',
        title: iziToastData.title || '',
        message: iziToastData.message,
        position: iToastPosition,
        animateInside: true,
        progressBar: false,
        close: false,        
        icon: iziToastData.icon || '',
        timeout: 3200,
        transitionIn: iToastTransitionIn,
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeIn',
        transitionOutMobile: 'fadeOut'
    };
    
    if(iziToastData.image != '') {
		iToast.image = iziToastData.image;
	}
    
    iziToast.show(iToast);
}

/**
 * Function panel search
 */
(function ($) {
    $.fn.panelSearch = function (options) {
        "use strict";

        let settings = $.extend({
            text: "",
            expanded: true
        }, options);

        let search = {
            panel: $('.panel-search')
        }
        if (search.panel.length) {
            search.panel.each(function () {
                const parent = $(this).prop('id');
                $(this).children().each(function () {
                    let panelHeading;
                    const panelCollapse = parent + '-collapse';

                    const child = $(this).prop('id');
                    if (hasClass(child, 'panel-heading')) {
                        panelHeading = child;
                    }

                    const areaExpanded = settings.expanded;
                    const iClass = 'psi-chevron-up';
                    let collapse = 'collapse in';

                    if (!areaExpanded) {
                        collapse = 'collapse';
                    }

                    $('#' + panelHeading).html('');
                    $('#' + panelHeading).append(
                        '<div class="panel-control"> ' +
                        '<button class="btn btn-default" data-panel="minmax" data-target="#' + panelCollapse + '" data-toggle="collapse" aria-expanded="' + areaExpanded + '"> ' +
                        '<i class="' + iClass + '"></i> ' +
                        '</button> ' +
                        '</div> ' +
                        '<h3 class="panel-title"> ' +
                        '<i class="fal fa-search"></i> ' +
                        '<span>' + settings.text + '</span> ' +
                        '</h3> '
                    );

                    elemClassAdd(panelCollapse, collapse);
                    $('#'+panelCollapse).attr('aria-expanded', areaExpanded);
                    $("." + panelCollapse).css('height', '0px;');
                });
            });
        }
        return this;
    }
}(jQuery));

let $_SORT_BY = null;
let $_SORT_DIRECTION = null;
/**
 * Initially the list is sorted asc, so the default sort direction is desc
 */
let $_SORT_DIRECTION_DEFAULT = 'desc';

/**
 * Default sort function
 */
(function ($) {
    "use strict";
    $(document).on('doc.ready', function () {
        const order = {
            directionBtn: $('[data-sort]')
        }
        if (order.directionBtn.length) {
            order.directionBtn.each(function () {
                $(this).attr("data-sort-direction", $_SORT_DIRECTION_DEFAULT);
            })
        }
    });
}(jQuery));

/**
 * Sort function
 */
(function ($) {
    "use strict";
    $(document).on('doc.ready', function () {
        $('body').on('click', '[data-sort]', function () {
            const target = $(this).prop('id');
            $_SORT_BY = $(this).attr('data-sort');
            $_SORT_DIRECTION = $(this).attr('data-sort-direction');
            $('#' + target).children().each(function () {
                if ($(this).prop('id')) {
                    const child = $(this).prop('id');
                    if ($_SORT_DIRECTION == 'asc') {
                        $('#' + target).attr("data-sort-direction", "desc");
                        elemClassChange(child, 'fa-sort-amount-down', 'fa-sort-amount-down');
                    } else if ($_SORT_DIRECTION == 'desc') {
                        $('#' + target).attr("data-sort-direction", "asc");
                        elemClassChange(child, 'fa-sort-amount-up', 'fa-sort-amount-up');
                    }
                    if(jsOptions.showLog) {
                    	console.log('--- Sort by ' + $_SORT_BY + ' direction ' + $_SORT_DIRECTION);
					}
                }
            });
            elemClassAdd(target, 'data-sort');
            $('[data-sort]').each(function () {
                const id = $(this).prop('id');
                if (id != target) {
                    elemClassRemove(id, 'data-sort');
                }
            });
        });
    });
}(jQuery));

/**
 * Unsort function
 */
(function ($) {
    "use strict";
    $(document).on('doc.ready', function () {
        $('[data-sort="unsort"]').click(function () {
            $('[data-sort]').each(function () {
                const target = $(this).prop('id');
                $('#' + target).attr("data-sort-direction", $_SORT_DIRECTION_DEFAULT);
                elemClassRemove(target, 'data-sort');

                $('#' + target).children().each(function () {
                    if ($(this).prop('id')) {
                        const child = $(this).prop('id');
                        elemClassChange(child, 'fa-sort-amount-up', 'fa-sort-amount-down');
                    }
                });
            });
            $_SORT_BY = null;
            $_SORT_DIRECTION = null;
            if(jsOptions.showLog) {
                console.log('--- unsorted');
            }
        });
    });
}(jQuery));

/**
 * Remove required/error classes from Input/Select elements within a form
 */
(function ($) {
    "use strict";
    $(document).on('doc.ready', function () {
        $('.form-control, .custom-file-input').each(function () {
            const field = $(this);
            field.keypress(function () {
                fieldReset(field.attr('id'));
            }).change(function () {
                fieldReset(field.attr('id'));
            });
        });

        $('select.selectpicker').each(function () {
            const field = $(this);
            field.change(function () {
                fieldReset(field.attr('id'));
            });
        });
    });
}(jQuery));

/* Check if an element exists */
const exists = function(pElementIdOrClass) {
	try {
		const selector = pElementIdOrClass.startsWith('.') ? pElementIdOrClass : '#'+pElementIdOrClass;
		return $(selector).length > 0;
	} catch (err) {
        return false;
    }
}

/* Checks if an element is visible */
function isVisible(pElementId) {
    return $(`#${pElementId}`).is(":visible");
}

/* Function to compare strings */
String.prototype.equalsIgnoreCase = function(str) {
    return (str != null && typeof str === 'string' && this.toUpperCase() === str.toUpperCase());
}

/* Check if a string includes str */
String.prototype.contains = function(str) {
	return (str != null && typeof str === 'string' && this.includes(str));
}

const isNotEmpty = (str) => {
	if(str) {
		return true;
	}
	return false;
}

const isEmpty = (str) => {
	return !isNotEmpty(str);
}

/* Verifica si la cadena empieza con un valor determinado 
String.prototype.startsWith = function (str) {
    return (str != null && typeof str === 'string' && this.match('^' + str));
}*/

/* Verifica si la cadena termina con un valor determinado 
String.prototype.endsWith = function (str) {
    return (str != null && typeof str === 'string' && this.match(str + '$'));
}*/

/* Redirect */
function redirect(formName) {
    document.forms[formName].submit();
}

function redirectPost(pUrlRedirect, pPostValues) {
    $.redirect(pUrlRedirect, pPostValues);
}

function redirectGet(pUrlRedirect) {
    window.location.replace(pUrlRedirect);
}

/* Interval */
function interval(pFunction, pTime) {
    return setInterval(pFunction, pTime);
}

function intervalClear(pId) {
    clearInterval(pId);
}

/* Convierte minutos en segundos */
function convertSeg(pMinute) {
    return pMinute * 60;
}

/* Convierte minutos en milisegundos */
function convertMiliseg(pMinute) {
    return convertSeg(pMinute) * 1000;
}

/* Convierte string a boolean */
function parseBoolean(pVal) {
	return pVal || pVal == "true";
}

/* Convierte numero a string */
function numberToString(pVal) {
    return String(pVal);
}

/* Convierte string a numero */
function stringToNumber(pVal) {
    return Number(pVal);
}

/* Imprime en consola */
function consolePrint(pValue, pText = null) {
    if (pText != null) {
        console.log(pText, pValue);
    } else {
        console.log(pValue);
    }
}

/* Remplaza caracateres en un String */
function replaceCharacter(pString, pCharacter, pReplacement, pCase = null) {
    /* Especificar g (case-sensitive) para reemplazar todas las ocurrencias. */
    /* Especificar gi (case-insensitive) para reemplazar todas las ocurrencias. */
    if (pCase == null) {
        pCase = 'g';
    }
    pString = String(pString);
    return pString.length > 1 ? pString.replace(new RegExp(pCharacter, pCase), pReplacement) : null;
}

function replaceCharacterAll(pString, pCharacterArray, pReplacementArray, pCase = null) {
    /* Especificar g (case-sensitive) para reemplazar todas las ocurrencias. */
    /* Especificar gi (case-insensitive) para reemplazar todas las ocurrencias. */
    if (Array.isArray(pCharacterArray) && Array.isArray(pReplacementArray)) {
        if (pCharacterArray.length == pReplacementArray.length) {
            if (pCase == null) {
                pCase = 'g';
            }
            for (var i = 0; i < pCharacterArray.length; i++) {
                var character = pCharacterArray[i];
                var replacement = pReplacementArray[i];
                pString = replaceCharacter(pString, character, replacement, pCase);
            }
            return pString;
        }
        return null;
    }
}

/* Reemplaza espacio en blanco por '&nbsp' */
function replaceWhiteSpace(pString) {
    pString = String(pString);
    return pString.length > 1 ? pString.replace(/ /g, '&nbsp') : null;
}

String.prototype.sanitize = function () {
    return this.trim()
    		   .toLowerCase()
    		   .replace(/[&\/\\#,+()$~%.'":*?<>{}<>@¿?¡!]/g, '')
    		   .replace(/[\s]/g, '-')
    		   .replace(/[á]/g, 'a')
    		   .replace(/[é]/g, 'e')
    		   .replace(/[í]/g, 'i')
    		   .replace(/[ó]/g, 'o')
    		   .replace(/[ú]/g, 'u')
    		   .replace(/[ü]/g, 'u')
    		   .replace(/[Ñ]/g, 'ñ');
}

/* Normalizar URL */
function normalizeUrl(pUrl) {
    if (pUrl != null) {
        pUrl = replaceCharacter(pUrl, '//', '/', 'gi');
        pUrl = replaceCharacter(pUrl, '\\\\', '\\', 'gi');
        return pUrl;
    }
    return null;
}

/* Agrega contenido a un elemento */
function elementAppend(pElementId, pVal) {
    $(`#${pElementId}`).append(pVal);
}

/* Longitud de un elemento (elementos con value [input...]) */
function getElementLength(pElementId) {
    return getValue(pElementId).length;
}

/* Longitud de un elemento (elementos que no tienen value [label, span...]) */
function textLength(pElementId) {
    return text(pElementId).length;
}

/* Elimina espacios de una cadena */
function trimStr(pVal) {
    if (pVal != null) {
        return pVal.trim();
    }
    return pVal;
}

/* Devuelve valor de un elemento */
function getValue(pElementId) {
    if (!exists(pElementId)) {
        return "";
    }
    return $('#' + pElementId).getValue();
}

/* Cambia el valor de un elemento */
function setValue(pElementId, pVal) {
    $(`#${pElementId}`).getValue(pVal);
    fieldReset(pElementId);
}

/* Cambia el valor de un elemento (Disabled) */
function setValueDisabled(pElementId, pVal) {
    $(`#${pElementId}`).getValue(pVal);
    fieldReset(pElementId);
    disabledOnly(pElementId);
}

/* Elimina el valor de un elemento */
function valueClear(pElementId) {
    $(`#${pElementId}`).getValue("").change();
}

/* Saber si un elemento tiene valor */
function hasValue(pElementId) {
    if (!exists(pElementId)) {
        return false;
    }
    if (isSelect(pElementId)) {
        return (getValue(pElementId) != "-" && getValue(pElementId) != "") ? true : false;
    }
    return getValue(pElementId) != "" ? true : false;
}

/* Returns text from an element */
function text(pElementId) {
    if (!exists(pElementId)) {
        return "";
    }
    return $(`#${pElementId}`).text();
}

/* Changes the text of an element */
function setText(pElementId, pVal) {
    $(`#${pElementId}`).html(pVal);
    fieldReset(pElementId);
}

/* Removes the HTML content of an element */
function textClear(pElementId) {
    $(`#${pElementId}`).html("");
}

/* Deletes an element */
function remove(pElementId) {
    $(`#${pElementId}`).remove();
}

/* Deletes the content of an element */
function empty(pElementId) {
    $(`#${pElementId}`).empty();
}

/* Makes an element not visible */
function elementHide(pElementId, pElemClass = null) {
    if (pElemClass == null) {
        $(`#${pElementId}`).attr("style", "display: none !important");
        hiddenClass(pElementId);
    } else {
        $("." + pElemClass).attr("style", "display: none !important");
    }
}

/* Makes an element visible */
function elementShow(pElementId, pElemClass = null) {
    if (pElementId != null && pElemClass == null) {
        $(`#${pElementId}`).css("display", "");
        hiddenClassRemove(pElementId);
    } else {
        $("." + pElemClass).css("display", "");
    }
}

/* Sets the "visible" value in the "visibility" property */
function elementVisibleTrue(pElementId) {
	$(`#${pElementId}`).css("visibility", "visible");
}

/* Sets the "hidden" value in the "visibility" property */
function elementVisibleFalse(pElementId) {
	$(`#${pElementId}`).css("visibility", "hidden");
}

/* Sets tooltip to an element */
function tooltipShow(pElementId, pMessage, isToogle = false) {
    $(`#${pElementId}`).removeAttr('data-original-title');
    $(`#${pElementId}`).attr('data-original-title', pMessage);

    if (isToogle) {
        $('#' + pElementId).tooltip('toggle');
    } else {
        $('#' + pElementId).tooltip('show');
    }
}

function tooltipData({selector, tooltip, dir = null}) {
    if (exists(selector)) {
        elemClassAdd(selector, 'add-tooltip');

        var direction = dir != null ? dir : 'top';

        $('#'+selector).tooltip({
            placement: direction,
            title: tooltip,
            html: true
        });
    }
}

/* Elimina tooltip a un elemento */
function tooltipHide(pElementId) {
    $(`#${pElementId}`).removeAttr('data-original-title');
}

/* Agrega 'tag' a un elemento (w2tag) */
function elementTagShow(pElementId, pMessage, pPosition = null, pClassName = null, pStyle = null) {
    const position = pPosition != null ? pPosition : 'right';
    $('#' + pElementId).w2tag(pMessage, {position: position, className: pClassName, style: pStyle});
}

/* Elimina el 'tag' de un elemento (w2tag) */
function elementTagHide(pElementId) {
    $('#' + pElementId).w2tag();
}

/* Agrega placeholder a un elemento */
function elementPlaceholder(pElementId, pMessage) {
    elementAttr(pElementId, 'placeholder', pMessage);
}

/* Elimina placeholder de un elemento */
function elementPlaceholderRemove(pElementId) {
    elementAttrRemove(pElementId, 'placeholder');
}

/* Agrega una propiedad y su valor a un elemento */
function elementPropertyAdd(pElementId, pProperty, pValue) {
    $('#' + pElementId).css(pProperty, pValue);
}

/* Elimina una propiedad a un elemento */
function elementPropertyRemove(pElementId, pProperty) {
    $('#' + pElementId).removeProp(pProperty);
}

/* Agrega un evento o atributo a un elemento */
function elementAttr(pElementId, pName, pValue) {
    const selector = elementSelector(pElementId);
    $(selector).attr('' + pName + '', '' + pValue + '');
}

/* Elimina un evento o atributo de un elemento */
function elementAttrRemove(pElementId, pProp) {
    const selector = elementSelector(pElementId);
    $(selector).removeAttr('' + pProp + '');
}

/* Agrega el evento href a un elemento <a> */
function elementHref(pElementId, pValue) {
    elementAttr(pElementId, 'href', '' + pValue + '');
}

/* Elimina el evento href de un elemento <a> */
function elementHrefRemove(pElementId) {
    $('#' + pElementId).removeAttr('href');
    $('#' + pElementId).attr('href', 'javascript:void(0)');
}

const getBackgroundImg = function(pElementId) {
	let bg = $('#' + pElementId).css('background-image'); // get background image using css property
    bg = bg.replace('url(','').replace(')','');
    return bg;
};

const setBackgroundImg = function(pElementId, url) {
	$('#' + pElementId).css('background-image',"url(" + url + ")");
};

const removeBackgroundImg = function(pElementId) {
	$('#' + pElementId).css('background-image','none');
};

/* Verifica si existe un evento en un elemento */
function elementAttrEventExist(pElementId, pEvent) {
    try {
        const propertyLength = $('#' + pElementId).attr('' + pEvent + '');
        return propertyLength.length > 0 ? true : false;
    } catch (err) {
        return false;
    }
}

/**
 * Focus on
 */
function focusOn(pElementId) {
    $(`#${pElementId}`).focus();
}

/**
 * Focus out
 */
function focusOut(pElementId) {
    $(`#${pElementId}`).blur();
}

/**
 * Reset all element classes and delete value
 * @param pElementId - Selector id
 */
function fieldReady(pElementId) {
    fieldReset(pElementId);
    valueClear(pElementId);
    elementFocusOut(pElementId);
}

/**
 * Reset all element classes
 * @param pElementId - An instance of $_FIELD
 * @see $_FIELD
 */
function fieldReset(field) {
	const fieldObj = {...$_FIELD.instance(field)};

	errorClassRemove(fieldObj.div);
    requiredClassRemove(fieldObj.label);
    smallErrorClassRemove(fieldObj.small);
    textClear(fieldObj.small);

    if (jsOptions.bootstrapVersion === 4 || jsOptions.bootstrapVersion === 5) {
        errorClassRemove(fieldObj.field);
        errorClassRemove(fieldObj.divFile);
        errorClassRemove(fieldObj.file);
        errorClassRemove(fieldObj.inputGroup);
    }

    if(isCheckbox(fieldObj.field)) {
        unchecked(fieldObj.field);
    }

	if (hasClass(fieldObj.field, 'select2-hidden-accessible')) {
        select2ErrorClean(fieldObj.div);
    }

    /* niceSelect plugin */
    if ($.fn.niceSelect) {
        $('select').niceSelect('update');
    }

    tooltipHide(fieldObj.field);
}

/**
 * Deletes the error classes of the fields and keep their value
 * @param fields - Array or single field
 */
function fieldsReset(fields) {
    if (fields != null) {
        if (!isArrayEmpty(fields)) {
            fields.forEach(f => fieldReset(f));
        } else {
            fieldReset(fields);
        }
    }
}

/**
 * Deletes the error classes of the fields and delete their value
 * @param fields - Fields
 */
function fieldsClear(fields) {
    if (fields != null) {
        if (!isArrayEmpty(fields)) {
            for (let field of fields) {
                !isSelect(field) ? fieldReady(field) : selectReady(field);
            }
        } else {
            !isSelect(fields) ? fieldReady(fields) : selectReady(fields);
        }
    }
}

/**
 * Deletes the error classes of the fields within a form and delete their value
 * @param formId - Form id
 */
function formReady(formId) {
    if (formId != null) {
        const selector = 'form#' + formId + ' :input';
        $(selector).each(function () {
            const input = $(this).prop('type');
            if (existsElementInArray(DEFAULT_FORM_TYPES, input)) {
                const id = this.id;
                if (id != null && id != '') {
                    !isSelect(this.id) ? fieldReady(this.id) : selectReady(this.id);
                }
            }
        });
    }
}

/**
 * Deletes the error classes of the fields within a form and keep their value
 * @param formId - Form id
 */
function formReset(formId) {
    if (formId != null) {
        const selector = 'form#' + formId + ' :input';
        $(selector).each(function () {
            const input = $(this).prop('type');
            if (existsElementInArray(DEFAULT_FORM_TYPES, input)) {
                if ($(this).prop('id')) {
                    fieldReset(this.id);
                }
            }
        });
    }
}

/**
 * Enable fields
 * @param fields - Array or single field
 */
function enableFields(fields) {
    if (fields != null) {
        if (!isArrayEmpty(fields)) {
            fields.forEach(f => {
                readOnlyFalse(f);
                available(f);
            });
        } else {
            readOnlyFalse(fields);
            available(fields);
        }
    }
}

/**
 * Disable fields
 * @param fields - Array or single field
 */
function disableFields(fields) {
    if (fields != null) {
        if (!isArrayEmpty(fields)) {
            fields.forEach(f => {
                readOnlyTrue(f);
                disabled(f);
            });
        } else {
            readOnlyTrue(fields);
            disabled(fields);
        }
    }
}

/**
 * Deletes the error classes of the input-group
 * @param groupId - Container id
 * @param field1 - Field 1 id
 * @param field2 - Field 2 id
 */
function inputGroupClassReset(groupId, field1, field2) {
    const div = "div-" + groupId;
    const label = "label-" + groupId;
    const small = "small-" + groupId;

    requiredClassRemove(label);
    errorClassRemove(label);
    if (jsOptions.bootstrapVersion === 4 || jsOptions.bootstrapVersion === 5) {
        errorClassRemove(field1);
        errorClassRemove(field2);
    } else if (jsOptions.bootstrapVersion === 3) {
        errorClassRemove(div);
    }
    textClear(small);

    if (hasClass(field1, 'select2-hidden-accessible')) {
        select2ErrorClean(div);
    }

    if (hasClass(field2, 'select2-hidden-accessible')) {
        select2ErrorClean(div);
    }

    elementTagHide(field1);
    tooltipHide(field1);
    elementTagHide(field2);
    tooltipHide(field2);
}

/**
 * If element is select
 * @param pElementId - Selector id
 */
function isSelect(pElementId) {
    return $('#' + pElementId).is("select");
}

/**
 * Select reset value
 * @param pElementId - Selctor id
 */
function selectReset(pElementId) {
    setValue(pElementId, "");
}

/**
 * Deletes the error classes of the select and reset value
 * @param pElementId
 */
function selectReady(pElementId) {
    fieldReset(pElementId);
    selectReset(pElementId);
    elementFocusOut(pElementId);
}

/**
 * Select empty
 * @param pElementId - Selctor id
 */
function selectEmpty(pElementId) {
    if (exists(pElementId)) {
        empty(pElementId);

        $('#' + pElementId).append($('<option>', {
            value: '',
            text: '--Seleccione--',
            selected: true
        }));
    }
}

/**
 * Reset and disable select
 * @param pElementId - Selctor id
 */
function selectEmptyDisabled(pElementId) {
    if (exists(pElementId)) {
        empty(pElementId);
        disabledOnly(pElementId);

        $('#' + pElementId).append($('<option>', {
            value: '',
            text: '--Seleccione--',
            selected: true
        }));
    }
}

/**
 * Gets text of the selected option
 * @param pElementId
 * @returns {*|jQuery}
 */
function getSelectedOptionText(pElementId) {
    return $(`#${pElementId}` + " option:selected").text();
}

/**
 * Sets select value by option value
 * @param pElementId - Selector id
 */
function setSelectVal(pElementId, pVal) {
    $(`#${pElementId}`).getValue(pVal).change();
}

/**
 * Sets select value by option attribute (ex data-option)
 * @param pElementId - Selector id
 */
function selectDefaultByData(pElementId) {
    const selector = '#' + pElementId + ' option[data-option=default]';
    $(selector).attr('selected', 'selected');
}

/**
 * Select length (total options)
 * @param pElementId - Selector id
 * @returns {Window.jQuery}
 */
function selectLength(pElementId) {
    return $("select#" + pElementId + " option").length;
}

/**
 * Dynamic fill select
 * @param pIdSelect - Selector id
 * @param pOptions - Options to fill
 */
function selectRendered(pIdSelect, pOptions) {
    $('#'+pIdSelect).html(pOptions);
}

/**
 * Read only select
 * @param pIdSelect - Selector id
 */
function selectReadOnly(pIdSelect) {
    $('#' + pIdSelect + ' option:not(:selected)').attr('disabled', true);
}

/**
 * Show/Hide select2 (plugin)
 * @param container - Selector id
 * @param action - show or hide
 */
function select2ShowHide(container, action) {
    if (action.equalsIgnoreCase('hide')) {
        $('#' + container).children("span").attr("style", "display: none");
    } else {
        $('#' + container).children("span").removeAttr("style");
        $('#' + container).children("span").children("span").children("span").removeAttr("style");
    }
}

/**
 * Select2 to error
 * @param div - Container id
 */
function select2Error(div) {
    $('#' + div).children("span").children("span").children("span").attr("style", "border-color: #f8877f !important;");
}

/**
 * Select2 error clean
 * @param div - Container id
 */
function select2ErrorClean(div) {
    $('#' + div).children("span").children("span").children("span").removeAttr("style");
}

/**
 * Select2 error remove
 * @param pElementId - Selector id
 */
function select2ErrorRemove(pElementId) {
    const div = "div-" + pElementId;
    $('#' + div).children("span").children("span").children("span").removeAttr("style");
    fieldReset(pElementId);
}

/**
 * Gets select2 value
 * @param div - Selector id
 */
function select2Val(pElementId) {
    return $(`#${pElementId}`).select2("getValue");
}

/**
 * Sets select2 value
 * @param pElementId - Selector id
 * @param value - Value to set
 */
function select2SetVal(pElementId, value) {
    if (value != null && value != '') {
        $(`#${pElementId}`).getValue(value).trigger('change');
    } else {
        select2Clean(pElementId);
    }
}

/* Select2 Limpia valor y pone valor por defecto */
/**
 * Trigger change event on select2 and delete value
 * @param pElementId - Selector id
 */
function select2Clean(pElementId) {
    $(`#${pElementId}`).getValue(null).trigger('change');
}

/**
 * SelectPicker (plugin) set value
 * @param pIdSelect - Selector id
 * @param getValue - Value to set
 */
function selectPickerVal(pIdSelect, pVal) {
    $('#'+pIdSelect).selectpicker('getValue', pVal);
}

/**
 * SelectPicker (plugin) destroy
 * @param pIdSelect - Selector id
 */
function selectPicker(pIdSelect) {
    $('#'+pIdSelect).selectpicker('destroy');
    $('#'+pIdSelect).selectpicker();
}

/**
 * Dynamic fill selectPicker (plugin)
 * @param pIdSelect - Selector id
 * @param pOptions - Options to fill
 */
function selectPickerRendered(pIdSelect, pOptions) {
    selectRendered(pIdSelect, pOptions);
    $('#'+pIdSelect).selectpicker('destroy');
    $('#'+pIdSelect).selectpicker();
}

/**
 * Disabling selectPicker (plugin)
 * @param pIdSelect - Selector id
 */
function selectPickerDisabled(pIdSelect) {
    disabledOnly(pIdSelect);
    $('#'+pIdSelect).selectpicker('destroy');
    $('#'+pIdSelect).selectpicker();
}

/**
 * Enabling selectPicker (plugin)
 * @param pIdSelect - Selector id
 */
function selectPickerEnabled(pIdSelect) {
    available(pIdSelect);
    $('#'+pIdSelect).selectpicker('destroy');
    $('#'+pIdSelect).selectpicker();
}

/**
 * Resets selectPicker (plugin)
 * @param pIdSelect - Selector id
 */
function selectPickerReset(pIdSelect) {
    selectReset(pIdSelect);
    $('#'+pIdSelect).selectpicker('destroy');
    $('#'+pIdSelect).selectpicker();
}

/**
 * Disabling and reset selectPicker (plugin)
 * @param pIdSelect - Selector id
 */
function selectPickerResetDisabled(pIdSelect) {
    disabledOnly(pIdSelect);
    selectReset(pIdSelect);
    $('#'+pIdSelect).selectpicker('destroy');
    $('#'+pIdSelect).selectpicker();
}

/* Deshabilita un elemento */
function disabledOnly(pElementId) {
    $(`#${pElementId}`).prop("disabled", true);
}

/* Deshabilita un elemento y elimina su valor */
function disabled(pElementId) {
    $(`#${pElementId}`).getValue("");
    $(`#${pElementId}`).prop("disabled", true);
}

/* Habilita un elemento */
function available(pElementId) {
    $(`#${pElementId}`).prop("disabled", false);
    readOnlyFalse(pElementId);
}

/* Deshabilita un botón */
function btnDisabled(pElementId) {
    $(`#${pElementId}`).prop("disabled", true);
}

/* Habilita un botón */
function btnAvailable(pElementId) {
    $(`#${pElementId}`).prop("disabled", false);
}

/**
 * Button Status plugin
 */
(function($) {
	$.fn.btnStatus = function(options) {
		let defaults = {
			text: 'Aceptar',
			iconClass: 'fas fa-check',
			type: 'processing', //processing, loading, uploading, downloading
            animateInClass: 'animate__animated animate__fadeInRight',
            animateOutClass: 'animate__animated animate__fadeOutDown',
            message: {
				processing: 'Procesando...',
            	loading: 'Cargando...',
            	uploading: 'Subiendo...',
            	downloading: 'Descargando...'
			}
        };
        
        const btn_status_message = function() {
			let $text;
			switch (settings.type) { 
				case 'processing': 
					$text = $settings.message.processing;
					break;
				case 'loading': 
					$text = $settings.message.loading;
					break;
				case 'uploading':
					$text = $settings.message.uploading;
					break;
				case 'downloading': 
					$text = $settings.message.downloading;
					break		
				default:
					$text = $settingss.message.processing;
			}
			return $text;
		}
        
        const create_btn_status = function($btn) {
			const $divId = 'btn-st-' + $btn.prop('id');
			const $html = '<div id="'+$divId+'"><i class="'+$settings.iconClass+'"></i> <span>'+$settings.text+'</span></div>';
			
			$btn.addClass('btn-status');
			$btn.html('');
			$btn.append($html);
		};
		
		const btn_status = function ($btn) {
			const $btnId = $btn.prop('id');
			let $disabled;
			if(exists($btnId)) {
				const $divId = 'btn-st-' + $btnId;
				elemClassRemoveAll($divId);
				elemClassAdd($divId, $settings.animateOutClass);
				
				let $html;
				if($action == 'start') {
					let $text = btn_status_message();
					$html = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ' + $text;
					$disabled = true;
				} else {
					$html = '<div id="'+$divId+'"><i class="'+$settings.iconClass+'"></i> <span>'+$settings.text+'</span></div>';
					$disabled = false;
				}
				
				setTimeout(function() {
					elemClassRemove($divId, $settings.animateOutClass);
					textClear($divId);
					$('#'+$divId).append($html);
					elemClassAdd($divId, $settings.animateInClass);
					$btn.prop("disabled", $disabled);
				}, 200);
			}
		}
        
        let $action;
        const $settings = $.extend({}, defaults, options);
        create_btn_status($(this));
        
        /* Functions */        
        this.start = function() {
			$action = 'start';
			btn_status($(this));
		};
		this.destroy = function() {
			$action = 'destroy';
			btn_status($(this));
		}
		
		/* Event listeners */
	    // Unbind existing events in case that the plugin has been initialized before
	    $(document).off('.btn_status');
	    
	    // Click
	    $(document).on('click.btn_status', '.btn-status', function(event) {
			btn_status($(this));
	    });
	}
})(jQuery);

/* Hace un elemento de solo lectura y elimina el valor */
function readOnly(pElementId) {
    $(`#${pElementId}`).getValue("");
    $(`#${pElementId}`).prop("readonly", true);
}

/* Hace un elemento de solo lectura y mantiene el valor */
function readOnlyTrue(pElementId) {
    $(`#${pElementId}`).prop("readonly", true);
}

/* Elimina la propiedad de solo lectura de un elemento */
function readOnlyFalse(pElementId) {
    $(`#${pElementId}`).prop("readonly", false);
}

/* Posicionamiento */
function scrollToElement(pElementId) {
    if (pElementId != null && exists(pElementId)) {
        $('html,body').animate({
            scrollTop: $(`#${pElementId}`).offset().top - 100
        }, 1500);
    }
}

function scrollTop() {
	const $selector = jsOptions.pageHeadSelector;
    scrollToElement($selector);
}

/* Base64 Encode */
function b64Encode(pString) {
    if (pString == null) {
        return "";
    }
    return Base64.encode(String(pString));
}

/* Base64 Decode */
function b64Decode(pString) {
    if (pString == null) {
        return "";
    }
    return Base64.decode(pString);
}

/* Valor mínimo en un input */
function elementSetMinDefault(pElementId) {
    $(`#${pElementId}`).attr('min', 0);
}

/* Valor mínimo en un input */
function elementSetMin(pElementId, pValue) {
    $(`#${pElementId}`).prop('min', parseInt(pValue));
}

/* Valor máximo en un input */
function elementSetMax(pElementId, pValue) {
    $(`#${pElementId}`).attr('max', parseInt(pValue));
}

/**
 * Returns true if the input element has the type 'checkbox'
 *
 * @param pElementId Element id
 * @return true if the input element has the type 'checkbox', false otherwise
 */
const isCheckbox = (pElementId) => {
    return $(`#${pElementId}`).is(':checkbox')
}

/**
 * Change the value of a checkbox to true (checked = true)
 * @param pElementId Element id
 */
const checked = (pElementId) => {
    $(`#${pElementId}`).prop('checked', true);
}

/**
 * Change the value of a checkbox to false (checked = false)
 * @param pElementId Element id
 */
const unchecked = (pElementId) => {
    $(`#${pElementId}`).prop('checked', false);
}

/**
 * Returns the value (checked) of a checkbox
 *
 * @param pElementId Element id
 * @return true if checkbox is checked, false otherwise
 */
function isChecked(pElementId) {
    return $(`#${pElementId}`).prop("checked");
}

/* Cambia la clase de un checkbox (switchery plugin) */
function switchery(pElementId) {
	const elem = document.getElementById(pElementId);
    return new Switchery(elem, {color: '#0f99f3'});
}

/**
 * Switchery plugin (check on/off)
 * @example
 * Check the switch -> switcheryChecked(mySwitch, true);
 * Unchecks the switch -> switcheryChecked(mySwitch, false);
*/
function switcheryChecked(switchElement, checkedBool) {
    if ((checkedBool && !switchElement.isChecked()) || (!checkedBool && switchElement.isChecked())) {
        switchElement.setPosition(true);
        switchElement.handleOnchange(true);
    }
}

/* Switchery plugin (Habilitado)  */
function switcheryEnabled(switchElement) {
    switchElement.enable();
}

/* Switchery plugin (Deshabilitado)  */
function switcheryDisabled(switchElement) {
    switchElement.disable();
}

/* Devuelve si un arreglo está vacio */
function isArrayEmpty(pArray) {
    if (Array.isArray(pArray)) {
        return pArray.length == 0;
    }
    return true;
}

/* Devuelve si un valor se encuentra dentro de arreglo */
function existsElementInArray(pArray, pValue) {
    if (Array.isArray(pArray)) {
        const indexElement = $.inArray(pValue, pArray);
        return indexElement >= 0 ? true : false;
    }
}

/* Devuelve la posicion de un elemento si se encuentra dentro de arreglo */
function elementPosInArray(pArray, pValue) {
    if (Array.isArray(pArray)) {
        const indexElement = $.inArray(pValue, pArray);
        return indexElement >= 0 ? indexElement : null;
    }
}

/* Elimina un elemento dentro de un arreglo y devuelve el nuevo arreglo */
function removeFromArray(pArray, pElement) {
    if (Array.isArray(pArray)) {
        const indexElement = $.inArray(pElement, pArray);
        if (indexElement >= 0)
            pArray.splice(indexElement, 1);
        return pArray;
    }
    return pArray;
}

/* Elimina un elemento por su posicion dentro de un arreglo y devuelve el nuevo arreglo */
function removeFromArrayByIndex(pArray, pIndex) {
    if (Array.isArray(pArray)) {
        if (pIndex >= 0 && pIndex < pArray.length) {
            pArray.splice(pIndex, 1);
        }
        return pArray;
    }
    return pArray;
}

Array.prototype.remove = function() {
    const arg = arguments[0];
    const indexElement = $.inArray(arg, this);
    if (indexElement >= 0) {
		this.splice(indexElement, 1);	
	}
    return this;
};

Array.prototype.removeByIndex = function() {
    const index = arguments[0];
    if (index >= 0 && index < this.length) {
        this.splice(index, 1);
    }
    return this;
};

/* Activa tab (aplicando la clase active) */
function activateTab(pTabs, pTab) {
    if (Array.isArray(pTabs)) {
        let li = null;
        let a = null;

		for (let tab of pTabs) {
            li = 'li-' + tab;
            a = 'a-' + tab;

            elemClassRemove(tab, 'active');
            elemClassRemove(li, 'active');
            elemClassRemove(a, 'active');
        }

        li = 'li-' + pTab;
        a = 'a-' + pTab;

        elemClassAdd(pTab, 'active');
        elemClassAdd(li, 'active');
        elemClassAdd(a, 'active');
    }
}

/*===== CSS =====*/
/* Devuelve la clase que tiene un elemento */
function getElemClass(pElementId) {
    return $('#' + pElementId).attr('class');
}

/* Devuelve si un elemento tiene una clase */
function hasClass(pElementId, pClass) {
    const selector = elementSelector(pElementId); 
    return $(selector).hasClass(pClass);
}

/* Agrega una clase a un elemento */
function elemClassAdd(pElementId, pClass) {
	if(exists(pElementId)) {
	    if (!hasClass(pElementId, pClass)) {
	        const selector = elementSelector(pElementId);
	        $(selector).addClass(pClass);
	    }
    }
}

/* Elimina una clase de un elemento */
function elemClassRemove(pElementId, pClass) {
	if(exists(pElementId)) {    
	    if (hasClass(pElementId, pClass)) {
	        const selector = elementSelector(pElementId);
	        $(selector).removeClass(pClass);
	    }
    }
}

/* Cambia una clase por otra en un elemento */
function elemClassChange(pElementId, pClass, pNewClass) {
	if(exists(pElementId)) {
	    if (hasClass(pElementId, pClass)) {
	        elemClassRemove(pElementId, pClass);
	    }
	    elemClassAdd(pElementId, pNewClass);
    }
}

/* Elimina todas las clases de un elemento */
function elemClassRemoveAll(pElementId) {
	if(exists(pElementId)) {
    	$(`#${pElementId}`).removeClass();
    }
}

/* Agrega clase de error a un elemento */
function errorClass(pElementId) {
	if(exists(pElementId)) {
		if (jsOptions.bootstrapVersion === 4 || jsOptions.bootstrapVersion === 5) {
	        elemClassAdd(pElementId, 'is-invalid');
	    } else if (jsOptions.bootstrapVersion === 3) {
	        elemClassAdd(pElementId, 'has-error');
	    }	
	}
}

/* Elimina la clase de error a un elemento */
function errorClassRemove(pElementId) {
	if(exists(pElementId)) {
	    if (jsOptions.bootstrapVersion === 4 || jsOptions.bootstrapVersion === 5) {
	        elemClassRemove(pElementId, 'is-invalid');
	    } else if (jsOptions.bootstrapVersion === 3) {
	        elemClassRemove(pElementId, 'has-error');
	    }
    }
}

/* Devuelve si un elemento tiene la clase has-error/is-invalid */
function hasErrorClass(pElementId) {
	if(exists(pElementId)) {
    	return $('#' + pElementId).hasClass('has-error') || $('#' + pElementId).hasClass('is-invalid');
    } else {
		return false;
	}
}

/* Agrega clase required a un elemento */
function requiredClass(pElementId) {
    elemClassAdd(pElementId, 'required');
}

/* Elimina la clase required a un elemento */
function requiredClassRemove(pElementId) {
    elemClassRemove(pElementId, 'required');
}

/* Agrega la clase de error (invalid-feedback/form-message light) al elemento small */
function smallErrorClass(pElementId) {
	if(exists(pElementId)) {
	    if (jsOptions.bootstrapVersion === 4 || jsOptions.bootstrapVersion === 5) {
	        elemClassAdd(pElementId, 'invalid-feedback');
	    } else if (jsOptions.bootstrapVersion === 3) {
	        elemClassAdd(pElementId, 'form-message light');
	    }
    }
}

/* Elimina la clase de error al elemento small */
function smallErrorClassRemove(pElementId) {
	if(exists(pElementId)) {
	    if (jsOptions.bootstrapVersion === 4 || jsOptions.bootstrapVersion === 5) {
	        elemClassRemove(pElementId, 'invalid-feedback');
	    } else if (jsOptions.bootstrapVersion === 3) {
	        elemClassRemove(pElementId, 'form-message light');
	    }
    }
}

/* Agrega clase hidden a un elemento */
function hiddenClass(pElementId) {
    elemClassAdd(pElementId, 'hidden');
}

/* Elimina la clase hidden a un elemento */
function hiddenClassRemove(pElementId) {
    elemClassRemove(pElementId, 'hidden');
}

/* Typeahead plugin (Habilitado) */
function availableTypeahead(pField, pName, pDataSets) {
    $('#' + pField).typeahead({
        name: pName,
        source: pDataSets
    });
}

/* Typeahead plugin (Destroy) */
function resetTypeahead(pField) {
    $('#' + pField).typeahead('destroy');
}

/* Convierte texto en minúsculas */
function lowerCase(pValue) {
    if (pValue != null && pValue != '') {
        return pValue.toLowerCase();
    }
    return pValue;
}

/* Convierte texto en mayúsculas */
function upperCase(pValue) {
    if (pValue != null && pValue != '') {
        return pValue.toUpperCase();
    }
    return pValue;
}

/*-----VALIDACIONES-----*/
/**
 * Validates alphaNumeric
 */
function isAlphaNumeric (value) {
    const re = /^[a-zA-Z0-9_-]+$/;
    return re.test(value);
}

/**
 * Validates numbers
 */
function isNumeric(value) {
    const re = /^[-+]?[0-9]+$/;
    return re.test(value);
}

/**
 * Validates emails
 */
function isEmail(value) {
   	const email = /^[a-zA-Z0-9._%\-+]+@[а-яА-Яa-zA-Z0-9.-]+\.[а-яА-Яa-zA-Z]+$/;
	return email.test(value);
}

/**
 * Validates decimals
 */
function isDecimal(pVal) {
	const groupSymbol = ',';
	const decimalSymbol = '.';
    if (typeof pVal === 'string') pVal = pVal.replace(/\s+/g, '').replace(groupSymbol, '').replace(decimalSymbol, '.');
    return (typeof pVal === 'number' || (typeof pVal === 'string' && pVal !== '')) && !isNaN(Number(pVal));
}

/**
 * Validates ip address
 */
const isIpAddress = (ip) => {
    const re = new RegExp('^' +
                          '((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.) {3}' +
                          '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)' +
                          '$');
    return re.test(ip);
}

/**
 * Accepts only numbers
 */
const onlyNumber = (evt) => {
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 8 && charCode != 0 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

/**
 * Accepts letters only (including blank space)
 */
const onlyAlfa = (event) => {
    const regex = new RegExp("^[a-zA-Z ]+$");
    const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
    return true;
}

/**
 * Validates the maximum length of a numeric-only field
 */
const onlyNumberLength = (evt, max, length) => {
    if (onlyNumber(evt)) {
        if (length < max) {
            return true;
        }
    }
    return false;
}

/**
 * Validates the maximum length of a letter-only field
 */
const onlyAlfaLength = (evt, max, length) => {
    if (onlyAlfa(evt)) {
        if (length < max) {
            return true;
        }
    }
    return false;
}

/**
 * Error classes applied to an element
 */
const elementError = (field) => {
    const fieldObj = {...$_FIELD.instance(field)};
    displayError(fieldObj);
}

/**
 * Error classes applied to an element
 */
const fieldError = ({field, message, scroll, container}) => {
    if(message == null) {
        message = jsOptions.requiredMessage;
    }

    const fieldObj = {...$_FIELD.scInstance({field: field, message: message, scroll: scroll, container: container})};
    displayError(fieldObj);
}

/**
 * Error classes applied to an element
 */
const fieldErrorMC = ({field, message, messageContainer}) => {
    const fieldObj = {...$_FIELD.mcInstance(field, message, messageContainer)};
    displayError(fieldObj);
}

/**
 * Display error
 * @param fieldObj - An instance of $_FIELD
 * @see $_FIELD
 */
const displayError = (fieldObj) => {
    if(fieldObj != null) {
        /* Adding class 'is-invalid/has-error' to 'div/input/select' */
        if (jsOptions.bootstrapVersion === 4 || jsOptions.bootstrapVersion === 5) {
            errorClass(fieldObj.field);

            if(exists(fieldObj.divFile)) {
                errorClass(fieldObj.divFile);
            }

            if(exists(fieldObj.file)) {
                errorClass(fieldObj.file);
            }

            if(exists(fieldObj.inputGroup)) {
                errorClass(fieldObj.inputGroup);
            }

            /* Validation for the select element with the 'bootstrap-select' class */
            if (jsOptions.bootstrapVersion === 5) {
                bootstrapSelectBS5Validate(fieldObj);
            }
        } else if (jsOptions.bootstrapVersion === 3) {
            errorClass(fieldObj.div);
        }

        /* Adding class 'required' to label */
        requiredClass(fieldObj.label);

        /* Displaying error in small's tag */
        if(fieldObj.message != null) {
            setText(fieldObj.small, fieldObj.message);
            smallErrorClass(fieldObj.small);
        }

        /* select2 plugin */
        if (hasClass(fieldObj.field, 'select2-hidden-accessible')) {
            select2Error(fieldObj.div);
        }

        /* niceSelect plugin */
        if ($.fn.niceSelect) {
            $('select').niceSelect('update');
        }
    }
}

/**
 * Validates when the input element has the type select with the class 'bootstrap-select' and bootstrap version is 5
 * @param fieldObj - An instance of $_FIELD
 * @see $_FIELD
 */
const bootstrapSelectBS5Validate = (fieldObj) => {
    if(isSelect(fieldObj.field)) {
        const parent = $(`#${fieldObj.field}`).parent();
        if(hasClass(fieldObj.field, 'is-invalid') && parent.hasClass('bootstrap-select')) {
            errorClass(fieldObj.div);
        }
    }
}

/**
 * Focus on element with error
 */
function fieldErrorFocusOn(field, container = null) {
    const divScroll = (container == null) ? "div-" + field : container;
    /* Focus on the required element */
    elementFocus(field);
    /* Scroll to element */
    if (exists(divScroll)) {
        scrollToElement(divScroll);
    }
}

/**
 *  Validates the required fields within a form
 *  @param formId - Form id
 *  @example Add data-field-required="true" to all of required files
 *  @return true if all required fields have value; otherwise it returns false
 */
function validateForm(formId) {
    if (formId != null) {
        const selector = 'form#' + formId + ' :input';
        const requiredFields = [];
        $(selector).each(function () {
            const input = $(this).prop('type');
            if (existsElementInArray(DEFAULT_FORM_TYPES, input)) {
                if ($(this).filter("[data-field-required='true']").length) {
					const id = this.id;
					if(id != '') {
						requiredFields.push(this.id);	
					}
                }
            }
        });
        return validateFields({fields: requiredFields, message: jsOptions.requiredMessage});
    }
    return false;
}

/**
 * Validates required elements (1 or N)
 */
function validateFields({fields, message, scroll = true, container}) {
    if(fields != null) {
        if(message == null) {
            message = jsOptions.requiredMessage;
        }

        let fieldArray = [];
        if(Array.isArray(fields)) {
            fieldArray = [...fields];
        } else {
            fieldArray.push(fields);
        }

        const errorFields = [];
        fieldArray.forEach(f => {
           if(!hasValue(f)) {
               errorFields.push(f);
           } else {
               fieldReset(f);
           }
        });

        if(!isArrayEmpty(errorFields)) {
            errorFields.forEach(f => fieldError({field: f, message: message, scroll: scroll, container: container}));
            const fieldFocus = errorFields[0];
            elementFocus(fieldFocus);
            if(scroll) {
                fieldErrorFocusOn(fieldFocus, container);
            }
            return false;
        }
        return true;
    }
    return false;
}

/* Forzar la clase error en un elemento (group) */
function inputGroupValidationError(pGroupId, pMessage = null, pField1 = null, pField2 = null, pMessageContent = null) {
    var div = "div-" + pGroupId;
    var label = "label-" + pGroupId;
    var small = "small-" + pGroupId;
    if (pMessageContent != null) {
        small = pMessageContent;
    }

    /* Agregando clase 'is-invalid/has-error' al div/input/select */
    if (jsOptions.bootstrapVersion === 4 || jsOptions.bootstrapVersion === 5) {
        errorClass(field);
    } else if (jsOptions.bootstrapVersion === 3) {
        errorClass(div);
    }

    /* Agregando la clase 'required' al label */
    requiredClass(label);

    /* Agregando la descripcion del error */
    if (pMessage != null) {
        setText(small, pMessage);
        smallErrorClass(small);
    }

    if (pField1) {
        if (hasClass(pField1, 'select2-hidden-accessible')) {
            select2Error(div);
        }
    }

    if (pField2 != null) {
        if (hasClass(pField2, 'select2-hidden-accessible')) {
            select2Error(div);
        }
    }
}

/**
 * Display tag with error message
 * @param pElementId - Selector id
 * @param pTagMessage - Error message to display
 * @param pPosition - Tag position
 */
function elementTagError(pElementId, pTagMessage, pPosition = null, pClassName = null, pStyle = null) {
    elementError(pElementId);
    elementTagShow(pElementId, pTagMessage, pPosition, pClassName, pStyle);
}

/**
 * Display tooltip with error message
 * @param pElementId - Selector id
 * @param pTooltipMessage - Error message to display
 */
function elementTooltipError(pElementId, pTooltipMessage) {
    elementError(pElementId);
    tooltipShow(pElementId, pTooltipMessage);
}

/**
 * Display placeholder with error message
 * @param pElementId - Selector id
 * @param placeholderMessage - Error message to display
 */
function elementPlaceholderError(pElementId, placeholderMessage) {
    elementError(pElementId);
    elementAttr(pElementId, 'placeholder', placeholderMessage);
}

/**
 * Validates the length of an element
 */
function validateLength(pElementId, pValue) {
    return getElementLength(pElementId) <= pValue ? true : false;
}

/**
 * Validates the min length of an element
 */
function validateMinLength(pElementId, pValue) {
    return getElementLength(pElementId) >= pValue ? true : false;
}

/**
 * Validates the min and max length of an element
 */
function validateMinMaxLength(pElementId, pValueMin, pValueMax) {
    return (validateMinLength(pElementId, pValueMin) && validateLength(pElementId, pValueMax)) ? true : false;
}

/**
 * Bootstrap 4 input file
 */
$('.custom-file-input').on('change', function () {
    const fileName = $(this).getValue().split('\\').pop();
    $(this).next('.form-control-file').addClass("selected").html(fileName);
});

/**
 * Validates an input of type file
 */
function fileValidation(pElementId, pArrayExtension, pMaxSize, pExtErrorMsg, pSizeErrorMsg) {
    const file = $(`#${pElementId}`)[0].files[0];
    const fileName = file.name;
    const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
    const fileSize = file.size;

    if (fileName != null && fileName != "") {
        /* validating ext */
        const isValidExtension = fileExtensionValidation({fileExtension: fileExtension, arrayExtension: pArrayExtension});
        /* Validating size */
        const isValidSize = fileSizeValidation({maxSize: maxSize, fileSize: fileSize});

        let errorMessage;
        let isValidFile = true;
        if (!isValidExtension) {
            isValidFile = false;
            errorMessage = pExtErrorMsg;
        } else if (!isValidSize) {
            isValidFile = false;
            errorMessage = pSizeErrorMsg;
        }

        if (!isValidFile) {
            fieldError({field: pElementId, message: errorMessage});
            fieldErrorFocusOn(pElementId);
            return false;
        }
    }
    fieldReset(pElementId);
    return true;
}

/**
 *  Validates file ext
 */
function fileExtensionValidation({fileExtension, arrayExtension}) {
    if (!existsElementInArray(arrayExtension, fileExtension)) {
        return false;
    }
    return true;
}

/**
 * Validates file size
 */
function fileSizeValidation({maxSize, fileSize}) {
    return parseInt(maxSize) >= parseInt(fileSize) ? true : false;
}

/*-----UI-----*/
/**
 * Processing info
 * pText - Text to display
 * @example Call processing('Loading info...')
 */
function processing(pText) {
    pageMsgHide(); //Hide global messages
    setText('static-modal-text', pText);
    $('#static-modal').modal('show');
}

/**
 * Processing end
 * @example Call processingEnd()
 */
const processingEnd = () => {
    $('#static-modal').modal('hide');
}

/**
 * Confirmation modal show
 * @param confirmationText - Confirmation text in modal
 * @param showConfirmationRisk - If it's not null, confirmation risk section will be displayed in the modal
 * @example Call confirmationModal('Text to display') or confirmationModal('Text to display', true)
 */
const confirmationModal = function(confirmationText, showConfirmationRisk = false) {
    if(confirmationText == null || confirmationText == '') {
        confirmationText = jsOptions.confirmationText;
    }

    setText('span-confirmation-modal-text', confirmationText);
    if (showConfirmationRisk) {
        elementShow('confirmation-modal-risk');
    } else {
        elementHide('confirmation-modal-risk');
    }

    $("#confirmation-modal").modal('show');
}

/**
 * Confirmation modal hide
 * @example Call confirmationModalHide()
 */
const confirmationModalHide = () => {
    $("#confirmation-modal").modal('hide');
}

/**
 * Processing panel
 * @param pId - Selector id
 * @param pText - Text to display
 * @example Call processingPanel(selectorId, 'Text to show')
 * @requires jquery.blockUI.min.js
 */
function processingPanel(pId, pText) {
    pageMsgHide(); //Hide global messages

    $('#' + pId).block({
        message: '<div><i class="fas fa-circle-notch fa-spin" style="margin: 0 auto;"></i><h6 class="text-muted">' + pText + '</h6></div>', /*fas fa-spinner fa-spin*/
        css: {
            border: 'none',
            backgroundColor: 'initial',
            color: '#acb4b8'
        },
        overlayCSS: {
            'background-color': 'rgba(255, 255, 255, 0.75)'
        }
    });
}

/**
 * Processing panel end
 * @param pId - Selector id
 * @example Call processingPanelEnd(selectorId)
 * @requires jquery.blockUI.min.js
 */
function processingPanelEnd(pId) {
    $('#' + pId).unblock();
}

/*-----PAGINATOR-----*/
/**
 * Ajax base paginator object
 * @param paginatorId - Unique suffix for paginate selector
 * @param page - Page object
 * @param locale - Locale (default $_LOCALE)
 * @param methodName - Unique paginate method name. It must be defined when the same page has more than one pagination
 * @param firstIcon - Icon (HTML <i> tag) for the first page (default <i class="fad fa-angle-double-left"></i>)
 * @param beforeIcon - Icon (HTML <i> tag) for the previous page (default <i class="fad fa-angle-left"></i>)
 * @param nextIcon - Icon (HTML <i> tag) for the next page (default <i class="fad fa-angle-right"></i>)
 * @param lastIcon - Icon (HTML <i> tag) for the last page (default <i class="fad fa-angle-double-right"></i>)
 * @see $_LOCALE
 */
const $_PAGINATOR_BASE = {
    paginatorId: '',
    page: null,
    locale: jsOptions.location,
    firstIcon: '',
    beforeIcon: '',
    nextIcon: '',
    lastIcon: '',
    setPaginatorId(paginatorId) {
        this.paginatorId = paginatorId;
    },
    setPage(page) {
        this.page = page;
    },
    setLocale(locale) {
        this.locale = locale;
        if(this.locale == null) {
            this.locale = $_LOCALE;
        }
    },
    setFirstIcon(firstIcon) {
        this.firstIcon = firstIcon;
    },
    setBeforeIcon(beforeIcon) {
        this.beforeIcon = beforeIcon;
    },
    setNextIcon(nextIcon) {
        this.nextIcon = nextIcon;
    },
    setLastIcon(lastIcon) {
        this.lastIcon = lastIcon;
    },
    instance({paginatorId, locale, page}) {
        this.setPaginatorId(paginatorId);
        this.setLocale(locale);
        this.setPage(page);
        return this;
    },
    instanceFull({paginatorId, locale, page, firstIcon, beforeIcon, nextIcon, lastIcon}) {
        this.setPaginatorId(paginatorId);
        this.setLocale(locale);
        this.setPage(page);
        this.setFirstIcon(firstIcon);
        this.setBeforeIcon(beforeIcon);
        this.setNextIcon(nextIcon);
        this.setLastIcon(lastIcon);
        return this;
    }
}

/**
 * Ajax paginator object with custom paginator method name
 * @param paginatorBase - $_PAGINATOR_BASE
 * @param methodName - Paginator method name
 * @see $_PAGINATOR_BASE
 */
const $_PAGINATOR_METHOD = {
    paginatorBase: {... $_PAGINATOR_BASE},
    methodName: '',
}

/**
 * Ajax paginator object
 * @example const paginatorObj = {...$_PAGINATOR.instance($_PAGINATOR_BASE)};
 * @example const paginatorObj = {...$_PAGINATOR.instanceFull($_PAGINATOR_METHOD)};
 * @example const paginatorObj = {...$_PAGINATOR.instanceIcon($_PAGINATOR_BASE)};
 * @example const paginatorObj = {...$_PAGINATOR.instanceIconFull($_PAGINATOR_METHOD)};
 * @see $_PAGINATOR_BASE
 * @see $_PAGINATOR_METHOD
 * @see $_LOCALE
 */
const $_PAGINATOR = {
    paginatorId: '',
    page: null,
    locale: jsOptions.location,
    methodName: 'paginate',
    divId: '',
    ulId: '',
    liFirstId: '',
    liBeforeId: '',
    liPagesId: '',
    liNextId: '',
    liLastId: '',
    firstTitle: 'Inicio',
    beforeTitle: 'Anterior',
    nextTitle: 'Siguiente',
    lastTitle: 'Fin',
    firstIcon: '<i class="fad fa-angle-double-left"></i>',
    beforeIcon: '<i class="fad fa-angle-left"></i>',
    nextIcon: '<i class="fad fa-angle-right"></i>',
    lastIcon: '<i class="fad fa-angle-double-right"></i>',
    liFirstClass: '',
    firstPage: 0,
    liFirstContent: '',
    liBeforeClass: '',
    previousPage: '',
    liBeforeContent: '',
    liNextClass: '',
    nextPage: '',
    liNextContent: '',
    liLastClass: '',
    lastPage: '',
    lastContent: '',
    spanPageSize: 'span-page-size',
    fillData() {
        this.divId = `div-pagination-${this.paginatorId}`;
        this.ulId = `ul-pagination-${this.paginatorId}`;
        this.liFirstId = `li-first-${this.paginatorId}`;
        this.liBeforeId = `li-before-${this.paginatorId}`;
        this.liPagesId = `li-pages-${this.paginatorId}`;
        this.liNextId = `li-next-${this.paginatorId}`;
        this.liLastId = `li-last-${this.paginatorId}`;
        this.spanPageSize = `${this.paginatorId}-span-page-size`;
    },
    fillPage() {
        if (this.page != null) {
            //First page
            this.liFirstClass = (this.page.first) ? 'page-item disabled' : 'page-item';
            this.liFirstContent = (this.page.first) ? '<a class="page-link"><span>' + this.firstIcon + '</span></a>' : '<a class="page-link" onclick=' + this.methodName + '("' + this.firstPage + '") title="' + this.firstTitle + '">' + this.firstIcon + '</a>';
            //Previous page
            this.liBeforeClass = (!this.page.hasPrevious) ? 'page-item disabled' : 'page-item';
            this.previousPage = (this.page.hasPrevious) ? parseInt(this.page.number) - 1 : '';
            this.liBeforeContent = (!this.page.hasPrevious) ? '<a class="page-link"><span>' + this.beforeIcon + '</span></a>' : '<a class="page-link" onclick=' + this.methodName + '("' + this.previousPage + '") title="' + this.beforeTitle + '">' + this.beforeIcon + '</a>';
            //Next page
            this.liNextClass = !this.page.hasNext ? 'page-item disabled' : 'page-item';
            this.nextPage = this.page.hasNext ? parseInt(this.page.number) + 1 : '';
            this.liNextContent = (!this.page.hasNext) ? '<a class="page-link"><span>' + this.nextIcon + '</span></a>' : '<a class="page-link" onclick=' + this.methodName + '("' + this.nextPage + '") title="' + this.nextTitle + '">' + this.nextIcon + '</a>';
            //Last page
            this.liLastClass = this.page.last ? 'page-item disabled' : 'page-item';
            this.lastPage = this.page.totalPages - 1;
            this.lastContent = (this.page.last) ? '<a class="page-link"><span>' + this.lastIcon + '</span></a>' : '<a class="page-link" onclick=' + this.methodName + '("' + this.lastPage + '") title="' + this.lastTitle + '">' + this.lastIcon + '</a>';
        }
    },
    setPaginatorId(paginatorId) {
        this.paginatorId = paginatorId;
        this.fillData();
    },
    setPage(page) {
        this.page = page;
        this.fillPage();
    },
    setLocale(locale) {
        this.locale = locale;
        if(this.locale == null) {
            this.locale = $_LOCALE;
        }
        if (this.locale.equalsIgnoreCase('es_MX')) {
            this.firstTitle = 'Inicio';
            this.beforeTitle = 'Anterior';
            this.nextTitle = 'Siguiente';
            this.lastTitle = 'Fin';
        } else if (this.locale.equalsIgnoreCase('en_US')) {
            this.firstTitle = 'First';
            this.beforeTitle = 'Previous';
            this.nextTitle = 'Next';
            this.lastTitle = 'Last';
        }
    },
    setMethodName(methodName) {
        this.methodName = this.methodName + methodName;
    },
    setFirstIcon(firstIcon) {
        this.firstIcon = firstIcon;
    },
    setBeforeIcon(beforeIcon) {
        this.beforeIcon = beforeIcon;
    },
    setNextIcon(nextIcon) {
        this.nextIcon = nextIcon;
    },
    setLastIcon(lastIcon) {
        this.lastIcon = lastIcon;
    },
    setSpanPageSize(spanPageSize) {
        this.spanPageSize = spanPageSize;
    },
    instance(paginatorBase) {
        this.setPaginatorId(paginatorBase.paginatorId);
        this.setLocale(paginatorBase.locale);
        this.setPage(paginatorBase.page);
        return this;
    },
    instanceFull(paginatorMethod) {
        this.setMethodName(paginatorMethod.methodName);
        this.setPaginatorId(paginatorMethod.paginatorBase.paginatorId);
        this.setLocale(paginatorMethod.paginatorBase.locale);
        this.setPage(paginatorMethod.paginatorBase.page);
        return this;
    },
    instanceIcon(paginatorBase) {
        this.setPaginatorId(paginatorBase.paginatorId);
        this.setLocale(paginatorBase.locale);
        this.setFirstIcon(paginatorBase.firstIcon);
        this.setBeforeIcon(paginatorBase.beforeIcon);
        this.setNextIcon(paginatorBase.nextIcon);
        this.setLastIcon(paginatorBase.lastIcon);
        this.setPage(paginatorBase.page);
        return this;
    },
    instanceIconFull(paginatorMethod) {
        this.setMethodName(paginatorMethod.methodName);
        this.setPaginatorId(paginatorMethod.paginatorBase.paginatorId);
        this.setLocale(paginatorMethod.paginatorBase.locale);
        this.setFirstIcon(paginatorMethod.paginatorBase.firstIcon);
        this.setBeforeIcon(paginatorMethod.paginatorBase.beforeIcon);
        this.setNextIcon(paginatorMethod.paginatorBase.nextIcon);
        this.setLastIcon(paginatorMethod.paginatorBase.lastIcon);
        this.setPage(paginatorMethod.paginatorBase.page);
        return this;
    }
};

/**
 * Ajax paginator
 * @param paginatorObj - Instance of $_PAGINATOR
 * @example Call paginator(paginatorObj)
 * @see $_PAGINATOR
 */
function paginator(paginatorObj) {
    $('#' + paginatorObj.divId).html("");
    const page = paginatorObj.page;
    if (page != null && page.hasContent) {
        $('#' + paginatorObj.divId).append(
            '<ul id="' + paginatorObj.ulId + '" class="pagination justify-content-center"> ' +
            /* First */
            '<li id="' + paginatorObj.liFirstId + '" class="' + paginatorObj.liFirstClass + '">' + paginatorObj.liFirstContent + '</li> ' +
            /* Previous */
            '<li id="' + paginatorObj.liBeforeId + '" class="' + paginatorObj.liBeforeClass + '">' + paginatorObj.liBeforeContent + '</li> ' +
            '</ul> '
        );

        $('#' + paginatorObj.ulId).append(
            '<li class="active"><a class="page-link"><span>' + page.pageInfo + '</span></a></li>'
        );

        $('#' + paginatorObj.ulId).append(
            /* Next */
            '<li id="' + paginatorObj.liNextId + '" class="' + paginatorObj.liNextClass + '">' + paginatorObj.liNextContent + '</li> ' +
            /* End */
            '<li id="' + paginatorObj.liLastId + '" class="' + paginatorObj.liLastClass + '">' + paginatorObj.lastContent + '</li>'
        );
    }
}

function checkPaginateSize({selector, paginateSize}) {
    if (selector != null && paginateSize != null) {
		const liPage = `${selector}-li-pag-size-${paginateSize}`;
        
        elemClassAdd(liPage, 'text-muted');
        setText($_PAGINATOR.spanPageSize, paginateSize);
        
        for (let [key, value] of $_LI_PAGE_SIZE_MAP) {
            if (key === paginateSize && liPage.contains(value)) {
                elementPropertyAdd(liPage, 'opacity', '0.3');
            } else {
				const item = `${selector}-${value}`;
                elemClassAdd(item, 'text-muted');
                elementPropertyAdd(item, 'opacity', '');
            }
        }
    }
}

function checkPaged(liPaginate, liName, paginateSize, field) {
    if (paginateSize != null) {
        elemClassAdd(liName, 'text-muted');
		for (let item of liPaginate) {
            if (item === liName) {
                elementPropertyAdd(item, 'opacity', '0.3');
                setText(field, paginateSize);
            } else {
                elemClassAdd(item, 'text-muted');
                elementPropertyAdd(item, 'opacity', '');
            }
        }
    } else {
        for (let item of liPaginate) {
            elemClassAdd(item, 'text-muted');
            elementPropertyAdd(item, 'opacity', '');
        }
    }
}

/**
 * Display paginator
 * @param $page - Instance of $_PAGINATOR
 * @param $selector - Unique suffix for paginate selector
 * @param $pageSize - Page size 
 * @example Call paginationShow($page, $selector, $pageSize)
 * @see $_PAGINATOR
 */
const paginationShow = function({page, selector, pageSize}) {
	if (page != null) {
		var pageRecords = page.pageRecords;
		setText(`${selector}-page-records`, pageRecords);

		const paginatorBase = {...$_PAGINATOR_BASE.instance({paginatorId: selector, page: page})};
		const paginatorObj = {...$_PAGINATOR.instance(paginatorBase)};
		paginator(paginatorObj);
	
		elementShow(`div-pagination-${selector}-container`);
		checkPaginateSize({selector: selector, paginateSize: pageSize});
	} else {
		elementHide(`div-pagination-${selector}-container`);
	}
}

/**
 * Hide paginator
 * @param $selector - Unique suffix for paginate selector
 * @example Call paginationHidden($selector)
 */
const paginationHidden = function($selector) {
	$(`#div-pagination-${$selector}`).html("");
	hiddenClass(`div-pagination-${$selector}-container`);
}

/*-----DATE&TIME-----*/
let SYSTEM_CURRENT_DATE = null;
let SYSTEM_DATE = null;
let SYSTEM_YEAR = null;
let SYSTEM_YEAR_2D = null;
let SYSTEM_MONTH = null;
let SYSTEM_TODAY = null;
let SYSTEM_DATE_FORMAT = null;
let SYSTEM_DATE_TIME_CHARACTER = null;
let SYSTEM_DATE_TIME_REPLACEMENT = null;

let SYSTEM_NOW = null;
let SYSTEM_TIME_FORMAT = null;

let SYSTEM_DAYS_COUNT = null;

$(function () {
    SYSTEM_CURRENT_DATE = new Date();
    SYSTEM_DATE_FORMAT = 'dd/mm/yyyy';

    SYSTEM_DATE = SYSTEM_CURRENT_DATE.getDate();
    if(SYSTEM_DATE < 10) {
        SYSTEM_DATE = '0' + SYSTEM_DATE;
    }

    SYSTEM_MONTH = SYSTEM_CURRENT_DATE.getMonth() + 1;
    SYSTEM_MONTH = (SYSTEM_MONTH >= 10) ? SYSTEM_MONTH : '0' + SYSTEM_MONTH;

    SYSTEM_YEAR  = SYSTEM_CURRENT_DATE.getFullYear();
    SYSTEM_YEAR_2D = SYSTEM_CURRENT_DATE.getFullYear() - 100;

    SYSTEM_TODAY = SYSTEM_DATE + '/' + SYSTEM_MONTH + '/' + SYSTEM_YEAR;

    SYSTEM_TIME_FORMAT = 'h12';
    SYSTEM_NOW = w2utils.formatTime(SYSTEM_CURRENT_DATE.getTime(), SYSTEM_TIME_FORMAT);

    SYSTEM_DAYS_COUNT = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];

    SYSTEM_DATE_TIME_CHARACTER = ['es_MX', 'en_US'];
    SYSTEM_DATE_TIME_REPLACEMENT = ['es-MX', 'en-US'];

    $('input[type=w2ui-time]').w2field(
        'time',{
            format: SYSTEM_TIME_FORMAT,
            keyboard: false
        }
    );
});

/**
 * Parse a date <br>
 * Requires moment.js
 */
const parseDate = function(dateStr) {
    try {
	
		const dateMomentObject = moment(dateStr, "DD/MM/YYYY");
		return dateMomentObject.toDate();
        
    } catch (e) {
        console.log(`-- parseDate error: Can't parse the date ${dateStr}`);
    }
    return null;
}

/**
 * <b>W2Time field.</b> <br>
 * If startTime is specified, then the option 'start' in the field starts with the value startTime
 */
const w2Time = function(input, startTime = null) {
    if(startTime == null) {
        $('#'+input).w2field(
            'time',{
                format: SYSTEM_TIME_FORMAT,
                keyboard: false
            }
        );
    } else {
        $('#'+input).w2field(
            'time',{
                format: SYSTEM_TIME_FORMAT,
                keyboard: false,
                start: startTime
            }
        );
    }
}

/**
 * Returns the day of the specified date
 */
const dayOfDate = function(date) {
    if(date != null) {
        let day = date.getDate();
        day = (day < 10) ? '0' + day : day;
        return day;
    }
    return null;
}

/**
 * Sort an array of dates asc
 */
const sortDaysAsc = function(array) {
    if(array != null) {
		try {
			
        return array.map(i => parseDate(i))
                    .sort((a, b) => a - b);
                    
		} catch (e) {
			console.log('-- sortDaysAsc error', e);
		}
    }
    return [];
}

/**
 * Sort an array of dates desc
 */
const sortDaysDesc = function(array) {
    if(array != null) {
		try {
			
			return array.map(i => parseDate(i))
	                    .sort((a, b) => b - a);
	                    
		} catch (e) {
			console.log('-- sortDaysDesc error', e);
		}
	}
    return [];
}

/**
 * Formats a current date
 */
const simpleDateFormatted = () => {
    const date = new Date();
    return formattedDate(date);
}

/**
 * Formats a given date
 */
const formattedDate = function(date) {
    if(date != null) {
        let month = date.getMonth() + 1;
        month = (month < 10) ? '0' + month : month;

        let day = date.getDate();
        day = (day < 10) ? '0' + day : day;

        return day + '/' + month + '/' + getFullYear(date);
    }
    return null;
}

/**
 * Return the full year
 */
const getFullYear = function(date) {
    return date.getFullYear();
}

/**
 * Start date in a date range
 */
const startDateOfRange = function(pDateRange) {
    if(pDateRange != null) {
        const startDate = pDateRange.split(" - ");
        return startDate[0];
    }
    return null;
}

/**
 * End date in a date range
 */
const endDateOfRange = function(pDateRange) {
    if(pDateRange != null) {
        const endDate = pDateRange.split(" - ");
        return endDate[1];
    }
    return null;
}

/**
 * Determine if the year is a leap year
 */
function isYearLeap(year) {
    if(year != null) {
        return (year/4 == Math.floor(year/4)) ? true : false;
    }
    return false;
}

/**
 * Returns the number of days in the month
 */
const daysInMonth = function(pMonth, pYear = null) {
    const position = pMonth - 1;
    if(pMonth >= 1 && pMonth <= 12) {
        //##### If the month is February, the year must be specified
        if(pMonth == 2 && pYear != null) {
            return isYearLeap(pYear) ? '29' : '28';
        } else {
            return SYSTEM_DAYS_COUNT[position];
        }
    } else {
        return -1;
    }
}

/*-----MODAL-----*/
let $_MODAL_HIDE_IN_PROGRESS = false;
let $_SHOW_MODAL_ID = '';

/**
 * Show modal
 * @param elementId - Selector id
 * @example Call showModal(elementId)
 */
function showModal(elementId) {
    if ($_MODAL_HIDE_IN_PROGRESS) {
        $_SHOW_MODAL_ID = elementId;
    } else {
        $('#'+elementId).modal("show");
    }
}

/**
 * Hide modal
 * @param elementId - Selector id
 * @example Call hideModal(elementId)
 */
function hideModal(elementId) {
    $_MODAL_HIDE_IN_PROGRESS = true;
    $('#'+elementId).on('hidden.bs.modal', hideCompleted);
    $('#'+elementId).modal("hide");

    function hideCompleted() {
        $_MODAL_HIDE_IN_PROGRESS = false;
        if ($_SHOW_MODAL_ID) {
            showModal($_SHOW_MODAL_ID);
        }
        $_SHOW_MODAL_ID = '';
        $('#'+elementId).off('hidden.bs.modal');
    }
}

/*Plugins*/
/**
 * TouchSpin - Require jquery.bootstrap-touchspin.min.js
 * @param pClass - Selector class
 * @param pMin - Min value
 * @param pMax - Max value
 * @param pStep - Incremental step
 * @param isUpdate - (default false) If true, trigger update event is called
 */
function inputTouchSpin(pClass, pMin, pMax, pStep, isUpdate = false) {
    const spinOptions = {...$_TOUCH_SPIN.instance(pMin, pMax, pStep)};
	const selectorClass = pClass.startsWith('.') ? pClass : '.' + pClass;
    if(!isUpdate) {
        $(selectorClass).TouchSpin(spinOptions);
    } else {
        $(selectorClass).trigger("touchspin.updatesettings", spinOptions);
    }
}