module.exports = {    
    database: 'mongodb://root:abc123@ds119820.mlab.com:19820/ecommerce',
    port:3000,
    secretKey: 'VK!@#$',

    facebook: {
    	clientID: process.env.FACEBOOK || '481278068957841',
    	clientSecret: process.env.FACEBOOK_SECRET || '1854cc4f8d5e89313ac82c262b64a62e', 
    	profileFields: ['emails', 'displayName'],
    	callbackURL: 'http://localhost:3000/auth/facebook/callback'
    }
}