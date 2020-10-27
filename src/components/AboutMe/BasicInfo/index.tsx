import React from 'react';
import { MdMailOutline, MdPhoneIphone, MdLocationOn } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import ContactItem from './ContactItem';

import { Avatar, AvatarContainer, SideInfoSection } from './basicInfo.styled';
import { Row, Typography } from '../../../styles/globalComponents';
import { SectionTitle } from '../aboutMe.styled';

interface ContactField {
  icon: any;
  info: string;
}

const BasicInfo = () => {
  const theme = useTheme();

  const CONTACT_FIELDS: ContactField[] = [
    {
      icon: <MdMailOutline color={theme.colors.primary} size={20} />,
      info: 'noel.rostohar@gmail.com',
    },
    {
      icon: <MdPhoneIphone color={theme.colors.primary} size={20} />,
      info: '+385 99 839 6795',
    },
    {
      icon: <MdLocationOn color={theme.colors.primary} size={20} />,
      info: 'Zagreb, Croatia',
    },
  ];

  return (
    <div style={{ flex: 2 }}>
      <Row withMargin>
        <AvatarContainer>
          <Avatar src="https://picsum.photos/200" />
        </AvatarContainer>
        <div>
          <Typography variant="h3" style={{ fontWeight: 'bold' }}>
            Noel Denis Rostohar
          </Typography>
          <Typography variant="span">Frontend Developer</Typography>
        </div>
      </Row>
      <SectionTitle>Basic Info</SectionTitle>
      <Typography variant="p" style={{ fontSize: '14px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum
        error vitae inventore qui commodi laborum, cupiditate quia assumenda
        accusamus voluptas labore sapiente. Ipsum maiores inventore architecto
        culpa debitis repellendus, labore nulla et praesentium excepturi impedit
        accusamus perspiciatis tempora quo commodi quod consequatur ipsam velit
        voluptatem soluta in similique minima modi est! Itaque, nam libero aut
        culpa dolores debitis officia.
      </Typography>
      <SideInfoSection>
        <ul>
          {CONTACT_FIELDS.map((contact) => {
            return (
              <ContactItem
                key={contact.info}
                info={contact.info}
                icon={() => contact.icon}
              />
            );
          })}
        </ul>
      </SideInfoSection>
      <SideInfoSection>
        <SectionTitle>External Links</SectionTitle>
        <Row>
          <AiFillGithub size={30} />
          <FiInstagram style={{ marginLeft: '5px' }} color="purple" size={28} />
        </Row>
      </SideInfoSection>
    </div>
  );
};

export default BasicInfo;
