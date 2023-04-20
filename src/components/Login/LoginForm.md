```tsx
<LoginForm 
  onSubmit={(username, password, remember, event) => {
    alert(`Logging in with\nuser: ${username}\npassword: ${password}\nRemember user? ${remember ? 'Yup' : 'Nope'}`);
    return true;
  }}
  autoFocus={false} // Remove this when using in an application
/>
```

##### With Hero Image

```tsx
<LoginForm 
  header="Inspector Sign in"
  hero="/images/insp_login_hero.png"
  onSubmit={(username, password, remember) => {
    alert(`Logging in with\nuser: ${username}\npassword: ${password}\nRemember user? ${remember ? 'Yup' : 'Nope'}`);
    return true;
  }}
  autoFocus={false} // Remove this when using in an application
/>
```
