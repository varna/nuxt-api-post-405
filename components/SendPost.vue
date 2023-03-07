<template>
  <nav>
    <a href="/">/index</a>
    <br />
    <a href="/message">/message</a>
  </nav>

  <div v-if="response">response: {{ response }}</div>
  <div v-else-if="error">error: {{ error }}</div>
  <div v-else>loading</div>

  <button @click="post">POST</button>
</template>

<script setup>
const { data: response, error } = await useFetch(`/api/message`, {
  method: 'POST',
  body: {
    message: 'test',
  },
});

const post = async () => {
  const res = await $fetch(`/api/message`, {
    method: 'POST',
    body: {
      message: 'test',
    },
  });
  console.log(res);
};
</script>
