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
      form.reset(); // Reset form after handling success or failure
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
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
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          required
          placeholder="Enter your password"
        />
      </Label>
      <Button type="submit">Log In</Button>
      <LoggedLink to="/register">You don't have an account? Please register.</LoggedLink>
    </Form>
  );
};

export default LoginForm;
