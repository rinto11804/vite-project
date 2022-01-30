<script>
import {defineComponent, ref} from "@vue/runtime-core";
function dataCache(endpoint) {
   const dataRecvied = JSON.parse(localStorage.getItem("prayers"));
   if (dataRecvied)
      return {data: dataRecvied[endpoint]}
   else
      fetch(`https://demo1api.herokuapp.com/api/pray`)
         .then(responce => responce.json())
         .then(data => {localStorage.setItem("prayers", JSON.stringify(data))})
}

export default defineComponent({
   props: ['url'],
   setup(props, ctx) {
      let res = ref("")
      let loading = ref(true);
      if (dataCache(props.url)) {
         res.value = dataCache(props.url).data;
         loading.value = false;
      }
      else {
         fetch(`https://demo1api.herokuapp.com/api/pray/${props.url}`)
            .then(responce => responce.json())
            .then(data => {
               res.value = data;
               loading.value = false;
            })
      }
      return () => ctx.slots.default({res: res.value, loading: loading.value})
   }

})
</script>
