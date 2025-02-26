# Login Page

This project includes a login page developed using React and Redux. Users can log in by entering their username and password. Additionally, features such as password visibility toggle, remember me, and social media login are provided.

<img width="1710" alt="EkranResmi2025-02-2619 16 34-ezgif com-optipng" src="https://github.com/user-attachments/assets/160c8345-e814-457b-8c88-6ac6b6ff38ac" />

## Technologies Used
- React
- Redux
- Styled Components
- React Final Form
- React Icons

## Installation
To clone and run the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/username/project-name.git
cd project-name

# Install dependencies
yarn install  # or npm install

# Run the project
yarn start  # or npm start
```

## Usage
- Enter your username and password to log in.
- Use the password visibility toggle to show or hide the password.
- Check the 'Remember me' box to save your credentials.
- Use the Facebook and Google+ buttons for social media login.
- Click on 'Forgot Password?' to be redirected to the password reset page.

## Redux Usage
The login process is handled using the `loginUser` Redux action:

```javascript
dispatch(loginUser(values.username, values.password));
```
The Redux store contains the auth state, and login errors are stored in the `error` state.

## Contributing
To contribute to this project:
1. Fork the repository
2. Create a new branch: `git checkout -b new-feature`
3. Make your changes and commit: `git commit -m 'Added new feature'`
4. Push your branch: `git push origin new-feature`
5. Create a Pull Request

## License
This project is licensed under the MIT License.

