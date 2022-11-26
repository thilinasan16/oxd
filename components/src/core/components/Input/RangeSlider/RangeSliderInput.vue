<template>
  <div class="slider-container">
    <oxd-icon-button
      name="oxd-minus"
      @click="decrementValue()"
    ></oxd-icon-button>
    <input
      type="range"
      class="slider"
      :value="modelValue"
      :style="style"
      :min="min"
      :max="max"
      :step="step"
      v-bind="$attrs"
      @input="onInput"
      ref="rangeInput"
    />
    <oxd-icon-button
      name="oxd-plus"
      @click="incrementValue()"
    ></oxd-icon-button>
    <div class="slider-value">{{ modelValue }} %</div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import IconButton from '@orangehrm/oxd/core/components/Button/Icon.vue';
import Input from '@orangehrm/oxd/core/components/Input/Input.vue';

export default defineComponent({
  name: 'oxd-range-slider-input',
  inheritAttrs: false,
  components: {
    'oxd-icon-button': IconButton,
    'oxd-input': Input,
  },
  data() {
    return {
      latestValue: 0,
    };
  },

  props: {
    // https://v3.vuejs.org/guide/migration/v-model.html#overview
    modelValue: {
      default: 50,
    },
    style: {
      type: Object,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    includeStepButtons: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onInput(e: Event) {
      e.preventDefault();
      console.error(this.latestValue);
      this.$refs.rangeInput.style.background = `linear-gradient(to right, #64728C 0%, #64728C ${((Number(
        (e.target as HTMLInputElement).value,
      ) -
        this.min) /
        (this.max - this.min)) *
        100}%, #e4e7ed ${((Number((e.target as HTMLInputElement).value) -
        this.min) /
        (this.max - this.min)) *
        100}%,#e4e7ed 100%)`;
      this.$emit('update:modelValue', (e.target as HTMLInputElement).value);
      this.$emit('input', e);
      if (this.latestValue > Number((e.target as HTMLInputElement).value)) {
        this.$emit('increment', this.step);
      } else {
        this.$emit('decrement', this.step);
      }
      this.latestValue = Number((e.target as HTMLInputElement).value);
    },
    decrementValue() {
      this.$refs.rangeInput.stepDown();
      this.$refs.rangeInput.style.background = `linear-gradient(to right, #64728C 0%, #64728C ${((Number(
        this.$refs.rangeInput.value,
      ) -
        this.min) /
        (this.max - this.min)) *
        100}%, #e4e7ed ${((Number(this.$refs.rangeInput.value) - this.min) /
        (this.max - this.min)) *
        100}%,#e4e7ed 100%)`;
      this.$emit('decrement', this.step);
    },
    incrementValue() {
      this.$refs.rangeInput.stepUp();
      this.$refs.rangeInput.style.background = `linear-gradient(to right, #64728C 0%, #64728C ${((Number(
        this.$refs.rangeInput.value,
      ) -
        this.min) /
        (this.max - this.min)) *
        100}%, #e4e7ed ${((Number(this.$refs.rangeInput.value) - this.min) /
        (this.max - this.min)) *
        100}%,#e4e7ed 100%)`;
      this.$emit('increment', this.step);
    },
  },
  mounted() {
    this.latestValue = this.modelValue;
    this.$refs.rangeInput.style.background = `linear-gradient(to right, #64728C 0%, #64728C ${((Number(
      this.modelValue,
    ) -
      this.min) /
      (this.max - this.min)) *
      100}%,#e4e7ed ${(Number(this.modelValue) / (this.max - this.min)) *
      100}%, #e4e7ed 100%)`;
  },
});
</script>
<style src="./range-slider-input.scss" lang="scss" scoped></style>
