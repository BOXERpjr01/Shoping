<template>
  <div>
    <transition name="fade">
      <div
        class="MediaAllContentregister overflow-y-scroll bg-Charcoal_Grey py-10 fixed z-50 top-0 left-0 h-full w-full"
      >
        <div class="MediaContents flex h-full justify-center items-center">
          <div
            class="MediaCildcontents flex flex-col bg-White py-4 p-10 gap-y-5 rounded-l"
          >
            <img class="w-[60px]" src="../../../image/logo.jpg" alt="" />
            <p class="text-2xl font-semibold mt-[55px]">Create account</p>
            <!-- Sign In with the google account or gmail -->
            <!-- Sign In with the google account or gmail -->
            <button
              @click="login"
              class="flex items-center justify-center gap-x-3 border-[2px] py-2 rounded"
            >
              <img src="../../../image/google.svg" alt="" />Login Using Google
            </button>

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

              <div class="registerinput flex flex-col my-2">
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

            <div class="navregiter flex gap-x-2 justify-center items-center">
              <p class="text-sm">Already hava an account?</p>
              <router-link to="/login">Log In</router-link>
            </div>
            <router-link to="/">Back</router-link>
          </div>

          <img
            class="registerimage h-[101.2%] w-[45%] rounded-r"
            src="../../../image/Register.jpg"
            alt=""
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import LoadingButton from '../../components/button/LoadingButton.vue';
import { ref, computed, onMounted } from 'vue';
import { googleSdkLoaded } from 'vue3-google-login';
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
const login = () => {
  googleSdkLoaded(google => {
    google.accounts.oauth2
      .initCodeClient({
        client_id:
          '580283333572-hufpae42qvv7odqu4pkm0rq9hbfaf2v9.apps.googleusercontent.com',
        scope: 'email profile openid',
        callback: response => {
          console.log('Handle the response', response);
        },
      })
      .requestCode();
  });
};
</script>
<style>
.navregiter a {
  text-decoration: underline;
  font-size: 14px;
}
.Errorstyle {
  background-color: rgba(255, 99, 71, 0.262);
  border: 2.5px solid rgba(175, 5, 5, 0.342);
  color: rgba(224, 111, 91, 0.828);
  outline-color: rgba(175, 5, 5, 0.342);
}
.MediaAllContentregister::-webkit-scrollbar {
  display: none;
}
</style>
