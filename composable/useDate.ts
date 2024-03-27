// composable/useDate.ts
import { ref } from 'vue';

export const  useDate = () => {
  const currentDate = ref(new Date());

  // Function to update current date
  function updateDate() {
    currentDate.value = new Date();
  }

  // Update the current date every second
  onMounted(() => {
    setInterval(updateDate, 1000);
  });
  return {
    currentDate,
  };
}

