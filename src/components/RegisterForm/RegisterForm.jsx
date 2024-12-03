import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form, Input, Label, Button, Text, LoggedLink } from './RegisterForm.styled';
import { Notify } from 'notiflix';
import { useState } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();

  // State for loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Set loading state to true when submitting
    setIsSubmitting(true);

    try {
      const result = await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();

      // If registration is successful
      Notify.success(`${result.user.name} welcome!`);
      form.reset();
    } catch (error) {
      // Detailed error message based on server response
      const errorMessage = error.response?.data?.message || "Sorry, something went wrong. Please try again.";
      Notify.failure(errorMessage);
    } finally {
      // Reset loading state after completion
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Text>Create your account.</Text>
      
      <Label>
        Name
        <Input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(?:[ '-][a-zA-Zа-яА-Я]+)*$"
          pattern="^[a-zA-Zа-яА-Я]+(?:[\\s'-][a-zA-Zа-яА-Я]+)*$"
          // pattern="^[a-zA-Z]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter your name"
          required
        />
      </Label>

      <Label>
        Email
        <Input
          type="email"
          name="email"
          // pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          placeholder="Enter your email"
          required
          autocomplete="username"  // Autocomplete for username/email field
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
          autocomplete="current-password"  // Autocomplete for password field
        />
      </Label>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Registering...' : 'Register'}
      </Button>

      <LoggedLink to="/login">Already have an account? Log in</LoggedLink>
    </Form>
  );
};

export default RegisterForm;



