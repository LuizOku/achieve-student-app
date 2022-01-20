import React, { useCallback, useState } from 'react';
import { Image } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { isPast } from 'date-fns';

import Logo from '../../../../assets/icon.png';
import { ScreenContainer, CollapseView } from '../../../../components';
import colors from '../../../../utils/colors';
import generateUuid from '../../../../utils/uuid';
import {
  Container,
  Content,
  CardContainer,
  CardColumn,
  CardTitleText,
  CardText,
  CardRow,
} from './styles.css';

const MOCK_COURSES = [
  {
    id: generateUuid(),
    name: '411-write',
    instructors: ['Jhony Cratos', 'Carly Stevens'],
    meetingTimes: 'S 9:00 AM-10:00 AM',
    term: 'Spring 2022',
    expiration: 'Aug 26, 2022',
  },
  {
    id: generateUuid(),
    name: '411-read',
    instructors: ['Mary Loo', 'Peter Cooper'],
    meetingTimes: 'TTh 9:00 AM-10:00 AM',
    term: 'Spring 2022',
    expiration: 'Sep 13, 2022',
  },
  {
    id: generateUuid(),
    name: '411-skills',
    instructors: ['Anthony Staten', 'Jason Petersen'],
    meetingTimes: 'WF 9:00 AM-10:00 AM',
    term: 'Spring 2022',
    expiration: 'Jun 21, 2022',
  },
  {
    id: generateUuid(),
    name: '411-practice',
    instructors: ['Laura Karmen', 'Mohamed Ha'],
    meetingTimes: 'S 9:00 AM-10:00 AM',
    term: 'Spring 2022',
    expiration: 'Dec 22, 2022',
  },
  {
    id: generateUuid(),
    name: '411-essentials',
    instructors: ['Karen Tian'],
    meetingTimes: 'MTh 9:00 AM-10:00 AM',
    term: 'Fall 2021',
    expiration: 'Dec 26, 2021',
  },
  {
    id: generateUuid(),
    name: '411-review',
    instructors: ['Toby Denta', 'Carlos Dyas'],
    meetingTimes: 'WF 9:00 AM-10:00 AM',
    term: 'Fall 2022',
    expiration: 'Nov 13, 2021',
  },
];

function Courses() {
  const navigation = useNavigation();
  const [currentCourses, setCurrentCourses] = useState([]);
  const [pastCourses, setPastCourses] = useState([]);

  const fetchCourses = useCallback(async () => {
    // TODO: Remove mock data and make the BE request
    const past = [];
    const current = [];
    MOCK_COURSES.forEach((course) => {
      if (isPast(new Date(course.expiration))) {
        past.push(course);
      } else {
        current.push(course);
      }
    });
    setCurrentCourses(current);
    setPastCourses(past);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchCourses();
    }, [fetchCourses])
  );

  const handleNavigateToCourseDetails = (rt) => {
    navigation.navigate('course-details', { ...rt });
  };

  return (
    <ScreenContainer
      backgroundColor={colors.PRIMARY}
      backgroundMode="stretch"
      style={{ flex: 1 }}
      noPadding
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
        <Content
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: 50,
            paddingTop: 20,
          }}
        >
          <CollapseView title="Current Courses" startOpened>
            {currentCourses.map((cc) => (
              <CardContainer
                key={cc._id}
                onPress={() => handleNavigateToCourseDetails(cc)}
              >
                <CardColumn width="25%" hasBorder>
                  <FontAwesome
                    name="graduation-cap"
                    size={30}
                    color={colors.SECONDARY}
                  />
                </CardColumn>
                <CardColumn width="75%">
                  <CardRow>
                    <CardTitleText>Course id: </CardTitleText>
                    <CardText>{cc.id}</CardText>
                  </CardRow>
                  <CardRow>
                    <CardTitleText>Course name: </CardTitleText>
                    <CardText>Course name: {cc.name}</CardText>
                  </CardRow>
                  <CardRow>
                    <CardText>
                      <CardTitleText>Instructors: </CardTitleText>
                      {cc.instructors.map((ins) => `${ins}, `)}
                    </CardText>
                  </CardRow>
                  <CardRow>
                    <CardTitleText>Meeting times: </CardTitleText>
                    <CardText>{cc.meetingTimes}</CardText>
                  </CardRow>
                  <CardRow>
                    <CardTitleText>Term: </CardTitleText>
                    <CardText>{cc.term}</CardText>
                  </CardRow>
                  <CardRow>
                    <CardTitleText>Expiration date: </CardTitleText>
                    <CardText>{cc.expiration}</CardText>
                  </CardRow>
                </CardColumn>
              </CardContainer>
            ))}
          </CollapseView>
          <CollapseView title="Past Courses">
            {pastCourses.map((cc) => (
              <CardContainer
                key={cc._id}
                onPress={() => handleNavigateToCourseDetails(cc)}
              >
                <CardColumn width="25%" hasBorder>
                  <FontAwesome
                    name="graduation-cap"
                    size={30}
                    color={colors.SECONDARY}
                  />
                </CardColumn>
                <CardColumn width="75%">
                  <CardRow>
                    <CardTitleText>Course id: </CardTitleText>
                    <CardText>{cc.id}</CardText>
                  </CardRow>
                  <CardRow>
                    <CardTitleText>Course name: </CardTitleText>
                    <CardText>Course name: {cc.name}</CardText>
                  </CardRow>
                  <CardRow>
                    <CardText>
                      <CardTitleText>Instructors: </CardTitleText>
                      {cc.instructors.map((ins) => `${ins}, `)}
                    </CardText>
                  </CardRow>
                  <CardRow>
                    <CardTitleText>Meeting times: </CardTitleText>
                    <CardText>{cc.meetingTimes}</CardText>
                  </CardRow>
                  <CardRow>
                    <CardTitleText>Term: </CardTitleText>
                    <CardText>{cc.term}</CardText>
                  </CardRow>
                  <CardRow>
                    <CardTitleText>Expiration date: </CardTitleText>
                    <CardText>{cc.expiration}</CardText>
                  </CardRow>
                </CardColumn>
              </CardContainer>
            ))}
          </CollapseView>
        </Content>
      </Container>
    </ScreenContainer>
  );
}
export default Courses;
