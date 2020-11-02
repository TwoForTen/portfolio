import React from 'react';
import { MdMailOutline, MdPhoneIphone, MdLocationOn } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { Trans } from 'gatsby-plugin-react-i18next';

import ContactItem from './ContactItem';

import { Avatar, AvatarContainer, SideInfoSection } from './basicInfo.styled';
import { Row, Typography } from '../../../styles/globalComponents';
import { SectionTitle, TitleWithSubtitle } from '../aboutMe.styled';

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
        <TitleWithSubtitle>
          <Typography variant="h3" style={{ fontWeight: 'bold' }}>
            Noel Denis Rostohar
          </Typography>
          <Typography variant="span">Frontend Developer</Typography>
        </TitleWithSubtitle>
      </Row>
      <SectionTitle>
        <Trans>{'about_me.basic_info'}</Trans>
      </SectionTitle>
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
        <SectionTitle>
          <Trans>{'about_me.external_links'}</Trans>
        </SectionTitle>
        <Row>
          <AiFillGithub size={30} color={theme.colors.darkText} />
          <FiInstagram
            style={{ marginLeft: '5px' }}
            color={theme.colors.darkText}
            size={28}
          />
        </Row>
      </SideInfoSection>
    </div>
  );
};

export default BasicInfo;
