import RangeSliderInput from '@orangehrm/oxd/core/components/Input/RangeSlider/RangeSliderInput';
import RangeSliderInputEvents from './RangeSliderInputEvents.story.vue';

export default {
  title: 'Inputs/RangeSliderInput',
  component: RangeSliderInput,
  argTypes: {
    modelValue: {
      control: {type: 'object'},
      table: {
        type: {summary: 'Set value to the input'},
      },
    },
    min: {
      control: {type: 'object'},
      table: {
        type: {summary: 'Set min value to the input'},
      },
    },
    max: {
      control: {type: 'function'},
      table: {
        type: {summary: 'Set max value to the input'},
      },
    },
    step: {
      control: {type: 'function'},
      table: {
        type: {
          summary: `Set value to the step`,
        },
      },
    },
    includeStepButtons: {
      control: {type: 'boolean'},
      table: {
        type: {summary: 'show and hide step buttons'},
      },
    },
  },
};

const Template = (args) => ({
  setup() {
    return {args};
  },
  components: {'oxd-range-slider-input': RangeSliderInput},
  template: '<oxd-range-slider-input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    source: {
      code: '<oxd-range-slider-input/>',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  Disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: '<oxd-range-slider-input \n' + ':disabled=true/>',
    },
  },
};

export const Events = () => RangeSliderInputEvents;

Events.parameters = {
  docs: {
    source: {
      code:
        '  <div> \n' +
        '<oxd-range-slider-input \n' +
        '@input="onInput()"\n' +
        '@focus="onFocus()"\n' +
        '@blur="onBlur()"\n' +
        '@click="onClick()"\n' +
        '@keyup="onKeyUp()"\n' +
        '/>\n' +
        '</div>\n' +
        '<div style="margin-top: 2rem">\n' +
        '<span v-if="InputEvent">Input Event Triggered</span>\n' +
        '<span v-if="FocusEvent">Focus Event Triggered</span>\n' +
        '<span v-if="BlurEvent">Blur Event Triggered</span>\n' +
        '<span v-if="ClickEvent">Click Event Triggered</span>\n' +
        '<span v-if="KeyUpEvent">KeyUp Event Triggered</span>\n' +
        '</div>\n' +
        '//\n' +
        'File -> RangeSliderInputEvents.story.vue',
    },
  },
};
