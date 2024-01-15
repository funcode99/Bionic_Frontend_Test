<script setup>
import Api from "../utils/api/index";
import { ref, onBeforeMount, watch } from "vue";
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";
import { useToast } from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-sugar.css';
// import { configureCompat } from 'vue'

// configureCompat({
//   compatConfig: { MODE: 3 }
// })

const toast = useToast()
let instanceArray = ref([]);

const fetch = async () => {
  try {
    const api = await Api.get("pt-job-posts/no-auth");
    instanceArray.value = api?.data;
    console.log(instanceArray.value);
  } catch (error) {
    console.log("terjadi error!");
  }
};

const onFileSelected = (event) => {
  const file = event.target.files[0];
  filename.value = file.name;
  // selectedImage.value = file ? file : null;
  // tempItem.value[ind].attachment = selectedImage.value;
  // tempItem.value[ind].id = dataId;
};

onBeforeMount(() => {
  fetch();
});

let displayName = ref("");
let email = ref("");
let phone = ref("");
let message = ref("");
let subject = ref("");
let filename = ref("");

const callPostAPI = async () => {
  try {
    const post = await Api.post("pt-job-applies/no-auth", {
      displayName: displayName.value,
      subject: subject.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
      ptJobApplyType: "APPLICATION",
      ptJobPost: {
        id: "1",
      },
      isActive: false,
      filename: filename.value,
    });
    console.log("hasil submit", post);
    toast.success("Berhasil!")
  } catch (error) {
    toast.error("Gagal!")
  }
};
</script>

<template>
  <h1 class="text-purple-400">Api Layout</h1>
  <div>
    <div></div>
    <!-- v-html -->
    <div v-for="(data, index) in instanceArray">
      <div>

        <div class="flex justify-between my-3 mx-2">
          <h3>{{ data.title }}</h3>
          <button 
            button 
            class="btn btn-primary" 
            type="button" 
            data-bs-toggle="collapse" 
            :data-bs-target="`#collapseExample-${index}`" 
            aria-expanded="false" 
            :aria-controls="`collapseExample-${index}`"
            @click="subject = data.title"
            >
            See Job
          </button>
        </div>

          <div class="collapse" :id="`collapseExample-${index}`">
            
            <div v-html="data.description.txt"></div>
          </div>
       
      </div>
    </div>

    <form @submit.prevent="callPostAPI">
      <div class="mt-4 flex flex-col gap-y-4">

        <h1>{{ subject }}</h1>

        <h5>Send Your Job Application</h5>
        <div class="flex gap-x-3">
          <div class="flex-1">
            <h5>Your Name</h5>
            <input
              type="text"
              v-model="displayName"
              placeholder="Enter your name"
            />
          </div>
          <div class="flex-1">
            <h5>Mobile Number</h5>
            <input
              type="text"
              v-model="phone"
              placeholder="Enter your mobile number"
            />
          </div>
        </div>
        <div class="flex gap-x-3">
          <div class="flex-1">
            <h5>Email Address</h5>
            <input 
              type="text" 
              v-model="email" 
              placeholder="Enter your email" 
            />
          </div>
          <div class="flex-1">
            <h5>Write your message here...</h5>
            <input
              type="text"
              v-model="message"
              placeholder="Enter your message"
              data-cy="message"
            />
          </div>
        </div>
        <!-- file -->
        <div>
          <h5>File</h5>
          <input
            type="file"
            id="logo_company"
            accept="image/*"
            @change="onFileSelected($event)"
          />
        </div>
      </div>

      <button class="text-white my-2 p-2 bg-blue-700 rounded" type="submit" data-cy="submit">
        Send Message
      </button>
    </form>
  </div>
</template>

<style scoped>
:deep(h5) {
  margin-top: 10px !important;
}

.collapse {
  visibility: visible;
}
</style>
