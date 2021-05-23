/**
 * This is the server side app.
 * This runs express and serves the client side app.
 * This also handles the handlebars engine.
 */

const path = require('path')
const express = require('express')
const hbs = require('hbs')
const util_template = require('./utils/util_template')
const util_request_template = require('./utils/util_request_template')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Setup app pages
app.get('', (req, res) => {
    res.render('index', {
        title: 'Index'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help'
    })
});

app.get('/main', (req, res) => {
    if (!req.query.input) {
        return res.send({
            error: 'You must provide input!'
        })
    }

	// code

	/*
	return res.send({
		//IF ERROR:
		//	error
		//ELSEIF STUFF:
		//	stuff
		//ENDIF
	})
	*/
});


// Setup 404 pages
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found.'
    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found.'
    })
});


// Set app to listen
app.listen(port, () => {
    console.log('Server is up on port ' + port + '.')
});