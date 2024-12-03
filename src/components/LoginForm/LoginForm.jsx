import { Notify } from 'notiflix';
import { Form, Input, Label, Button, LoggedLink } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    try {
      const result = await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      
      Notify.success(`${result.user.name || 'User'} welcome back!`);
    } catch (error) {
      Notify.failure('Incorrect login or password');
    } finally {
      form.reset(); 
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          // pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          required
          placeholder="Enter your email"
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          // Updated, simplified pattern
          // pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$"
          pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*()_+]).{8,}$"
          title="Password must contain at least one letter, one number, one special character (e.g. !@#$%^&*), and be at least 8 characters long."
          placeholder="Enter your password"
          required
        />
      </Label>
      <Button type="submit">Log In</Button>
      <LoggedLink to="/register">You don't have an account? Please register.</LoggedLink>
    </Form>
  );
};

export default LoginForm;
