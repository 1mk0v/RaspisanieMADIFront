<template>
  <div 
    @click="eventHandler"
    :class="{'key-container': isButton, 'key-container-none-button': !(isButton) }"
    :style="{
      flex: (flexAuto) ? '1 1 auto' : 'none',
      border: (isButton) ? '1px solid #fff' : 'none',
      cursor: (isButton) ? 'pointer' : 'default',
      padding: blockPaddingValue
    }">
    <div
      :style="{
        alignSelf: textAlign,
        fontSize: textFontSize,
        fontWeight: textFontWeight
      }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultFontSize: '18px',
      defaultFontWeight: '400',
      defaultBlockPadding: '5px 10px',
    }
  },
  props: {
    nameId: [String, Number],
    flexAuto: Boolean,
    isButton: Boolean,
    blockPadding: String,
    textAlign: String,
    textSize: String,
    textWeight: String
  },
  emits: ['clickComponentEvent'],
  name: 'BlockWithData',
  methods: {
    clickEvent(event) {
      let data = {"id": this.nameId, "value":event.target.innerText}
      return this.$emit('clickComponentEvent', data)
    }
  },
  computed: {
    blockPaddingValue() {
      return this.blockPadding || this.defaultBlockPadding
    },
    textFontSize() {
      return this.textSize || this.defaultFontSize
    },
    textFontWeight() {
      return this.textWeight || this.defaultFontWeight
    },
    eventHandler() {
      return this.isButton ? this.clickEvent: null
    }
  }
}
</script>

<style scoped>
@media (hover:none)  {
  .key-container:active {
  background: rgba(0, 0, 0, 0.50);
}
}
.key-container {
  display: flex;
  border-radius: 10px;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.30);
}

.key-container-none-button {
  display: flex;
  border-radius: 10px;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.30);
}
</style>