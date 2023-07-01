import { Badge, Calendar } from 'antd';
import React from 'react';
import { Grid } from '@material-ui/core';
import './styleCal.css';

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: '6pm to 9pm',
        },
        {
          type: 'success',
          content: 'Present',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: '2pm to 4pm',
        },
        {
          type: 'error',
          content: 'Not Present',
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: '5pm to 7pm',
        },
        {
          type: 'success',
          content: 'Present',
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const MenteeCalender = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return(  
    <Grid container justifyContent="center">
      <Grid item xs={10} style={{ width: '40vw', height: '40vw' }}>
  <Calendar cellRender={cellRender} /> 
  </Grid>
  </Grid>
  );
};
export default MenteeCalender;