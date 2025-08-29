# About this project
## this skill-based assessment is intended
1. to demonstrate creating accounts via both Oauth (using GitHub's in this case) or email/password
2. check authorization before creating bookmarks, fetching one, or fetching a list of their own bookmarks
3. check user's authorization before permitting them to edit or delete a note.
4. demonstrate the ability to use a field (such as email) as a unique identifier across the database.


# Goals achieved
- DRY code using middleware and authorization functions.  Code is structured in a way to reduce copied or rewritten code as much as possible
- demonstration of good CRUD usage, allowing for all operations on a database with proper authorization in place

# github Oauth
- Using passport.js with github-2 strategy, I was able to successfully connect to github, pull user data, and use that data to either register a new user or log a user in.

# Session management
- this app uses stateless management through jwebtokens.  This is done via signing tokens in auth when a user logs in, and checking that token against auth middleware before allowing the user to perform any actions involving the databawse

# Local login
- this app permits users to create an account via email and password, and log in securely using a mix of bcrypt and mongodb to hash, store, and compare passwords.

# CRUD operations
- this app demonstrates the ability to perform all crud operations on a database, allowing users to create bookmarks, get all or get one bookmark, and edit/delete their own bookmarks.

  

