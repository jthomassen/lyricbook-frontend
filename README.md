# Lyricbook

Lyricbook is a web application to help songwriters to write lyric drafts or store final copies of their lyrics. Songwriters are provided a digital notepad to compose/format their lyrics and a journal-view to review a collection of their songs. 

## User Stories

* As a user, I want to be able to sign up for an account, and login/logout
* As a user, I want to create, edit, and delete a new lyric draft
* As a user, I want to view a collection of all of my lyrics
* As a user, I want to delete my account

STRETCH GOALS:
* As a user, I want to customize my artist name, profile picture, and bio 
* As a user, I want to view songs from other user's profiles

## Models and Relationships

![user-lyrics-relations](https://user-images.githubusercontent.com/85265620/137038250-6cd5995f-3a06-4595-bc71-eb48a87d4f00.png)

### User

A `User` has many `Lyrics` 

* id
* username
* password_digest
* bio
* profile_img

### Lyrics

A `Lyric` belongs to a `User`

* id
* title
* artist_name
* content
* copyright_name
* copyright_year
* user_id

## API

This API will feature 5 RESTful routes: show, index, create, update, and destroy.

### Lyrics

```json
{ 
  id: 1,
  title: "Baby You're a Rich Man",
  artist_name: "The Beatles",
  content: " ... You keep all your money in a big brown bag inside a zoo What a thing to do Baby you're a rich man ... ",
  copyright_name: "Lennon/McCartney",
  copyright_year: 1967,
  user_id: 1
}
```

### GET /api/lyrics
This will show the collection of lyrics

### GET /api/lyrics/:id
This will allow a user to select a lyric

### POST /api/lyrics
This will allow a user to post a new lyric

### PATCH /api/lyrics/:id
This will allow a user to edit an existing lyric

### DELETE /api/lyrics/:id
This will allow a user to delete an existing lyric

### Users

```json
{
  id: 1
  username: "thebeatles"
  bio: " ... Four lads from Liverpool started in ... "
  profile_img: "beatles.png"
}
```

### DELETE /api/users/:id
This will allow a user to delete their account

### STETCH GOALS

### GET /api/users
This will allow a different user to browse search results of all other users

### GET /api/users/:id
This will allow a user to select another user

### GET /api/users/:id/lyrics
This will allow a user to view another user's collection of lyrics

## Wireframe

### Dashboard
![lyricbook-dashboard](https://user-images.githubusercontent.com/85265620/137041071-7ddb9f4d-ee8d-4b0b-b184-06526f02402e.png)

### Song View
![lyricbook-song-view](https://user-images.githubusercontent.com/85265620/137170974-af73ed2c-fa3f-4fee-8216-5122b1c8857e.png)

### Song Editor
![lyricbook-song-editor](https://user-images.githubusercontent.com/85265620/137041104-9322de45-68bd-4eaa-b24a-deac28189b26.png)

### Nav Bar
![lyricbook-navbar](https://user-images.githubusercontent.com/85265620/137041422-3962fec3-4b25-491b-b21f-c858ebc8c968.png)







