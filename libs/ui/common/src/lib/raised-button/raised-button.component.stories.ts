import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RaisedButtonComponent } from './raised-button.component';

export default {
  title: 'RaisedButtonComponent',
  component: RaisedButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<RaisedButtonComponent>;

const Template: Story<RaisedButtonComponent> = (args: RaisedButtonComponent) => ({
  props: args,
  template: `
    <config-tool-raised-button [color]="" [disabled]="false">Test</config-tool-raised-button>
  `
});


export const Primary = Template.bind({});
Primary.args = {
    color:  "primary",
    disabled:  false,
}
