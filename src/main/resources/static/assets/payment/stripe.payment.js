	let $_STRIPE_FORM;
	
	const paymentIntentCard = function(stripeElements) {
		stripeCreateCard(stripeElements);
        $_STRIPE_CARD.on("change", function (event) {
          //##### Disable the Pay button if there are no card details in the Element
          event.empty ? btnDisabled($_STRIPE.btnSelector) : btnAvailable($_STRIPE.btnSelector);

          const eventError = event.error ? event.error.message : '';
          setText($_STRIPE.cardErrorSelector, eventError);
        });
	}

	// Calls stripe.confirmCardPayment
	// If the card requires authentication Stripe shows a pop-up modal to
	// prompt the user to enter authentication details without leaving your page.
	const stripePayWithCard = async function() {
		stripeLoading(true);
		const response = await stripe
			.confirmCardPayment($_STRIPE.clientSecret, {
				payment_method: {
					card: $_STRIPE_CARD
				}
			})
			.then(function (result) {
				if (result.error) {
					//##### Show error to your customer
					stripeShowError(result.error.message);
				} else {
					//##### The payment succeeded!
					const response = result.paymentIntent;
					stripeOrderComplete(response.id);
					return response;
				}
			});
		return response;
	};