<template>
    <div>
        <button class="btn" :disabled="disabled">
            <span class="ml-0">
                {{ label }}
              </span>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Button component",
  },
  disabled: Boolean,
});
</script>
