import { Button } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

const Temmplate = (args) => <Button {...args}>Click</Button>;

export const Default = Temmplate.bind({});

export const Big = Temmplate.bind({});
Big.args = {
  isBig: true,
};
