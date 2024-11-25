import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form, Input, Label, Button, Text, LoggedLink } from './RegisterForm.styled';
import { Notify } from 'notiflix';
import { useState } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();

  // Stare pentru încărcare (loading state)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Setează starea de încărcare la true când se trimite formularul
    setIsSubmitting(true);

    try {
      const result = await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();

      // Dacă înregistrarea este un succes
      Notify.success(`${result.user.name} welcome!`);
      form.reset();
    } catch (error) {
      // Mesaj de eroare mai detaliat în funcție de răspunsul de la server
      const errorMessage = error.response?.data?.message || "Sorry, something's wrong";
      Notify.failure(errorMessage);
    } finally {
      // Resetează starea de încărcare după ce procesul s-a încheiat
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
          pattern="^[a-zA-Zа-яА-Я]+([ '-][a-zA-Zа-яА-Я]+)*$"
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
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          placeholder="Enter your email"
          required
        />
      </Label>

      <Label>
        Password
        <Input
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          placeholder="Enter your password"
          required
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










// Iată forma completă a codului propusă pentru `RegisterForm` cu îmbunătățirile de care am vorbit: adăugarea unui mesaj de eroare mai detaliat, gestionarea stării de încărcare și îmbunătățirea validării și accesibilității.

// ```javascript
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import { Form, Input, Label, Button, Text, LoggedLink } from './RegisterForm.styled';
// import { Notify } from 'notiflix';
// import { useState } from 'react';

// const RegisterForm = () => {
//   const dispatch = useDispatch();

//   // Stare pentru încărcare (loading state)
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     // Setează starea de încărcare la true când se trimite formularul
//     setIsSubmitting(true);

//     try {
//       const result = await dispatch(
//         register({
//           name: form.elements.name.value,
//           email: form.elements.email.value,
//           password: form.elements.password.value,
//         })
//       ).unwrap();

//       // Dacă înregistrarea este un succes
//       Notify.success(`${result.user.name} welcome!`);
//       form.reset();
//     } catch (error) {
//       // Mesaj de eroare mai detaliat în funcție de răspunsul de la server
//       const errorMessage = error.response?.data?.message || "Sorry, something's wrong";
//       Notify.failure(errorMessage);
//     } finally {
//       // Resetează starea de încărcare după ce procesul s-a încheiat
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit} autoComplete="off">
//       <Text>Create your account.</Text>
//       <Label>
//         Name
//         <Input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+([ '-][a-zA-Zа-яА-Я]+)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           placeholder="Enter your name"
//           required
//         />
//       </Label>

//       <Label>
//         Email
//         <Input
//           type="email"
//           name="email"
//           pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
//           title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
//           placeholder="Enter your email"
//           required
//         />
//       </Label>

//       <Label>
//         Password
//         <Input
//           type="password"
//           name="password"
//           pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
//           title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
//           placeholder="Enter your password"
//           required
//         />
//       </Label>

//       <Button type="submit" disabled={isSubmitting}>
//         {isSubmitting ? 'Registering...' : 'Register'}
//       </Button>

//       <LoggedLink to="/login">Already have an account? Log in</LoggedLink>
//     </Form>
//   );
// };

// export default RegisterForm;
// ```

// ### Explicație detaliată:

// 1. **Starea de Încărcare (`isSubmitting`)**:
//    - Am adăugat un state `isSubmitting` care se setează la `true` în momentul în care se trimite formularul și se setează la `false` când procesul se termină.
//    - Acest `state` controlează dacă butonul de submit trebuie să fie dezactivat (pentru a preveni trimiterea dublă a formularului) și dacă textul butonului trebuie să fie "Registering..." sau "Register".

// 2. **Error Handling Îmbunătățit**:
//    - Dacă înregistrarea eșuează, codul arată acum un mesaj de eroare detaliat care vine de la backend (dacă este disponibil). Dacă nu există un mesaj specific, se va afișa un mesaj generic ("Sorry, something's wrong").

// 3. **Resetarea Formularului**:
//    - După ce înregistrarea este completă (indiferent de succes sau eșec), formularul se resetează pentru a șterge datele introduse.

// 4. **Button Disabled pe Stare de Încărcare**:
//    - Butonul de submit este acum dezactivat în timpul înregistrării pentru a preveni trimiterea dublă a formularului, iar textul butonului devine "Registering..." în timpul procesului.

// 5. **Accesibilitate**:
//    - Pentru accesibilitate îmbunătățită, am menținut placeholder-ele clare și concise pentru fiecare câmp, ceea ce va ajuta utilizatorii care folosesc cititoare de ecran.

// 6. **Validare CSS și HTML**:
//    - Am păstrat validările de câmp cu ajutorul atributelor `pattern`, `required` și `title`, care vor ajuta la validarea câmpurilor direct în browser, înainte de a trimite datele la server.

// ### Îmbunătățiri posibile suplimentare:
// - **Mesaje de eroare pentru fiecare câmp**: Dacă vrei să adaugi mesaje de eroare personalizate pentru fiecare câmp (de exemplu, "Email-ul nu este valid"), poți să implementezi un sistem de validare personalizat.
// - **Deschiderea unui spinner de încărcare**: În loc de a schimba textul butonului, poți folosi un spinner de încărcare pentru a arăta utilizatorilor că înregistrarea este în curs.
// - **Auto-focus** pe primul câmp de input (de exemplu, pe câmpul "Name") la încărcarea paginii.

// Cu aceste modificări, formularul este mai robust, oferind o experiență mai bună utilizatorilor și o gestionare mai eficientă a stării de încărcare și erorilor.
