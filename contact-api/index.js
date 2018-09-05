'use strict';

require('dotenv').config();

const cors = require('cors');
const Mailgun = require('mailgun-js');
const escape = require('escape-html');

const api_key  = process.env.API_KEY,
      domain   = process.env.DOMAIN,
      from_who = process.env.FROM_WHO,
      to_who   = process.env.TO_WHO;

const sendEmail = function sendEmail(req, res) {
	console.log('The body is ' + JSON.stringify(req.body));

  const body = req.body;

  if (body.message === undefined) {
    // This is an error case, as "message" is required
    res.status(400).send('No message defined!');
  } else if (body._gotcha !== '') {
    // Honeypot case, in case requester is a spam bot
    res.status(400).send('Invalid request!');
  } else {
    // Everything is OK

    let subject = `[AP-Latam] Consulta de ${escape(body.name)}`;

    const html = `<h3>Consulta</h3>
      <b>Nombre:</b> ${escape(body.name)}<br />
      <b>E-mail:</b> ${escape(body.email)}<br />
      <b>Ciudad:</b> ${escape(body.city)}<br />
      <b>Mensaje:</b> ${escape(body.message)}<br />`;

		// We pass the api_key and domain to the wrapper, or it won't be able to
    // identify + send emails.
    const mailgun = new Mailgun({apiKey: api_key, domain: domain});

    const data = {
      from: from_who,
      to: to_who,
      reply_to: body.email,
      subject: subject,
      html: html
    }

    // Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
      if (err) {
        console.log('Got an error: ', err);
        res.status(500).send('An error ocurred sending emails: ' + err);
      } else {
        res.status(200).end();
      }
    });
  }
};

exports.sendEmail = (req, res) => {
  var corsFn = cors();
  corsFn(req, res, function() {
    sendEmail(req, res);
  });
};
