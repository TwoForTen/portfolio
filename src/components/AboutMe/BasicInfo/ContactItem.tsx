import React from 'react';

import { Row, Typography } from '../../../styles/globalComponents';

interface ContactItemProps {
  icon: any;
  info: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, info }) => {
  return (
    <li style={{ margin: '15px 0' }}>
      <Row withMargin>
        <Icon />
        <Typography variant="span" style={{ marginLeft: '10px' }}>
          {info}
        </Typography>
      </Row>
    </li>
  );
};

export default ContactItem;
