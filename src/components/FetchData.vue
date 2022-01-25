<script>
import {defineComponent, ref} from "@vue/runtime-core";

export default defineComponent({
   props: ['url'],
   setup(props, ctx) {
      let res = ref("")
      let loading = ref(true);

      fetch(`https://demo1api.herokuapp.com/api/pray/${props.url}`)
         .then(responce => responce.json())
         .then(data => {
            res.value = data;
            loading.value = false;
         })
      return () => ctx.slots.default({res: res.value, loading: loading.value})
   }

})
</script>
