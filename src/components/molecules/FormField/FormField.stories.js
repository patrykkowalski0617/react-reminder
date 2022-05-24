import FormField from './FormField';

export default {
  title: 'Components/Molecules/FormField',
  component: FormField,
};

const Temmplate = (args) => <FormField name="story" id="story" {...args} />;

export const Default = Temmplate.bind({});
Default.args = {
  label: 'login',
};
