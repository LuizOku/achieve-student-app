import React, { useState, useEffect, useCallback } from 'react';
import { Image } from 'react-native';

import { Feather, FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik';

import Logo from '../../../../assets/icon.png';
import {
  ScreenContainer,
  IconButton,
  Input,
  Button,
  BottomSheet,
} from '../../../../components';
import colors from '../../../../utils/colors';
import generateUuid from '../../../../utils/uuid';
import {
  Container,
  Content,
  FiltersContainer,
  CardContainer,
  CardRow,
  CardText,
  BottomSheetText,
  CardColumn,
} from './styles.css';

const MOCK_COURSES = [
  {
    id: generateUuid(),
    name: 'react-native',
  },
  {
    id: generateUuid(),
    name: '411-qualitative',
  },
  {
    id: generateUuid(),
    name: '411-quatitative',
  },
  {
    id: generateUuid(),
    name: '411-read-and-practice',
  },
  {
    id: generateUuid(),
    name: '411-section-manager',
  },
];

function SearchCourse() {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const fetchAvailableCourses = useCallback(async () => {
    // TODO: Remove mock data and make the BE request
    setAvailableCourses(MOCK_COURSES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchAvailableCourses();
  }, [fetchAvailableCourses]);

  useEffect(() => {
    setFilteredList(availableCourses);
  }, [availableCourses]);

  const handleFilterCourses = (values) => {
    if (values.search) {
      setFilteredList(
        availableCourses?.length > 0 &&
          availableCourses?.filter(
            (al) =>
              al?.id?.includes(values.search) ||
              al?.name?.includes(values.search)
          )
      );
    } else {
      setFilteredList(availableCourses);
    }
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setOpenBottomSheet(true);
  };

  const handleConfirmSelect = async () => {
    // TODO: Make the BE request
    setOpenBottomSheet(false);
  };

  return (
    <ScreenContainer
      noPadding
      backgroundColor={colors.PRIMARY}
      backgroundMode="stretch"
    >
      <Container>
        <Image
          width={70}
          height={70}
          style={{
            alignSelf: 'center',
            width: 70,
            height: 70,
          }}
          source={Logo}
        />
        <Formik
          initialValues={{
            search: '',
          }}
          onSubmit={handleFilterCourses}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <FiltersContainer>
              <Input
                value={values?.search}
                onChangeText={handleChange(`search`)}
                onBlur={handleBlur(`search`)}
                placeholder="Search"
                keyboardType="default"
                autoCapitalize="none"
                error={errors?.search || ''}
                style={{ width: '77%' }}
              />
              <IconButton
                onPress={handleSubmit}
                style={{
                  width: 55,
                  height: 55,
                  borderWidth: 2,
                  backgroundColor: colors.AQUA_BASE,
                  borderColor: colors.WHITE,
                  borderRadius: 55,
                  marginLeft: 10,
                }}
              >
                <Feather name="search" color={colors.WHITE} size={20} />
              </IconButton>
            </FiltersContainer>
          )}
        </Formik>
        <Content contentContainerStyle={{ alignItems: 'center' }}>
          {filteredList?.length > 0 &&
            filteredList.map((fl) => (
              <CardContainer key={fl?.id}>
                <CardColumn width="25%" hasBorder>
                  <FontAwesome
                    name="graduation-cap"
                    size={30}
                    color={colors.SECONDARY}
                  />
                </CardColumn>
                <CardColumn width="75%">
                  <CardRow>
                    <CardText bold>Course id: </CardText>
                    <CardText>{fl.id}</CardText>
                  </CardRow>
                  <CardRow>
                    <CardText bold>Course name: </CardText>
                    <CardText>Course name: {fl.name}</CardText>
                  </CardRow>
                  <CardRow>
                    <Button
                      background={colors.AQUA_BASE}
                      onPress={() => handleCourseSelect(fl)}
                      fullWidth
                    >
                      Enroll
                    </Button>
                  </CardRow>
                </CardColumn>
              </CardContainer>
            ))}
        </Content>
      </Container>
      <BottomSheet
        open={openBottomSheet}
        onClose={() => {
          setOpenBottomSheet(false);
        }}
        size={200}
      >
        <BottomSheetText isTitle>
          Welcome to {selectedCourse?.name}
        </BottomSheetText>
        <BottomSheetText>
          To enroll in this course, you need Achieve Access
        </BottomSheetText>
        <Button background={colors.AQUA_BASE} onPress={handleConfirmSelect}>
          Purchase Achieve Access
        </Button>
      </BottomSheet>
    </ScreenContainer>
  );
}

export default SearchCourse;
