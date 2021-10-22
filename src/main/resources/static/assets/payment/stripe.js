	'use strict';

	const $_STRIPE = {
		formSelector: 'stripe-payment-form',
		cardSelector: 'stripe-card-element',
		cardErrorSelector: 'stripe-card-errors',
		btnSelector: 'stripe-payment-btn',
		btnTextSelector: 'stripe-button-text',
		resultMessageClass: '.stripe-result-message',
		showResultMessage: false, //!!!TRUE ONLY IN TESTS!!!
		spinnerClass: '.stripe-spinner',
		clientSecret: null,
		setFormSelector(formSelector) {
			this.formSelector = formSelector;
		},
		setCardSelector(cardSelector) {
			this.cardSelector = cardSelector;
		},
		setCardErrorSelector(cardErrorSelector) {
			this.cardErrorSelector = cardErrorSelector;
		},
		setBtnSelector(btnSelector) {
			this.btnSelector = btnSelector;
		},
		setBtnTextSelector(btnTextSelector) {
			this.btnTextSelector = btnTextSelector;
		},
		setResultMessageClass(resultMessageClass) {
			this.resultMessageClass = resultMessageClass;
		},
		setShowResultMessage(showResultMessage) {
			this.showResultMessage = showResultMessage;
		},
		setSpinnerClass(spinnerClass) {
			this.spinnerClass = spinnerClass;
		},
		setClientSecret(clientSecret) {
			this.clientSecret = clientSecret;
		}
	};

	const $_STRIPE_STYLE_BASE = {
		fontSize: '16px',
		color: '#32325d',
		fontFamily: 'Arial, sans-serif',
		fontSmoothing: 'antialiased',
		setFontSize(fontSize) {
			this.fontSize = fontSize;
		},
		setColor(color) {
			this.color = color;
		}
	};

	const $_STRIPE_STYLE_INVALID = {
		fontSize: '16px',
		color: '#32325d',
		fontFamily: 'Arial, sans-serif',
		iconColor: '#fa755a',
		setFontSize(fontSize) {
			this.fontSize = fontSize;
		},
		setColor(color) {
			this.color = color;
		}
	};

	const $_STRIPE_STYLE = {
		base: {
			fontSize: $_STRIPE_STYLE_BASE.fontSize,
			color: $_STRIPE_STYLE_BASE.color,
			fontFamily: $_STRIPE_STYLE_BASE.fontFamily,
			fontSmoothing: $_STRIPE_STYLE_BASE.fontSmoothing,     
		},
		invalid: {
			fontFamily: $_STRIPE_STYLE_INVALID.fontFamily,
			color: $_STRIPE_STYLE_INVALID.color,
			iconColor: $_STRIPE_STYLE_INVALID.iconColor
		}
	};

	let $_STRIPE_CARD;
	function stripeCreateCard(stripeElement) {
		$_STRIPE_CARD = stripeElement.create('card', {style: $_STRIPE_STYLE});
		$_STRIPE_CARD.mount('#'+$_STRIPE.cardSelector);
	}

	/* ------- UI helpers ------- */
	//##### Shows a success message when the payment is complete
	const stripeOrderComplete = function (paymentIntentId = null) {
		stripeLoading(false);
		
		if($_STRIPE.showResultMessage && paymentIntentId != null) {//!!!USE THIS ONLY IN TESTS!!!
			const resultMessageClass = $_STRIPE.resultMessageClass;
			const resultMessageLink = resultMessageClass + ' a'; 
			const resultMessageLinkHref = "https://dashboard.stripe.com/test/payments/" + paymentIntentId;

			elementHref(resultMessageLink, resultMessageLinkHref);
			hiddenClassRemove(resultMessageClass);
		}
		btnAvailable($_STRIPE.btnSelector);
	};

	//##### Shows to customer the errors from Stripe if their card fails to charge
	const stripeShowError = function (errorMsgText) {
		stripeLoading(false);
		setText($_STRIPE.cardErrorSelector, errorMsgText);
		setTimeout(function () {
			textClear($_STRIPE.cardErrorSelector);
		}, 4000);
	};

	//##### Show a spinner on payment submission
	const stripeLoading = function (isLoading) {
		if (isLoading) {
			//##### Disable the button and show a spinner
			btnDisabled($_STRIPE.btnSelector);
			hiddenClassRemove($_STRIPE.spinnerClass);
			hiddenClass($_STRIPE.btnTextSelector);
		} else {
			btnAvailable($_STRIPE.btnSelector);
			hiddenClass($_STRIPE.spinnerClass);
			hiddenClassRemove($_STRIPE.btnTextSelector);
		}
	};