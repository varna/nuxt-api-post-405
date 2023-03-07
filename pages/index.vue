<template>
  <div v-if="response">response: {{ response }}</div>
  <div v-else-if="error">error: {{ error }}</div>
  <div v-else>loading</div>
</template>

<script setup>
const { data: response, error } = await useFetch(`/api/message`, {
  method: 'POST',
  body: {
    message: 'test',
  },
});
</script>
