import {ref} from "vue";

const result = ref(null);
const getData = async (currentSlide) => {
   const res = await fetch(`https://demo1api.herokuapp.com/api/pray/${currentSlide}`);
   const data = await res.json();
   result.value = data;
}
export {result, getData}
