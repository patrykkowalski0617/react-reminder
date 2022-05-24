import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Temmplate = (args) => <StudentsListItem {...args} />;

export const BadAverage = Temmplate.bind({});
BadAverage.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '2',
  },
};

export const MediumAverage = Temmplate.bind({});
MediumAverage.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '3.5',
  },
};

export const GoodAverage = Temmplate.bind({});
GoodAverage.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '4.1',
  },
};

export const NoAverage = Temmplate.bind({});
NoAverage.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: null,
  },
};
