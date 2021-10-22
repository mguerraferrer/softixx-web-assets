	'use strict';

	let $_STRIPE_FORM;
	/**
	 * Create a token from Stripe to make a charge
	 * @param formName - Name of the container form  
	 */
	async function stripeCreateToken(formName, cardElement = null) {
		$_STRIPE_FORM = $('#'+formName);

		if(cardElement == null) {
			cardElement = $_STRIPE_CARD;
		}

		stripeLoading(true);
		const result = await stripe.createToken(cardElement).then(function (result) {
			return result;
		});

		if (result.error) {
			// Inform the customer that there was an error.
			const errorElement = document.getElementById('stripe-card-errors');
			errorElement.textContent = result.error.message;
		} else {
			if(jsOptions.validatePaymentForm) {
				let bValid = true;
				bValid = validateForm(formName);
				
				if(!bValid) {
					return false;
				}
			}

			// Send the token to your server.
			return await stripeTokenHandler(result.token);
		}
	}

	async function stripeTokenHandler(token) {
		const hiddenInput = document.createElement('input');
		hiddenInput.setAttribute('type', 'hidden');
		hiddenInput.setAttribute('name', 'stripeToken');
		hiddenInput.setAttribute('value', token.id);
		$_STRIPE_FORM.append(hiddenInput);

		const formData = $('form').serialize();
		const asyncResponse = await postRequest(jsOptions.paymentUrl, formData);
		stripeOrderComplete();
		return evaluateAsyncResponse(asyncResponse);
	}