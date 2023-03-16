<template>
  <button @click="get">GET /message</button>
  <button @click="post">POST /message</button>
  <button @click="options">OPTIONS /message</button>
  <button @click="any">GET /any</button>
  <br />
  {{ res }}
</template>

<script setup>
const res = ref(null);
const post = async () => {
  res.value = await $fetch(`/api/message`, {
    method: 'POST',
    body: JSON.stringify({
      message: 'test',
    }),
  });
};
const get = async () => {
  res.value = await $fetch(`/api/message`, {
    method: 'GET',
  });
};
const options = async () => {
  res.value = await $fetch(`/api/any`, {
    method: 'OPTIONS',
  });
};
const any = async () => {
  res.value = await $fetch(`/api/any`, {
    method: 'OPTIONS',
  }).then(console.log);
};
</script>
