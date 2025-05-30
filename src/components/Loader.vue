<template>
  <div class="loader"></div>
</template>

<style lang="css" scoped>
  .loader {
    border: 16px solid #314004;
    border-top: 16px solid #CC9900;
    border-bottom: 16px solid #7E0021;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>