import React from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import { setToken } from '../../actions/authActions';
import { setMe } from '../../actions/studentActions';
import Logo from '../../assets/achieve-icon.png';
import { ScreenContainer, Input, Button } from '../../components';
import env from '../../config/env';
import colors from '../../utils/colors';
import { Container, FormContainer, Version } from './styles.css';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleNavigateToSignUp = () => navigation.navigate('sign-up');

  const handleSubmitLogin = async (values) => {
    // TODO: Remove mock data and make the BE request
    const me = {
      firstName: 'Luiz',
      lastName: 'Oku',
      school: 'Harvard',
      email: 'luiz.oku.contractor@macmillan.com',
    };
    const token = 'Bearer iosfdniosdfiosdnfoinsdiofhaosfjaoisfhaiodfoidf';
    dispatch(setMe(me));
    dispatch(setToken(token));
  };

  const validateForm = (values) => {
    const errors = {};
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
      <Container>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmitLogin}
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
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors?.email || ''}
              />
              <Input
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="Senha"
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
                Sign In
              </Button>
              <Button
                background={colors.SECONDARY}
                onPress={handleNavigateToSignUp}
              >
                Sign Up
              </Button>
              <Version>Version {env.REACT_APP_VERSION}</Version>
            </FormContainer>
          )}
        </Formik>
      </Container>
    </ScreenContainer>
  );
};

export default SignIn;
