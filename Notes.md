Project Requirements:

- Use a Rails API backend with a React frontend.
- Have **at least** three models on the backend, that include the following:
  - At least two one-to-many relationships.
  - At least one reciprocal many-to-many relationship (implemented by using 2
    has-many-through relationships). **Note:** in order to accomplish this, your
    project must include a joins table. This joins table must include a user
    submittable attribute.
  - Full CRUD actions for at least one resource.
  - Minimum of create and read actions for EACH resource.
- Have at least three different client-side routes using React Router. Be sure
   to include a nav bar or other UI element that allows users to navigate
   between routes.
- Implement authentication/authorization, including password protection. A user
  must be able to:
  - sign up with a new user account,
  - log in to the site with a secure password and stay logged in via user ID in
    the session hash, and
  - log out of the site.

Ideas:

- A way to create clubs (after school, local community?)
  - models for clubs, users, with join table for membership
  - Club: name, description, meeting time, meeting area, max min memberships
    - Create Read Update Destroy limited to users
  - User: first name, last name, username, image, email address, bio, admin?, 
    - Create Read Update Destroy
  - membership, club_id, user_id, admin?
    - Create Destroy
  - User Stories: I should
    - create an account
    - log into an account
    - log out
    - see a list of available clubs
    - choose to join a club
    - create a new club
    - send messages to clubs I am in charge of
  - Client Side Routes:
    - User page
    - Club list w/ filter bar,
    - create a club page
    - Sign-up/sign-in

TO-DO:

- Update and delete abilities for Users - 
- View Roster
to do: 
-validations for club
- user submitted attribute for memberships