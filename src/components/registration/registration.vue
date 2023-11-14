<template>
  <div>
    <transition name="fade">
      <div
        class="MediaAllContent bg-Charcoal_Grey py-10 fixed top-0 left-0 h-full w-full"
      >
        <div class="MediaContents flex h-full justify-center items-center">
          <div
            class="MediaCildcontents flex flex-col bg-White py-4 p-10 gap-y-5 rounded-l"
          >
            <h3 class="font-bold text-base">Online Shope</h3>
            <p class="text-2xl font-semibold mt-[55px]">Create account</p>
            <!-- Sign In with the google account or gmail -->
            <!-- Sign In with the google account or gmail -->
            <div class="flex justify-center h-16">
              <div
                v-if="loggedIn"
                class="flex justify-center gap-x-[22px] items-center w-[200px] bg-grayddd py-2 rounded-full"
              >
                <img
                  class="rounded-full w-12"
                  :src="user.picture"
                  :alt="user.name"
                />
                <span class="text-xs">{{ user.name }}</span>
              </div>
              <div v-else class="flex items-center justify-center">
                <GoogleLogin :callback="callback" prompt auto-login />
              </div>
            </div>

            <div class="flex justify-center items-center gap-x-3">
              <div class="bg-gray-400 h-[1.5px] w-full"></div>
              OR
              <div class="bg-gray-400 h-[1.5px] w-full"></div>
            </div>
            <form action="">
              <div class="flex flex-col">
                <label for="">First Name*</label>
                <input
                  class="MedaiInput px-2 py-1 rounded border-[2px]"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div class="flex flex-col my-2">
                <label for="" class="flex justify-between"
                  >Email*
                  <span class="text-xs mt-1 text-Tomato">
                    {{ emailError }}
                  </span>
                </label>
                <input
                  :class="{ Errorstyle: EmailErrorStyle && emailError }"
                  class="MedaiInput px-2 py-1 rounded border-[2px]"
                  type="emial"
                  required
                  placeholder="email@company.com"
                />
              </div>
              <div class="flex flex-col">
                <label for="">Password*</label>
                <input
                  class="MedaiInput px-2 w-80 py-1 rounded border-[2px]"
                  type="text"
                  placeholder="Creat a password"
                />
              </div>
            </form>
            <LoadingButton
              class="AlertButton bg-Charcoal_Grey rounded-md text-White text-center cursor-pointer hover:bg-Tomato"
              @click="toggleModel"
              >Creat Account</LoadingButton
            >
            <div class="navregiter flex justify-center items-center">
              <p>Already hava an account?</p>
              <router-link to="/login">Log In</router-link>
            </div>
            <router-link to="/">Back</router-link>
          </div>
          <img
            class="h-[653px] w-[650px] rounded-r"
            src="../../../image/Register.jpg"
            alt=""
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import LoadingButton from '../button/LoadingButton.vue';
import { ref, computed, onMounted } from 'vue';
import { decodeCredential } from 'vue3-google-login';
// import { googleTokenLogin } from "vue3-google-login";
// defineProps({
//   header: String,
//   text: String,
//   theme: String
// })
const isLoading = ref(false);
defineProps({
  theme: String,
  email: String,
});
const closemodal = () => {
  emit('close');
  isLoading.value = true;
  setTimeout(() => (isLoading.value = false), 100);
};

const emit = defineEmits(['close']);
defineExpose({ closemodal });

// //// Email error
///////////////////////////////////

const Email = ref('');
const emailError = ref('');
const toggleModel = () => {
  const isValidEmail = Email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(Email);
  };

  if (Email.value === '') {
    emailError.value = 'No Email address';
  } else if (isValidEmail(Email.value)) {
    showModel.value = true;
    emailError.value = '';
  } else {
    emailError.value = 'invalid Email';
    Email.value = '';
  }
  isLoading.value = true;
  setTimeout(() => (isLoading.value = false), 100);
};
const EmailErrorStyle = computed(() => {
  return emailError.value;
});
////////// Google API google login account
const loggedIn = ref(false);
const user = ref(null);

const callback = response => {
  console.log('Logged in');
  console.log(response);
  user.value = decodeCredential(response.credential);
  console.log(user);
  loggedIn.value = true;
};
</script>
<style>
.navregiter a {
  text-decoration: underline;
}
.Errorstyle {
  background-color: rgba(255, 99, 71, 0.262);
  border: 2.5px solid rgba(175, 5, 5, 0.342);
  color: rgba(224, 111, 91, 0.828);
  outline-color: rgba(175, 5, 5, 0.342);
}
</style>
