import React from 'react';
import { Image } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import Logo from '../../assets/achieve-icon.png';
import { ScreenContainer, Input, Button, IconButton } from '../../components';
import useSnackbar from '../../hooks/useSnackBar';
import colors from '../../utils/colors';
import { Container, FormContainer } from './styles.css';

function SignUp() {
  const snackbar = useSnackbar();
  const navigation = useNavigation();

  const handlePressBack = () => navigation.navigate('sign-in');

  const handleSubmitSignUp = async (values) => {
    // TODO: Remove console.log and make the BE request
    console.log(values);
    navigation.navigate('sign-in');
    snackbar.show('You got successfully registered', {
      type: 'SUCCESS',
    });
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!values.school) {
      errors.school = 'School name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <ScreenContainer
      backgroundColor={colors.SECONDARY}
      backgroundMode="stretch"
      keyboardAvoiding
    >
      <IconButton onPress={handlePressBack} style={{ alignSelf: 'flex-start' }}>
        <Feather name="arrow-left" color={colors.WHITE} size={30} />
      </IconButton>
      <Container>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            school: '',
            email: '',
            password: '',
          }}
          onSubmit={handleSubmitSignUp}
          validate={validateForm}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <FormContainer>
              <Image
                width={250}
                height={50}
                style={{
                  alignSelf: 'center',
                  width: 250,
                  height: 50,
                  marginVertical: 30,
                }}
                source={Logo}
              />
              <Input
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                placeholder="First name"
                keyboardType="default"
                autoCapitalize="words"
                error={errors?.firstName || ''}
              />
              <Input
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                placeholder="Last name"
                keyboardType="default"
                autoCapitalize="words"
                error={errors?.lastName || ''}
              />
              <Input
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors?.email || ''}
              />
              <Input
                value={values.school}
                onChangeText={handleChange('school')}
                onBlur={handleBlur('school')}
                placeholder="School"
                keyboardType="default"
                autoCapitalize="words"
                error={errors?.school || ''}
              />
              <Input
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
                error={errors?.password || ''}
              />
              <Button
                style={{ marginTop: 24 }}
                background={colors.PRIMARY}
                onPress={handleSubmit}
                loading={isSubmitting}
              >
                Sign up
              </Button>
            </FormContainer>
          )}
        </Formik>
      </Container>
    </ScreenContainer>
  );
}

export default SignUp;
