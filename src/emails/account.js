const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'carona_jr@hotmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}! Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'carona_jr@hotmail.com',
        subject: 'Sorry you had to leave :(',
        text: `We're sad with you leaving our platform. Goodbye, ${name} and we expect to see you in the future!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}