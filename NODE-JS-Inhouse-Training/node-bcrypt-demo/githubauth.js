require('dotenv').config();

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const app = express();
app.use(express.json());

// Express Session Middleware
app.use(session({ 
    secret: process.env.SECRET_KEY || 'keyboard cat', 
    resave: false, 
    saveUninitialized: true 
}));

app.use(passport.initialize());
app.use(passport.session());

// Passport serialization
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Configure GitHub Strategy using environment variables
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

// Route 1: Trigger GitHub Login
app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

// Route 2: GitHub Callback Route
app.get('/auth/github/callback', 
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
        res.json({ 
            message: 'Successfully logged in via GitHub!', 
            user: req.user 
        });
    }
);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on http://localhost:3000');
});